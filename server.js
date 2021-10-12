const express = require("express");
const axios = require("axios");
const app = express();

const cors = require("cors");

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/projects/get-cards", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.trello.com/1/lists/${process.env.PROJECT_ID}/cards?key=${process.env.KEY}&token=${process.env.TOKEN}`
    );
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/home/get-cards", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.trello.com/1/lists/${process.env.HOME_ID}/cards?key=${process.env.KEY}&token=${process.env.TOKEN}`
    );
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.log("error", error);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running... ✅");
});
