document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('roll-button');
    const diceCount = document.getElementById('dice-count');
    const diceSides = document.getElementById('dice-sides');
    const results = document.getElementById('results');
    const diceDisplay = document.getElementById('dice-display');
    const sumDisplay = document.getElementById('sum-display');

    rollButton.addEventListener('click', async () => {
        const count = parseInt(diceCount.value);
        const sides = parseInt(diceSides.value);

        // Validate input
        if (count < 1 || count > 10) {
            alert('Please enter between 1 and 10 dice');
            return;
        }

        // Disable button during roll
        rollButton.disabled = true;
        rollButton.textContent = 'Rolling...';

        try {
            const response = await fetch('/api/roll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sides, count })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to roll dice');
            }

            const data = await response.json();
            displayResults(data);
        } catch (error) {
            alert('Error: ' + error.message);
        } finally {
            rollButton.disabled = false;
            rollButton.textContent = 'Roll Dice!';
        }
    });

    function displayResults(data) {
        // Clear previous results
        diceDisplay.innerHTML = '';

        // Display individual dice
        data.rolls.forEach(roll => {
            const die = document.createElement('div');
            die.className = 'die';
            die.textContent = roll;
            diceDisplay.appendChild(die);
        });

        // Display sum
        sumDisplay.textContent = `Total: ${data.sum}`;

        // Show results
        results.classList.remove('hidden');
    }
});
