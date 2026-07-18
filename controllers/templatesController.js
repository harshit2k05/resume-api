const fs = require("fs");

// GET ALL TEMPLATES
function getTemplates(req, res) {

    const data = JSON.parse(fs.readFileSync("data.json"));

    res.json(data.templates);

}

// GET TEMPLATE BY ID
function getTemplateById(req, res) {

    const data = JSON.parse(fs.readFileSync("data.json"));

    for (let i = 0; i < data.templates.length; i++) {

        if (data.templates[i].id == req.params.id) {
            return res.json(data.templates[i]);
        }

    }

    res.status(404).json({
        message: "Template not found"
    });

}

module.exports = {
    getTemplates,
    getTemplateById
};
