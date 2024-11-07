import cors from "cors";

export const CORS = (cors ({
    origin: "http://localhost:3000",
    credentials:true,
}))