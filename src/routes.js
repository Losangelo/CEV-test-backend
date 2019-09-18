import { Router } from "express";
import SurvivorController from "./app/controllers/survivorController";
import ReportingInfectionController from "./app/controllers/reportingInfectionController";
import infectMiddleware from "./app/middlewares/is_infected";

const routes = new Router();

routes.get("/", (req, res) => {
  console.log("Rota Raiz!!!");
  return res.json({
    helloWord: "Seja bem vindo a ZSSN (Rede Social de Sobrevivência Zumbi)",
  });
});

//list all survivor no infecteds
routes.get("/survivors", SurvivorController.index);

//Create new survivor
routes.post("/survivor", SurvivorController.store);

//update only longitude and latitude of survivor no infected
routes.put("/survivor/:id", infectMiddleware, SurvivorController.update);

//declared e update survivor infected
routes.put(
  "/survivor/:id/reportinfected/:infectedId",
  infectMiddleware,
  ReportingInfectionController.store
);

//Reports
routes.get("/survivor/reports/", ReportingInfectionController.index);

/*
  //route to return the percentage of infected survivors
  routes.get("/survivors/reports/infected", SurvivorController.infected);
  //route to return the percentage of non infected survivors
  routes.get("/survivors/reports/noninfected", SurvivorController.nonInfected);
  //route to return the average amount of resources per survivor
  routes.get("/survivors/reports/averageamount", SurvivorController.average);
*/

export default routes;
