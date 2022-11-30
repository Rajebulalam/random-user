const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
// User Require
const userRoutes = require('./routes/v1/user.route');
// Middleware
app.use(express.json());

// User Route
app.use('/user', userRoutes);

// Server site home route
app.get('/', (req, res) => {
    res.send('Hello world');
});

// If route does'nt exists
app.all('*', (req, res) => {
    res.send('No routes found');
});

// Application Listen
app.listen(PORT, () => {
    console.log(`Server site is running at ${PORT}`);
});

