import { Router } from "express";
import { CreateCriptoController } from "./controllers/CreateCriptoController";
import { ListCriptosController } from "./controllers/ListCriptosController";

export const router = Router();

const createCriptoController = new CreateCriptoController();
const listCriptosController = new ListCriptosController();

router.post("/criptos", createCriptoController.handle);
router.get("/criptos", listCriptosController.handle);