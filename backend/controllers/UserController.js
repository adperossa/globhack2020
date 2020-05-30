const User = require('../models/User');

async function login(req, res) {
  let { username, password } = req.body;
  if (!req.body.username || !req.body.password) {
    return res.json({ success: false, message: "User info is not complete" });
  }
  const users = await User.find({ username: username, password: password });
  if(users.length === 0){
    return res.json({ success: false, message: "You are not registered" });
  }
  return res.json({ success: true, message: "Login successfully" });
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