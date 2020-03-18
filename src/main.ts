import { app } from "./app";

const PORT = app.get("port");

const server = app.listen(PORT, function() {
  console.log(`Server up at ${PORT}`);
});

export default server;
