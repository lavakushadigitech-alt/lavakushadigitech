// Array of image file paths
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
let currentIndex = 0; // Index of the currently displayed image

// Get references to the HTML elements
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const imageElement = document.getElementById('image');

// Function to update the image source
function updateImage() {
    imageElement.src = images[currentIndex];
}

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
    // Increment the index. The modulo operator (%) ensures the index wraps
    // back to 0 if it exceeds the array length (creating a loop).
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Event listener for the "Previous" button
previousBtn.addEventListener('click', () => {
    // Decrement the index. Adding images.length before modulo handles
    // negative results correctly, ensuring it wraps to the end of the array.
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Optional: Initial image load (though the HTML src attribute handles the first one)
updateImage();
