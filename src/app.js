const express = require('express');
const usersRoute = require('./routes/users');

const app = express();

app.get(['/', '/status'], (req, res) => {
    res.status(204).send();
});

app.use('/users', usersRoute);

app.all('*', (req, res) => {
    res.status(404).send();
});

app.listen(3000, (err) => {
    if (err) {
        console.log(`Failed to started http server: ${err.message}`);
        return;
    }
});

module.exports = app;