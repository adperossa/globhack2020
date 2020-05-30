function login(req, res) {
  let response;
  if (!req.body.username || !req.body.password) {
    response = { success: false, message: "User info is not complete" }
    return res.json(response);
  }

  res.json(response)
}

function register(req, res) {

}

function changePassword() {

}

function editUser(req, res) {

}


module.exports = { login, register, changePassword, editUser };