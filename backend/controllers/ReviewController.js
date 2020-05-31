const Review = require('../models/Review');
const Company = require('../models/Company');

async function addReview(req, res) {
  const { companyName, summary, questionOne, questionTwo, questionThree } = req.body;
  const questions = [questionOne, questionTwo, questionThree];
  //Bad request
  if (!companyName) {
    return res.status(401).send("Company name missing");
  }
  const company = await Company.find({ name: companyName });

  const average = calculateAverage(questions)

  if (company.length === 0) {
    //Add company to DB
    const newCompany = new Company({ 
      name: companyName, 
      globalAverage: average, 
      averageQuestionOne: questionOne, 
      averageQuestionTwo: questionTwo,
      averageQuestionThree: questionThree 
    });
    await newCompany.save();
  }
  //200 OK
  const NewReview = new Review({ companyName, summary, questionOne, questionTwo, questionThree, average })
  await NewReview.save();
  
  if(company.length !== 0){
    let reviews = await Review.find({companyName: companyName})
    let companyUpdated = updateCompany(reviews);
    await Company.updateOne({ "name": companyName }, 
    { 
      $set: 
        { 
          "globalAverage": companyUpdated.globalAverage,
          "averageQuestionOne": companyUpdated.averageQuestionOne,
          "averageQuestionTwo": companyUpdated.averageQuestionTwo,
          "averageQuestionThree": companyUpdated.averageQuestionThree
        } 
    });
  }

  return res.status(200).json({ success: true, status: 200, message: "Review saved" });
}

function calculateAverage(arr) {
  let acum = arr.reduce((a, b) => Number(a) + Number(b))
  const average = Number((acum / arr.length).toFixed(2));
  return average;
}

async function getReviewList(req, res) {
  const Reviews = await Review.find();
  return res.status(200).json(Reviews);
}

async function getReviewListFilteredByCompany(req, res) {
  const { companyName } = req.query;
  const Reviews = await Review.find();
  if (Reviews.length === 0) {
    return res.status(409).json({ success: false, status: 400, message: "There aren't any reviews" })
  }
  const filteredReviews = Reviews.filter(review => review.companyName.toUpperCase() === companyName.toUpperCase());
  if (filteredReviews.length === 0) {
    return res.status(200).json({ success: true, status: 200, message: "Couldn't find any match" });
  }
  const company = await Company.find({ "name": companyName });

  return res.status(200).json({ success: true, status: 200, message: "Data in JSON", reviews: filteredReviews, company: company[0] });
}

function updateCompany(reviews){
  let question1 = [];
  let question2 = [];
  let question3 = [];
  let totalsAverage = [];

  reviews.forEach(review => {
    question1.push(review.questionOne);
    question2.push(review.questionTwo);
    question3.push(review.questionThree);
    totalsAverage.push(review.average);
  });

  return {
    name:reviews.newCompany,
    averageQuestionOne: calculateAverage(question1),
    averageQuestionTwo: calculateAverage(question2),
    averageQuestionThree: calculateAverage(question3),
    globalAverage: calculateAverage(totalsAverage)
  }
}

module.exports = {
  addReview,
  getReviewList,
  getReviewListFilteredByCompany
}