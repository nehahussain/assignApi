const express = require("express")
const mongoose = require('mongoose')

const dataaSchema = new mongoose.Schema({
    country:{
        type:String,
        required:true,
        unique:true
    },
    working_hours:[{
        "shift_start": String,
        "shift_end": String
    }],
    business_closure:{},
    order_type:[{
        "urgent": Number,
        "Normal": Number
    }]
})
//creating new collection
const Dataa = new mongoose.model("Datadb",dataaSchema)

module.exports = Dataa