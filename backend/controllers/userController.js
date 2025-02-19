const Course = require("../models/course.model")
exports.createCourse = (req , res)=>{
    const course = new Course({
        title : req.body.title , 
        desc : req.body.desc ,
        price : req.body.price,
        rating: req.body.rating,
        instructor : req.body.instructor
    })
    course
    .save()
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.status(500).send({
            message : error.message || " server error while creating the course"
        })
    })
}
exports.findAllCourses = (req , res)=>{
    Course.find()
    .then((courses)=>{
        res.send(courses)
    })
    .catch((error)=>{
        res.status(500).send({
            message : error.message || " server error while retreiving our courses"
        })
    })
}
exports.findOneCourse = (req , res)=>{
    Course.findById(req.params.courseId)
    .then((course)=>{
        if(!course){
            return res.status(404).send({
                message : "course not found by id " + req.params.courseId
            })
        }
        res.send(course)
    })
    .catch((error)=>{
        res.status(500).send({
            message : error.message || " server error while retreiving the course by id"  + req.params.courseId
        })
    })
}
exports.updateCourse = (req , res)=>{
    // validation(optional)
    if(!req.body.title){
        return res.status(400).send({
            message : "course title connot be empty"
        })
    }
    Course.findByIdAndUpdate(req.params.courseId , 
        {
            title : req.body.title , 
            desc : req.body.desc ,
            price : req.body.price,
            rating: req.body.rating,
           
        },
        {new : true}
    )
    .then((course)=>{
        if(!course){
            return res.status(404).send({
                message : "course not fount with the id " + req.params.courseId
            })
        }
        res.send(course)
    })
    .catch((error)=>{
        res.status(500).send({
            message : error.message || " server error while updating the course by id"  + req.params.courseId
        })
    })
}