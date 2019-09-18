import Survivor from "../models/survivor";

class SurvivorController {
  async index(req, res) {
    const survivorAll = await Survivor.findAll({ where: { infected: false } });
    return res.json(survivorAll);
  }

  async store(req, res) {
    const survivor = await Survivor.create(req.body);
    return res.json(survivor);
  }

  async update(req, res) {
    const { id } = req.params;

    const survivor = await Survivor.findByPk(id);

    if (!survivor) {
      return res.status(404).json({ error: "Survivor not found!" });
    }

    const { latitude, longitude } = await survivor.update(req.body);

    return res.json({ latitude, longitude });
  }
}

export default new SurvivorController();
