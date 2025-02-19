const mongoose = require('mongoose')
const CourseSchema  = new mongoose.Schema({
    title : {
        type : String , 
        required : true
    } , 
    desc : {
        type : String , 
    },
    price : {
        type : String , 
        required : true
    },
    rating: {
        type : String , 
    },
    instructor:{
        type : String , 
    }
})
module.exports = mongoose.model("Course" , CourseSchema)