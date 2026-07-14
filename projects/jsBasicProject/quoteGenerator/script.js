const quotes = [
  "The best way to predict the future is to invent it. - Alan Kay",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
  "Whether you think you can or you think you can't, you're right. - Henry Ford",
  "The journey of a thousand miles begins with one step. - Lao Tzu",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The only way to do great work is to love what you do. - Steve Jobs"
];

const quoteElement = document.getElementById("quote");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

document.getElementById("generateButton").addEventListener("click", generateQuote);
