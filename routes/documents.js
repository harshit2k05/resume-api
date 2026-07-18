const express = require("express");

const router = express.Router();

const {
    getAllDocuments,
    getDocumentById,
    createDocument,
    updateDocument,
    duplicateDocument,
    deleteDocument,
    importDocument
} = require("../controllers/documentsController");

router.get("/", getAllDocuments);

router.post("/", createDocument);

router.post("/import", importDocument);

router.get("/:id", getDocumentById);

router.put("/:id", updateDocument);

router.post("/:id/duplicate", duplicateDocument);

router.delete("/:id", deleteDocument);

module.exports = router;
