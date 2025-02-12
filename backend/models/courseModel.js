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
    //eq (equal)
    //ne (not equal)
    //gt (greater than)
    //gte (greater than or equal to)
    //lt (less than)
    //lte (less than or equal to)
    //in
    //nin (not in)

    //courses that are greater than or equal to 10 and less than or equal to 20
    //.find({ price: { $gte: 10, $lte: 20 } })

    //courses that are either 10, 15, or 20
    //.find({ price: { $in: [10, 15, 20] } })

  const courses = await Course
  .find({ author: "Mosh", isPublished: true })
  .sort(
    { name: 1 }
  );
  console.log(courses);
}

module.exports = createCourse;
