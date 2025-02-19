const cookieParser = require("cookie-parser");
const express = require("express")
require("dotenv").config()
const cors = require("cors");
const dbConnect = require("./server/configs/database");
const contact = require("./server/routes/contact")


const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

dbConnect()

app.use("/api/v1/auth", contact);


app.listen(process.env.PORT,()=>{
    console.log(`app is running at PORT ${process.env.PORT}`)
})