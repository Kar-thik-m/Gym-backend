import express  from "express";
import connectToDb from "./connect/mongooseconnect.js";
import userRouter from "./route/user.js";
import cors from "cors";
const app = express()
await connectToDb();
app.use(express.json());
app.use(cors());
const PORT =process.env.PORT || 5000;

app.use("/user",userRouter);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT,()=>{console.log("run api app")});