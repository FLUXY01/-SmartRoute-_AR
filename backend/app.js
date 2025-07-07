const express = require("express");
const cors = require("cors");
const helmet  = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
require("express-async-errors");
require("dotenv").config();          

require("./utils/firebase");   

//const routeRouter    = require("./routes/route.routes");
//const crowdRouter    = require("./routes/crowd.routes");
//const checkoutRouter = require("./routes/checkout.routes");

//const notFound     = require("./middleware/notFound");
//const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());

//app.use("/api/route",routeRouter);       
//app.use("/api/crowd",crowdRouter);      
//app.use("/api/checkout",checkoutRouter);

//app.get("/status", (_, res) => res.json({ ok: true }));

//app.use(notFound);
//app.use(errorHandler);

module.exports = app;
