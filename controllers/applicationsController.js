const fs = require("fs");

// GET
function getApplications(req, res) {
    const data = JSON.parse(fs.readFileSync("data.json"));
    res.json(data.applications);
}

// POST
function createApplication(req, res) {
    const data = JSON.parse(fs.readFileSync("data.json"));

    const application = {
        id: data.applications.length + 1,
        company: req.body.company,
        status: req.body.status
    };

    data.applications.push(application);

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

    res.json(application);
}

// PATCH
function updateApplication(req, res) {
    res.json({ message: "Application Updated" });
}

// DELETE
function deleteApplication(req, res) {
    res.json({ message: "Application Deleted" });
}

module.exports = {
    getApplications,
    createApplication,
    updateApplication,
    deleteApplication
};
