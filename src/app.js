const express = require("express");
require("../src/db/conn");

const Dataa = require("../src/models/dataa")

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/dataa", async(req, res) => {
    try{
        const addnewcountry=new Dataa(req.body)
        console.log(req.body)
        const insertdata= await addnewcountry.save()
        res.status(201).send(insertdata)
    }
    catch(e){
        res.status(400).send(e)
    }
})
//get all  data
app.get("/dataa", async(req, res) => {
    try{
        const getdata= await Dataa.find({});
        res.send(getdata)
    }
    catch(e){
        res.status(400).send(e)
    }
})

//get particular data
app.get("/dataa/:id", async(req, res) => {
    try{
        const _id= req.params.id;
        const getonedata= await Dataa.findById(_id);
        res.send(getonedata)
    }
    catch(e){
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})  