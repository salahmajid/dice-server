const express = require ('express');
const cors = require ('cors');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/api/no-cors', (req, res) => {
    res.json({ result: 'This fails CORS'});
});

app.use(cors());


app.get('/api/wake', (req, res) => {
    res.json({ message: "Server is awake!" });
});


app.get('/api/test', (req, res) => {
    res.json({ message: "Server is working!"});
});

app.get('/api/roll', (req, res) => {
    const dice = [];
    for (let i = 0; i < 5; i++){
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    res.json({ dice });
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});