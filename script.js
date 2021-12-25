// Get Quotes From API
let apiQuotes = [];

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      console.log(apiQuotes);
    } catch (error) {
      // Catch Error Here
    }
}

// On Load
getQuotes();
