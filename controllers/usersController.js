const fs = require("fs");

// GET Profile
function getProfile(req, res) {

    const data = fs.readFileSync("data.json", "utf8");
    const jsonData = JSON.parse(data);

    if (jsonData.users.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No User Found"
        });
    }

    res.status(200).json({
        success: true,
        data: jsonData.users[0]
    });

}

// UPDATE Profile
function updateProfile(req, res) {

    const data = fs.readFileSync("data.json", "utf8");
    const jsonData = JSON.parse(data);

    if (jsonData.users.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No User Found"
        });
    }

    jsonData.users[0].name = req.body.name;
    jsonData.users[0].email = req.body.email;

    fs.writeFileSync(
        "data.json",
        JSON.stringify(jsonData, null, 2)
    );

    res.status(200).json({
        success: true,
        message: "Profile Updated Successfully",
        data: jsonData.users[0]
    });

}

// DELETE Profile
function deleteProfile(req, res) {

    const data = fs.readFileSync("data.json", "utf8");
    const jsonData = JSON.parse(data);

    if (jsonData.users.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No User Found"
        });
    }

    jsonData.users.splice(0, 1);

    fs.writeFileSync(
        "data.json",
        JSON.stringify(jsonData, null, 2)
    );

    res.status(200).json({
        success: true,
        message: "Profile Deleted Successfully"
    });

}

module.exports = {
    getProfile,
    updateProfile,
    deleteProfile
};
