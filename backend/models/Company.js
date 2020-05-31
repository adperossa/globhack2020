const { Schema, model } = require('mongoose');

const CompanySchema = new Schema({
  name: { type : String, required: true },
  globalAverage: {type: Number, required: false},
  averageQuestionOne: {type: Number, required: false},
  averageQuestionTwo: {type: Number, required: false},
  averageQuestionThree: {type: Number, required: false}
})

module.exports = model('Company', CompanySchema);