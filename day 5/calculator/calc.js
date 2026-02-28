// 1. Select the elements
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');

// 2. Function to update display
const updateDisplay = (value) => {
    // Check if current screen is "0" or "Error" to replace it
    if (screen.value === "0" || screen.value === "Error") {
        screen.value = value;
    } else {
        screen.value += value;
    }
};

// 3. Add Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.innerText);
    });
});

// 4. Clear Button Logic
// Added a check to ensure clearBtn exists
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        screen.value = "0";
    });
}

// 5. Equal Button Logic
if (equalBtn) {
    equalBtn.addEventListener('click', () => {
        try {
            // Fix: Check if screen is empty before evaluating
            if (screen.value.trim() === "") return;

            // Fix: Force the result to be a String
            const result = eval(screen.value);
            screen.value = String(result); 
        } catch (err) {
            screen.value = "Error";
            // Auto-clear error after 1.5 seconds
            setTimeout(() => { screen.value = "0"; }, 1500);
        }
    });
}