// Initialize default search engine
let currentEngine = 'Google';

// Function to set the search engine
function setSearchEngine(engine) {
    currentEngine = engine;
    document.getElementById('search-input').placeholder = `Search with ${engine}`;
    document.getElementById('search-engine-dropdown').classList.add('hidden'); // Hide dropdown after selection
}

// Function to perform the search
function search() {
    const query = document.getElementById('search-input').value;
    let searchUrl = '';

    if (currentEngine === 'Google') {
        searchUrl = `https://www.google.com/search?q=${query}`;
    } else if (currentEngine === 'DuckDuckGo') {
        searchUrl = `https://duckduckgo.com/?q=${query}`;
    } else if (currentEngine === 'Bing') {
        searchUrl = `https://www.bing.com/search?q=${query}`;
    }

    if (query) {
        window.open(searchUrl, '_blank');
    }
}

// Toggle dropdown visibility when magnifying glass is clicked
document.getElementById('search-icon').addEventListener('click', function() {
    const dropdown = document.getElementById('search-engine-dropdown');
    dropdown.classList.toggle('hidden');
});
