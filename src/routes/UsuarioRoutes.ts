import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const UsuarioRouter = Router();

//get pegar as coisas no servido
UsuarioRouter.get("/usuarios", UsuarioController.listUsuarios);
 
UsuarioRouter.post("/usuario", UsuarioController.createUsuario);

UsuarioRouter.put("/usuario", UsuarioController.updateUsuario);

UsuarioRouter.delete("/usuario", UsuarioController.deleteUsuario);

export default UsuarioRouter;