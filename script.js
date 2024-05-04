// Get all items
const items = document.querySelectorAll('.item');
const container = document.querySelector('.scroll-container');

// Function to reset styles for all items
function resetItems() {
  items.forEach(item => {
    item.style.flex = '0 0 33.333333%'; // Restore original size
  });
}

// Add event listeners to each item
items.forEach(item => {
  // Mouseover event listener
  item.addEventListener('mouseover', function() {
    if (!container.classList.contains('scrolling')) {
      // Reset size for all items
      resetItems();

      // Set size for hovered item
      this.style.flex = '0 0 33.3333%'; // Example: Double the size of hovered item
    }
  });
});

// Add event listener to the container to handle mouse leave
container.addEventListener('mouseleave', function() {
  // Reset styles for all items when mouse leaves the container
  resetItems();
});
