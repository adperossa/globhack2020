const Review = require('../models/Review');
const Company = require('../models/Company');

async function addReview(req, res) {
  const { companyName, summary, question_1, question_2, question_3, question_4, question_5 } = req.body;
  //Bad request
  console.log(req.body);
  if (!companyName) {
    return res.status(401).send("Company name missing");
  }
  //200 OK
  const NewReview = new Review({ companyName, summary, satisfactionScale, inclusionScale, salaryScale })
  await NewReview.save();

  return res.status(200).send("Review added");
}

async function getReviewList(req, res) {
  const Reviews = await Review.find();
  return res.status(200).json(Reviews);
}


module.exports = {
  addReview,
  getReviewList
}