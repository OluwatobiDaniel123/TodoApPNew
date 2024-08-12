const express = require("express");
const connectDB = require("./config/dbConnection");
const todosRoute = require("./routes/TodoRoute");
const cors = require("cors");
const Product = require("./model/Product");
const { getAllProduct } = require("./controllers/TodoControllers");

// INITIALIZING APPLICATION
const app = express();

// CONNECTING DATABASE
connectDB();

// MiddleWare
app.use(express.json());
app.use(cors());

// ROUTERS
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.use("/api/todos", todosRoute);

app.use("/api/auth", require("./routes/authRoute"));

app.use("/api/products", getAllProduct);

// GETTING OUR PORT
const PORT = process.env.PORT || 5000;

// LISTENING TO OUR PORT
app.listen(PORT, () => {
  console.log(`Server started on port:${PORT}`);
});
