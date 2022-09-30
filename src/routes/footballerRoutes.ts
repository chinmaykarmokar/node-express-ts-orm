import express, { Router, Request, Response } from "express";

// Import Entity
import { Footballers } from "../Entities/Footballers";

// Import DB config
import connectDB from "../../config/ormconfig";

const app = express();
app.use(express.json());

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        if (req.body.length != 0) {
            await connectDB.getRepository(Footballers).insert(req.body);

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
    const data = await connectDB.getRepository(Footballers).find();
    res.json(data);
})

router.get("/:id", async (req: Request, res: Response) => {
    const data = await connectDB.getRepository(Footballers).findOneBy({
        id: parseInt(req.params.id)
    });
    res.json(data);
})

router.put("/:id", async (req: Request, res: Response) => {
    const footballer =  await connectDB.getRepository(Footballers).findOne({where: {id: parseInt(req.params.id)}})

    if (footballer != null) {
        connectDB.getRepository(Footballers).merge(footballer, req.body);

        await connectDB.getRepository(Footballers).save(footballer);

        res.json({
            message: "Values updated successfully!"
        })

    }
    else {
        res.json({
            error: "Values could not be updated"
        })
    }
})

router.delete("/:id", async (req: Request, res: Response) => {
    await connectDB.getRepository(Footballers).delete(req.params.id);
})

export default router;