const { Schema, model } = require('mongoose');

const CompanySchema = new Schema({
  name: { type : String, required: true },
})

module.exports = model('Company', CompanySchema);