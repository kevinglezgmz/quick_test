const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.use("/api", require("./routes/api/quick_api"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
