const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

// console.log(generateQuoteBtn, quoteOutput, authorOutput);

generateQuoteBtn.addEventListener("click", generateQuote);

const arrayOfQuotes = [
    {
        author: "Nelson Mandela",
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
        author: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing.",
    },
    {
        author: "Frank Sinatra",
        quote: "The best revenge is massive success.",
    },
    {
        author: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
    },
    {
        author: "Nelson Mandela",
        quote: "Resentment is like drinking poison and then hoping it will kill your enemies.",
    },
    {
        author: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    },
];

function generateQuote() {
    let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    // console.log(arrayOfQuotes[random]);
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
    authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
}