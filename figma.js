// Function to handle the search bar interaction
const searchInput = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-bar button');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        alert('Searching for: ' + query);
        // In a real app, you would redirect to a search results page here
    } else {
        alert('Please enter a product name.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});