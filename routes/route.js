import express from 'express';
import { sendSmsData } from '../controllers/functions.js';

export const app = express();

app.get("/", (req, res, next) => {
    res.send("api working");
})

app.post("/send-sms", sendSmsData);