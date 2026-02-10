import express from "express";
import { getAccessToken } from "../services/app.js";

const router = express.Router();

router.get("/token", async (req, res) => {
    try {

        const token = await getAccessToken();

        res.json({
            access_token: token,
            expires_in: 3600
        });

    } catch (err) {

        console.error("TOKEN ERROR:", err.message);
        res.status(500).send("Token error");
    }
});

export default router;
