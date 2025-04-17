const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

exports.createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;
  const newEvent = new Event({ title, description, date, location });
  await newEvent.save();
  res.status(201).json(newEvent);
};
