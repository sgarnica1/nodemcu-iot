const TempHumidity = require("../models/TempHumidity");

const getData = async (req, res) => {
  if (req.query.temperature && req.query.humidity) {
    createData(req, res);
    return;
  }
  try {
    const data = await TempHumidity.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: err.message });
  }
};
const createData = async (req, res) => {
  const data = {
    temperature: req.query.temperature,
    humidity: req.query.humidity,
  };
  try {
    const newData = await TempHumidity.create(data);
    res.status(201).json(newData);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
module.exports = getData;
