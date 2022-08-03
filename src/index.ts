import express, { Request, Response } from "express";

// Use environment variables
import dotenv from "dotenv"
dotenv.config()

// Import DB config
import connectDB from "../config/ormconfig";

// Create connection with DB
connectDB

// Import API routes
import footballerRoutes from "./routes/footballerRoutes";

const app = express();

// Parse JSON
app.use(express.json());

// Fetching APIs from the routes
app.use("/api/footballers", footballerRoutes);

const port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
