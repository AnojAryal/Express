const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Node js Course",
    author: "Mosh",
    tags: ["mosh", "node"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const courses = await Course
  .find({ author: "Mosh", isPublished: true })
  .sort(
    { name: 1 }
  );
  console.log(courses);
}

module.exports = createCourse;
