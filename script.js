document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('numberInput');
    const result = document.getElementById('result');
    const calculateButton = document.getElementById('calculateButton');
    function calculateAbsoluteValue() {
        const number = parseFloat(input.value);
        if (!isNaN(number)) {
            console.log("Doing very hard math rn (math.abs)")
            result.textContent = 'Calculating...';
            result.classList.remove('fade-in');
            setTimeout(() => {
                const absoluteValue = Math.abs(number);
                result.textContent = `Absolute Value: ${absoluteValue}`;
                result.classList.add('fade-in');
            }, 750);
        } else {
            result.textContent = 'Please enter a valid number.';
            result.classList.add('fade-in');
        }
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            calculateAbsoluteValue();
        }
    });

    calculateButton.addEventListener('click', calculateAbsoluteValue);

    // Add fade-in animation to elements on page load
    document.querySelectorAll('.container > div').forEach(el => {
        el.classList.add('fade-in');
    });
});