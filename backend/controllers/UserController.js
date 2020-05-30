const User = require('../models/User');

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ success: false, message: "User info is not complete", status: 400 });
  }
  const user = await User.find({ username: username, password: password });
  if(user.length === 0){
    return res.json({ success: false, message: "You are not registered", status: 401 });
  }
  return res.json({ success: true, message: "Login successfully", status: 200 });
}

async function register(req, res) {
  const { username, password, confirmPassword } = req.body;

  if (!username || !password || !confirmPassword )
    return res.json({ success: false, message: "User info is not complete" });

  if (password !== confirmPassword ) 
    return res.json({ success: false, message: "Incorrect confirm password" });

  const userExist = await User.find({ username: username })

  if(userExist.length > 0) 
    return res.json({ success: false, message: "User already exist" });
  
  const NewUser = new User({username, password});
  await NewUser.save();
  return res.json({ success: true, message: "User created correctly" });
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