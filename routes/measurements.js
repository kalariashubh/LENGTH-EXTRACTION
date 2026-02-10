import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const FILE_PATH = path.join("data", "measurements.json");

router.post("/", (req, res) => {

    const { distance } = req.body;

    if (!distance) {
        return res.status(400).json({ error: "No distance received" });
    }

    console.log(`Length Extracted: ${distance} mm`);

    fs.writeFileSync(
        FILE_PATH,
        JSON.stringify({ distance }, null, 2)
    );

    res.json({ success: true });
});

export default router;
