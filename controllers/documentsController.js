const fs = require("fs");

// GET ALL
function getAllDocuments(req, res) {
    const data = JSON.parse(fs.readFileSync("data.json"));
    res.json(data.documents);
}

// CREATE
function createDocument(req, res) {
    const data = JSON.parse(fs.readFileSync("data.json"));

    const document = {
        id: data.documents.length + 1,
        title: req.body.title,
        type: req.body.type
    };

    data.documents.push(document);

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

    res.status(201).json(document);
}

// GET BY ID
function getDocumentById(req, res) {
    const data = JSON.parse(fs.readFileSync("data.json"));

    for (let i = 0; i < data.documents.length; i++) {
        if (data.documents[i].id == req.params.id) {
            return res.json(data.documents[i]);
        }
    }

    res.status(404).json({ message: "Document not found" });
}

// UPDATE
function updateDocument(req, res) {
    const data = JSON.parse(fs.readFileSync("data.json"));

    for (let i = 0; i < data.documents.length; i++) {

        if (data.documents[i].id == req.params.id) {

            data.documents[i].title = req.body.title;
            data.documents[i].type = req.body.type;

            fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

            return res.json(data.documents[i]);
        }
    }

    res.status(404).json({ message: "Document not found" });
}

// DELETE
function deleteDocument(req, res) {
    const data = JSON.parse(fs.readFileSync("data.json"));

    for (let i = 0; i < data.documents.length; i++) {

        if (data.documents[i].id == req.params.id) {

            data.documents.splice(i, 1);

            fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

            return res.json({ message: "Document deleted" });
        }
    }

    res.status(404).json({ message: "Document not found" });
}

// DUPLICATE
function duplicateDocument(req, res) {
    res.json({ message: "Document duplicated" });
}

// IMPORT
function importDocument(req, res) {
    res.json({ message: "Document imported" });
}

module.exports = {
    getAllDocuments,
    createDocument,
    getDocumentById,
    updateDocument,
    deleteDocument,
    duplicateDocument,
    importDocument
};
