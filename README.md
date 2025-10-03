# dice-server

A web-based dice roller built with Node.js and Express. Roll multiple dice with various numbers of sides through an interactive web interface.

## Features

- Roll 1-10 dice at once
- Support for common dice types (D4, D6, D8, D10, D12, D20, D100)
- Animated dice display
- Sum calculation
- Responsive design

## Installation

1. Clone the repository:
```bash
git clone https://github.com/salahmajid/dice-server.git
cd dice-server
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

3. Select the number of dice and type of dice, then click "Roll Dice!"

## API

The server provides a REST API endpoint:

### POST /api/roll

Roll dice with specified parameters.

**Request body:**
```json
{
  "sides": 6,
  "count": 2
}
```

**Response:**
```json
{
  "rolls": [3, 5],
  "sum": 8,
  "sides": 6,
  "count": 2
}
```

## License

ISC