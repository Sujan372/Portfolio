app.post("/contact", (req, res) => {
  console.log("Request received");   // 👈 ADD THIS
  console.log(req.body);             // 👈 ADD THIS

  const { name, email, message } = req.body;

  db.query(
    "INSERT INTO contacts (name,number, email, message) VALUES (?, ?, ?)",
    [name,number, email, message],
    (err) => {
      if (err) return res.send("Error");
      res.send("Saved!");
    }
  );
});