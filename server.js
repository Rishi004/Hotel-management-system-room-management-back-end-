const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const AvailableApiRoutes = require("./routes/AvailableApiRoutes");
const BookingApiRoutes = require("./routes/BookingApiRoutes");
const AllApiRoutes = require("./routes/AllApiRoutes");
const ReportApiRoutes = require("./routes/ReportApiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/available", AvailableApiRoutes);
app.use("/booking", BookingApiRoutes);
app.use("/all", AllApiRoutes);
app.use("/report", ReportApiRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening port number ${PORT}`);
    });
});
