import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserControllerr = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserControllerr.handle);
router.post("/tags", createTagController.handle);
router.post("/login", authenticateUserController.handle);

export { router };
