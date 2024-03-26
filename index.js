// index.js

const express = require('express');
const app = express();
const port = 3007;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/bot-info', (req, res) => {
    // Assuming botData contains information about the bot
    const botData = {
        name: 'Energy bot',
        totalServers: 28
    };
    res.render('bot-info', { botData });
});

app.get('/execute-command', (req, res) => {
    // Execute commands for your bot
    res.render('execute-command');
});

app.get('/command', (req, res) => {
    // Execute commands for your bot
    res.render('command');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
