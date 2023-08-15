const { Contact } = require("../models");

const createContact = async (req, res = response) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      ok: true,
      contact
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please, contact the admin",
    });
  }
};
const getContacts = async (req, res) => {
  const contacts = await Contact.findAll();

  res.json({ contacts });
};

module.exports = {
  createContact,
  getContacts,
};
