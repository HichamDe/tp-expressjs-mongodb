//chargement des dependances
import express from "express";
import { connect } from "mongoose";
import { equipeRouter, joueurRouter } from "./routes/router.js";
const PORT = 8000;
const dbName = 'tp_express';
const url = `mongodb://localhost:27017/${dbName}`




//instanciation du serveur
const app = express();
app.use(express.json());

app.use('/equipes', equipeRouter);
app.use('/joueurs', joueurRouter);


connect(url).
  then(() => console.log('Database Connected ...')).
  catch(err => console.log(err));

//demarrage du serveur
app.listen(PORT, () => {
  console.log(`Server Running 🏃🏃🏃 On : http://localhost:${PORT} `);
});