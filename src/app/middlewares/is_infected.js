import Survivor from "../models/survivor";

export default async (req, res, next) => {
  const { id } = req.params;
  const survivor = await Survivor.findByPk(id);

  if (!survivor) {
    return res.status(404).json({ error: "Survivor not found!" });
  }

  if (survivor.infected) {
    return res.json({
      error:
        "This survivor is prohibited for this operation as it is an infected",
    });
  }

  return next();
};
