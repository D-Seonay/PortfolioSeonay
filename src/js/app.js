// Select the section by its ID
const mySection = document.getElementById('home');

// Function to get and display the section's dimensions
function getAndDisplayDimensions() {
    const dimensions = mySection.getBoundingClientRect();
    const height = dimensions.height;

    console.log('Section height: ' + height + ' pixels');
    return height; // Return the height for later use
}

// Call the initial function to display the dimensions when the page loads
const sectionHeight = getAndDisplayDimensions();

// Add an event listener to monitor window resize events
window.addEventListener('resize', getAndDisplayDimensions);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.navbar').clientHeight,
            behavior: 'smooth'
        });
    });
});

// Select the anchor link button by its ID
const anchorLinkButton = document.getElementById('anchor-link-button');

// Function to show or hide the button based on scrolling
function handleScroll() {
    const currentScrollPosition = window.scrollY;

    // Use the sectionHeight variable for comparison
    if (currentScrollPosition >= sectionHeight) {
        anchorLinkButton.classList.add('active');
    } else {
        anchorLinkButton.classList.remove('active');
    }
}

// Add an event listener to handle page scrolling
window.addEventListener('scroll', handleScroll);
