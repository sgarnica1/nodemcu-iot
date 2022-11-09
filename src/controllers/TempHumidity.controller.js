const TempHumidity = require('../models/TempHumidity');

const controller = {
  getData: async (req, res) => {
    try {
      const data = await TempHumidity.find();
      res.status(200).json(data);
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  },
  createData: async (req, res) => {
    console.log(req.body);
    const data = new TempHumidity({
      temperature: req.body.temperature,
      humidity: req.body.humidity
    });
    try {
      const newData = await data.save();
      res.status(201).json(newData);
    } catch(err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = controller;