let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let counter=0;
 
function startCounter(){
    counter+=1;
    timer.textContent=counter;
}
let counterVal=setInterval(startCounter,1000);


let url="https://api.quotable.io/random";

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()
    const quoteContent=quote.content;
    quoteDisplay.innerText=quoteContent;
    // Output the quote and author name
    console.log(quote.content)
    console.log(`- ${quote.author}`)
}
randomQuote();

resetBtn.onclick = function() {
    randomQuote();
    startCounter();
    counter = 0;
    timer.textContent = counter; // Reset timer display
    result.textContent = ""; // Clear result
    quoteInput.value = ""; // Clear input field
    quoteInput.disabled = false; // Enable input for typing// Start the timer

};


submitBtn.onclick = function() {
    
    if (quoteDisplay.textContent === quoteInput.value) {
        clearInterval(counterVal);
        result.textContent = "You typed in " + counter + " seconds";

    } else {
        result.textContent = "You typed incorrect sentence";
    }
}