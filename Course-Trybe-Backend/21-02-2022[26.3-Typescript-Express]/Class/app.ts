import Express,{ json } from "express";
import UseRouter from "./routers/userRouter";

const app = Express();
app.use(json());

app.get("/", (req, res)=>res.send('hello, world'));

app.use('/users', UseRouter)

export default app;