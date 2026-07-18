// Generate Bullets
function generateBullets(req, res) {

    res.json({
        message: "Bullets Generated Successfully"
    });

}

// Generate Summary
function generateSummary(req, res) {

    res.json({
        message: "Summary Generated Successfully"
    });

}

// Rewrite Text
function rewriteText(req, res) {

    res.json({
        message: "Text Rewritten Successfully"
    });

}

// Prompt
function promptText(req, res) {

    res.json({
        message: "Prompt Applied Successfully"
    });

}

module.exports = {
    generateBullets,
    generateSummary,
    rewriteText,
    promptText
};
