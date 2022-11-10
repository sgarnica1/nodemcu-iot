const mongoose = require('mongoose');

const TempHumiditySchema = new mongoose.Schema({
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model('TempHumidity', TempHumiditySchema);