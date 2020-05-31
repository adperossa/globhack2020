const Company = require('../models/Company');

async function getCompanyFilteredList(req, res) {
  const companyName  = req.query.companyName;
  if (!companyName) {
    return res.status(200).json({ success: false, status: 400, message: "Company name not received" })
  }
  let companyList = await Company.find();
  companyList = companyList.filter(company => company.name.toUpperCase().includes(companyName.toUpperCase()))
  
  if (companyList.length === 0) {
    return res.status(409).json({ success: false, status: 400, message: "Company does't exist" })
  }
  
  return res.status(200).json({ success: true, status: 200, message: "Request succesfully", companies: companyList });
}

async function getCompanyList(req, res) {
  const companies = await Company.find();
  res.json(companies);
}

module.exports = { getCompanyFilteredList, getCompanyList };