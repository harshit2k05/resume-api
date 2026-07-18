function register(req, res) {

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        data: user
    });

}

function login(req, res) {

    res.status(200).json({
        success: true,
        message: "Login Successful",
        token: "sample-token"
    });

}

function logout(req, res) {

    res.status(200).json({
        success: true,
        message: "Logout Successful"
    });

}

function forgotPassword(req, res) {

    res.status(200).json({
        success: true,
        message: "Password Reset Link Sent"
    });

}

function resetPassword(req, res) {

    res.status(200).json({
        success: true,
        message: "Password Reset Successful"
    });

}

module.exports = {
    register,
    login,
    logout,
    forgotPassword,
    resetPassword
};
