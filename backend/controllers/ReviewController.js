const Review = require("../models/Review");

async function addReview(req, res) {
  const { enterprise, summary, satisfactionScale, inclusionScale, salaryScale } = req.body;
  //Bad request
  console.log(req.body);
  if (!enterprise) {
    return res.status(401).send("Company name missing");
  }
  //200 OK
  const NewReview = new Review({ enterprise, summary, satisfactionScale, inclusionScale, salaryScale})
  await NewReview.save();

  return res.status(200).send("Review added");
}

module.export = {
    addReview
}