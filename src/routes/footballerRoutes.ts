import express, { Router, Request, Response } from "express";

// Import Entity
import { Footballers } from "../Entities/Footballers";

// Import DB config
import connectDB from "../../config/ormconfig";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        if (req.body.length != 0) {
            await Footballers.insert(req.body);

            res.json({
                message: "Values inserted successfully!"
            })
        }
        else {
            res.json({
                error: "No payload provided."
            })
        }
    }
    catch (err) {
        res.json({
            error: err
        })
    }
})

router.get("/", async (req: Request, res: Response) => {
    await Footballers.find().then((data) => {
        res.json(data);
    })
})

export default router;