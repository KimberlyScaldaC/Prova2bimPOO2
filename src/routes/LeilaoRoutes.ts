import { Router } from "express";
import LeilaoController from "../controllers/LeilaoController";

const LeilaoRouter = Router();

//get pegar as coisas no servido
LeilaoRouter.get("/leiloes", LeilaoController.listLeiloes);
 
LeilaoRouter.post("/leilao", LeilaoController.createLeilao);

LeilaoRouter.put("/leilao", LeilaoController.updateLeilao);

LeilaoRouter.delete("/leilao", LeilaoController.deleteLeilao);

export default LeilaoRouter;