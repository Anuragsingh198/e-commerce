const express = require("express");
require("colors");
// const data = require("./data/products");
const dotenv = require("dotenv");
const cors = require('cors');
const conndb = require("./config/config(mongo)");
const app = express();
const productsroutes = require("./routes/ProductsRoutes");
const { errorHandler } = require("./middlewares/errroMiddleware");
const userRoutes = require('./routes/userRoutes');
// configuration of env
dotenv.config();
// connecting   mongo db database
conndb();
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json()); // middleware for  bodyparser


app.use("/api", productsroutes);
app.use('/api/user' , userRoutes);
app.use(errorHandler);


app.get("/", (req, res) => {
  res.send("<h1> Welcome to Node Server</h1>");
});

const PORT = 8081;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server  running in development  mode on port 8081`.inverse);
});
