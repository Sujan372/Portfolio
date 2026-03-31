const contactModel = require("../models/contactModel");

exports.submitContact = (req, res) => {
  const { name, email, message } = req.body;

  contactModel.insertContact({ name, email, message }, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error saving data ❌");
    }

    res.send("Message received ✅");
  });
};