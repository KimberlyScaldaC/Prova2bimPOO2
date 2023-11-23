import { Router } from "express";
import LanceController from "../controllers/LanceController";

const LanceRouter = Router();

//get pegar as coisas no servido
LanceRouter.get("/lances", LanceController.listLances);
 
LanceRouter.post("/lance", LanceController.createLance);

LanceRouter.put("/lance", LanceController.updateLance);

LanceRouter.delete("/lance", LanceController.deleteLance);

export default LanceRouter;