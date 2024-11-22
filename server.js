import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
const port = 3000;

app.use(express.static("uploads"));

routes(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
