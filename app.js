const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const logger = require('./middleware/logger');

const helloRoutes = require('./routes/hello');
const aiRoutes = require('./routes/ai');
const applicationsRoutes = require('./routes/applications');
const authRoutes = require('./routes/auth');
const documentsRoutes = require('./routes/documents');
const templatesRoutes = require('./routes/templates');
const usersRoutes = require('./routes/users');

app.use(express.json()); 
app.use(logger);

app.use('/api/hello', helloRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentsRoutes);
app.use('/api/templates', templatesRoutes);
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
