const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const courseSchema = new Schema({
    name: String,
    author : String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished : Boolean
})

const Course = mongoose.model("Course", courseSchema);
const course = new Course({
    name: "Node.js Course",
    author : "Mosh",
    tags: ["node", "backend"],
    isPublished : true
})