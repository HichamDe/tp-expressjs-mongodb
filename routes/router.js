import { Router } from "express";
import EquipeController from "../app/controller/EquipeController.js";
import JoueurController from "../app/controller/JoueurController.js";


const equipeRouter = Router();
const joueurRouter = Router();
const EquipeCtrl = new EquipeController();
const JoueurCtrl = new JoueurController();

equipeRouter.get('/', EquipeCtrl.getAll);
equipeRouter.get('/:id', EquipeCtrl.getOne);
equipeRouter.post('/', EquipeCtrl.store);
equipeRouter.delete('/:id', EquipeCtrl.destroy),
equipeRouter.put('/:id', EquipeCtrl.edit);




joueurRouter.get('/', JoueurCtrl.getAll);
joueurRouter.get('/:id', JoueurCtrl.getOne);
joueurRouter.post('/', JoueurCtrl.store);
joueurRouter.delete('/:id', JoueurCtrl.destroy)
joueurRouter.put('/:id', JoueurCtrl.edit);


export { joueurRouter, equipeRouter };