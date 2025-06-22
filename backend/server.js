const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: [
        /*dev environment*/
        "http://localhost:5173", 
        /*production environment => It is necessary to change to 'https' and the application domain */
        "http://localhost"],
};

app.use(cors(corsOptions));

app.get("/api", (req,res) => {
    res.json({Services: ["Business Automation", "Reporting Solutions for Your Existing Database", "Hardware and software Integrations", "Other"]})
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});