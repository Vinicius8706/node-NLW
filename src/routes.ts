import { Router } from "express";
import { CreaterUserController } from "./controllers/CreaterUserController"
const router = Router();

const createUserControllerr = new CreaterUserController();

router.post("/users", createUserControllerr.handle);

export { router };
