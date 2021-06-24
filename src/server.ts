import express from "express";
import "reflect-metadata"
import "./database"
import { router } from "./routes";

const app = express();

app.use(router)

app.get("/test", (request, response) => {
  // Request => tudo que está entrando
  // Response => tudo que está saindo
  return response.send("Olá NLW")
});


app.post("/test-post", (request, response) => {
  // Request => tudo que está entrando
  // Response => tudo que está saindo
  return response.send("Olá NLW método POST")
});

app.listen(3000, () => console.log("Server is running"));
