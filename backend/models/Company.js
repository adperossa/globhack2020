const { Schema, model } = require('mongoose');

const CompanySchema = new Schema({
  name: { type : String, required: true },
  average: {type: Number, require: true}
})

module.exports = model('Company', CompanySchema);