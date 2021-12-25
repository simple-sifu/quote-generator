// Get Quotes From API
let apiQuotes = [];

// New Quote
function newQuote() {
  // Pick a random quotes from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote);
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
      // Catch Error Here
    }
}

// On Load
getQuotes();
