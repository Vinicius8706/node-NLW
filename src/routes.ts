import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController"
import {CreateTagController} from "./controllers/CreateTagController"

const router = Router();

const createUserControllerr = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserControllerr.handle);
router.post("/tags", createTagController.handle);

export { router };
