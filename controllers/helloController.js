const sayHello = (req, res) => {
    res.status(200).json({ 
        success: true,
        message: "Hello, World!" 
    });
};

module.exports = { sayHello };
