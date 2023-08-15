const { Appointment } = require("../models");

const createAppointment = async (req, res = response) => {
  try {
    const appointment = await Appointment.create(req.body);

    res.status(201).json({
      ok: true,
      appointment
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please, contact the admin",
    });
  }
};
const getAppointments = async (req, res) => {
  const appointments = await Appointment.findAll();

  res.json({ appointments });
};

module.exports = {
  createAppointment,
  getAppointments,
};
