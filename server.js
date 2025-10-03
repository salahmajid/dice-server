const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));
app.use(express.json());

// API endpoint to roll dice
app.post('/api/roll', (req, res) => {
  const { sides, count } = req.body;
  
  // Default values
  const numSides = parseInt(sides) || 6;
  const numDice = parseInt(count) || 1;
  
  // Validate input
  if (numSides < 2 || numSides > 100) {
    return res.status(400).json({ error: 'Sides must be between 2 and 100' });
  }
  
  if (numDice < 1 || numDice > 10) {
    return res.status(400).json({ error: 'Number of dice must be between 1 and 10' });
  }
  
  // Roll the dice
  const rolls = [];
  for (let i = 0; i < numDice; i++) {
    rolls.push(Math.floor(Math.random() * numSides) + 1);
  }
  
  const sum = rolls.reduce((acc, val) => acc + val, 0);
  
  res.json({
    rolls,
    sum,
    sides: numSides,
    count: numDice
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Dice server is running on http://localhost:${PORT}`);
});
