const app = require("express")();
const bp = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoDBURL = "mongodb://127.0.0.1/testpi";

const users = require("./schema");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use(cors());

app.use(bp.urlencoded({ extended: false }));

// parse application/json
app.use(bp.json());

app.post("/users", async (req, res) => {
  const createUser = new users({
    name: "master",
    phone: "8976622352345",
    age: 20,
    email: "master@gmail.com",
  });

  const userRes = await createUser.save();

  console.log("userRes >>>> ", userRes);
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/users", async (req, res) => {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.patch("/users/:id", async (req, res) => {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/users/:id", async (req, res) => {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.delete("/users/:id", async (req, res) => {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
