import express from "express";
import morgan from "morgan"; 


app.use(express.json());
app.use(morgan(dev));