module.exports = (app)=>{
    const courses = require("../controllers/userController")
    app.post("/courses" , courses.createCourse)
    app.get("/allcourses" , courses.findAllCourses)
    app.get("//:courseId" , courses.findOneCourse)
    app.put("/updateCourse/:courseId" , courses.updateCourse)
    app.delete("/deleteCourse/:courseId" , courses.delete)
}
singleCourse