const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema({
  companyName: { type:String, required:true },
  summary: { type:String, required:false },
  questionOne: { type: Number, required:true },
  questionTwo: { type: Number, required:true },
  questionThree: { type: Number, required:true },
  average: { type: Number, required:true }
})

module.exports = model('Review', ReviewSchema);