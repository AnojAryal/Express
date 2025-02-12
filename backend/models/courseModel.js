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
    //comparison operators

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

    //logical operators
    //or
    //and

    //courses that are published by Mosh and are $15 or $10
    //.find()
    //.and([{ author: "Mosh" }, { price: { $in: [10, 15] } }])

    //courses that are published by Mosh or are $15 or $10
    //.find()
    //.or([{ author: "Mosh" }, { price: { $in: [10, 15] } }])

    //regular expressions
    //starts with Mosh
    //.find({ author: /^Mosh/ })

    //ends with Hamedani
    //.find({ author: /Hamedani$/ })

    //contains Mosh
    //.find({ author: /.*Mosh.*/ })

  const courses = await Course
  .find({ author: "Mosh", isPublished: true })
  .sort(
    { name: 1 }
  )
  //count the number of documents
  .count();
  console.log(courses);
}

module.exports = createCourse;
