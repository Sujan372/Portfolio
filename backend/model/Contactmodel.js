        const db = require("../db");
        
        const saveContact = (data, callback) => {
          const { name, email, phone, message } = data;
        
          const sql = "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
        
          db.query(sql, [name, email, phone, message], callback);
        };
        
        module.exports = saveContact ;   