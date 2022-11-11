const TempHumidity = require("../models/TempHumidity");
const getData = async (req, res) => {
  console.log(req.query)
  // res.json({query: req.body});
  if (req.query.temperature && req.query.humidity) {
    createData(req, res);
    return;
  }
  try {
    const data = await TempHumidity.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createData = async (req, res) => {
  const data = new TempHumidity({
    temperature: req.query.temperature,
    humidity: req.query.humidity,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
module.exports = getData;
