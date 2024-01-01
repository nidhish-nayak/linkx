const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Daya@66Belt",
    database: "linkx",
});

// Attempt to connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        // Connection failed
    } else {
        console.log("Connected to MySQL!");
        // Connection successful
        // Perform database operations here if needed
    }

    // Close the connection to avoid leaving it hanging
    connection.end();
});
