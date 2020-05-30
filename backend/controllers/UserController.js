const User = require('../models/User');

function login(req, res) {
  let response;
  if (!req.body.username || !req.body.password) {
    return res.json({ success: false, message: "User info is not complete" });
  }
  res.json(response)
}

function register(req, res) {

}

function changePassword() {

}

function editUser(req, res) {

}

async function getUserList(req, res) {
  const Users = await User.find();
  res.json(Users)
}


module.exports = { login, register, changePassword, editUser, getUserList };