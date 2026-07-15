let count = 0;

function incrementCount() {
    count++;
    document.getElementById("scoreValue").textContent = count;
}

function decrementCount() {
    count--;
    if (count < 0) {
        count = 0; 
        alert("Score cannot be negative. Resetting to 0.");
    }
    document.getElementById("scoreValue").textContent = count;
}

const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

incrementBtn.addEventListener("click", incrementCount);
decrementBtn.addEventListener("click", decrementCount);
