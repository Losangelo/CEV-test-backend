import Survivor from "../models/survivor";

class ReportingInfectionController {
  async store(req, res) {
    const { id, infectedId } = req.params;

    const existSurvivor = await Survivor.findByPk(id);
    const survivorInfected = await Survivor.findByPk(infectedId);

    if (!existSurvivor) {
      return res.status(404).json({ error: "Survivor not found!" });
    }

    if (!survivorInfected) {
      return res.status(404).json({ error: "Survivor Infected not found!" });
    }

    let whoIndicated = [];

    whoIndicated.push(...survivorInfected.infection_attested_for);

    if (whoIndicated.includes(null)) {
      whoIndicated.shift();
    }

    /*
      if you have already nominated this survivor, no more,
      only another survivor can!
    */
    if (whoIndicated.includes(id)) {
      return res.json({ error: "You already indicated this survivor!" });
    }

    whoIndicated.push(id).toString();

    const infect = survivorInfected.infections + 1;

    //return res.json(whoIndicated);

    const { updateFieldInfections } = await survivorInfected.update({
      infections: infect,
      infection_attested_for: whoIndicated,
    });

    /*
      Should be blocked if you already have 3 alerts
    */
    if (infect >= 3) {
      const { infected, infections } = await survivorInfected.update({
        infected: true,
        infections: infect,
      });

      return res.json({ messege: "Survivor is infected!" });
    }

    return res.json({ messege: "healthy surviving!!!" });
  }

  async index(req, res) {
    const totalInfecteds = await Survivor.count({ where: { infected: true } });

    const totalNoInfecteds = await Survivor.count({
      where: { infected: false },
    });

    const total = totalInfecteds + totalNoInfecteds;

    const infectedPerc = (total * totalInfecteds) / 100;

    const noInfectedPerc = (total * totalNoInfecteds) / 100;

    //Sums
    const waterTot = await Survivor.sum("water");
    const ammunitionTot = await Survivor.sum("ammunition");
    const medicationTot = await Survivor.sum("medication");
    const foodTot = await Survivor.sum("food");

    //Avgs
    const waterAvg = waterTot / totalNoInfecteds;
    const ammunitionAvg = ammunitionTot / totalNoInfecteds;
    const medicationAvg = medicationTot / totalNoInfecteds;
    const foodAvg = foodTot / totalNoInfecteds;

    return res.json({
      "Total of Suvivors": total,
      Infecteds: totalInfecteds,
      "percentage Of Infecteds": `${infectedPerc} %`,
      "No Infecteds": totalNoInfecteds,
      "percentage of NO Infecteds": `${noInfectedPerc} %`,
      "Total Water is": `${waterTot} and an average of ${waterAvg} per survivor uninfected`,
      "Total ammunitions is": `${ammunitionTot} and an average of ${ammunitionAvg} per survivor uninfected`,
      "Total medications is": `${medicationTot} and an average of ${medicationAvg} per survivor uninfected`,
      "Total foods is": `${foodTot} and an average of ${waterAvg} per survivor uninfected`,
    });
  }
}
export default new ReportingInfectionController();

/*
  Este sobrevivente já foi marcado por você, tente outro sobrevivente para atesta-lo
  This survivor has already been tagged by you, try another survivor to attest to it.
*/
