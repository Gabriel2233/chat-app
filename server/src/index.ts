import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

type JoinPayload = {
  name: string;
  room: string;
};

type User = {
  id: string;
  name: string;
  room: string;
};

type CheckReturn = {
  error: Error | null;
};

const users: User[] = [];

function userExists(name: string): CheckReturn {
  const userExists = users.find((user) => user.name === name);

  if (userExists) {
    return { error: new Error("user already exists") };
  }

  return {
    error: null,
  };
}

function usersInRoom(room: string): User[] {
  return users.filter((user) => user.room === room);
}

function findUser(id: string): User {
  const user = users.find((user) => user.id === id);

  return user!;
}

function removeUser(id: string): User {
  const index = users.findIndex((user) => user.id === id);

  const user = users.splice(index, 1)[0];

  return user!;
}

io.on("connection", (socket: Socket) => {
  socket.on("join", ({ room, name }: JoinPayload) => {
    const { error } = userExists(name);

    if (error) {
      console.log(error);
    }

    socket.join(room);

    io.to(room).emit("message", { user: "Admin", message: `${name} joined` });
    io.to(room).emit("room-data", { room, users: usersInRoom(room) });
  });

  socket.on("send-message", ({ room, message }) => {
    const user = findUser(socket.id);

    io.to(room).emit("message", { user, message });
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    io.to(user.room).emit("message", {
      user: "Admin",
      message: `${user.name} left the chat`,
    });
  });
});

httpServer.listen(4001, () => console.log("server on 4001"));
