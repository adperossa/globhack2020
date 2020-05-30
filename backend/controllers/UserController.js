const User = require('../models/User');

async function login(req, res) {
  const { username, password } = req.body;
  
  if (!username || !password) 
    return res.status(400).json({ success: false, message: "User info is not complete", status: 400 });

  const user = await User.find({ username: username, password: password });

  if(user.length === 0)
    return res.status(401).json({ success: false, message: "You are not registered", status: 401 });
  
  return res.status(200).json({ success: true, message: "Login successfully", status: 200 });
}

async function register(req, res) {
  const { username, password, confirmPassword } = req.body;

  if (!username || !password || !confirmPassword )
    return res.status(200).json({ success: false, message: "User info is not complete", status: 200 });

  if (password !== confirmPassword ) 
    return res.status(409).json({ success: false, message: "Incorrect confirm password",status: 409});

  const userExist = await User.find({ username: username })

  if(userExist.length > 0) 
    return res.status(403).json({ success: false, message: "User already exist",status: 403 });
  
  const NewUser = new User({username, password});
  await NewUser.save();
  
  return res.status(200).json({ success: true, message: "User created correctly", status: 200 });
}

function changePassword(req, res) {

}

function editUser(req, res) {

}

async function getUserList(req, res) {
  const Users = await User.find();
  res.json(Users)
}


module.exports = { login, register, changePassword, editUser, getUserList };