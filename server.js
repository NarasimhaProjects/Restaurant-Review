const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

mongoose.connect(
    "mongodb+srv://pandutesting:pandu1996@cluster0.1uhx1jd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
)
.then(
    () => {
        console.log("Connected to db...");
    },
    (err) => {
        console.log("Something went Wrong..." + err);
    }
);

app.get("/", (req,res) =>{
    res.json({message: "All Good"})
});

app.listen(PORT, () =>{
    console.log(`Server is runing on PORT : ${PORT}`);
});
