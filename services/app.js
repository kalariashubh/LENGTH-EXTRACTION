import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function getAccessToken() {

    const response = await axios.post(
        "https://developer.api.autodesk.com/authentication/v2/token",
        new URLSearchParams({
            grant_type: "client_credentials",
            scope: "viewables:read"
        }),
        {
            auth: {
                username: process.env.APS_CLIENT_ID,
                password: process.env.APS_CLIENT_SECRET
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    );

    return response.data.access_token;
}
