// Select all images in the gallery
const images = document.querySelectorAll('.image-gallery img');

// Select popup and its elements
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('close-btn');

// Add click event to each image
images.forEach((img) => {
  img.addEventListener('click', () => {
    popupImage.src = img.src; // Set popup image to clicked image
    popup.style.display = 'flex'; // Show the popup
  });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup
});

// Close the popup when clicking outside the image
popup.addEventListener('click', (e) => {
  if (e.target !== popupImage) {
    popup.style.display = 'none'; // Hide the popup
  }
});
