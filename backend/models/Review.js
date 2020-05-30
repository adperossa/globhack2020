const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema({
  companyName: { type:String, required:true },
  summary: { type:String, required:false },
  Q1: { type: Number, required:true },
  Q2: { type: Number, required:true },
  Q3: { type: Number, required:true },
  Q4: { type: Number, required:true },
  Q5: { type: Number, required:true },
  Q6: { type: Number, required:true },
  Q7: { type: Number, required:true },
  Q8: { type: Number, required:true },
  Q9: { type: Number, required:true },
  Q10: { type: Number, required:true },
  Q11: { type: Number, required:true },
  average: { type: Number, required:true }
})

module.exports = model('Review', ReviewSchema);