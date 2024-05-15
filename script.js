// Array of image paths for each category
const cards = {
    launch: ['images/launch.png', 'images/launch1.png', 'images/launch2.png'],
    explore: ['images/explore.png', 'images/explore1.png', 'images/explore2.png', 'images/explore3.png'],
    play: ['images/play.png', 'images/play1.png', 'images/play2.png', 'images/play3.png'],
    react: ['images/react.png', 'images/react1.png', 'images/react2.png', 'images/react3.png'],
    reflect: ['images/reflect.png', 'images/reflect1.png', 'images/reflect2.png', 'images/reflect3.png'],
    art: ['images/art.png', 'images/art1.png', 'images/art2.png', 'images/art3.png'],
    close: ['images/closure.png', 'images/closure1.png', 'images/closure2.png']
};

// Order of categories
const categories = ['launch', 'explore', 'play', 'react', 'reflect', 'art', 'close'];

let currentCategoryIndex = 0;
let currentCardIndex = 0;

function showNextCard() {
    const cardImage = document.getElementById('card-image');
    
    // Add fade-out class to start the fade-out animation
    cardImage.classList.add('fade-out');

    // After the fade-out animation is complete, update the image source and start the fade-in animation
    setTimeout(() => {
        const currentCategory = categories[currentCategoryIndex];
        const cardImages = cards[currentCategory];

        if (currentCardIndex < cardImages.length) {
            cardImage.src = cardImages[currentCardIndex];
            currentCardIndex++;
        } else {
            currentCardIndex = 0;
            currentCategoryIndex++;

            if (currentCategoryIndex < categories.length) {
                showNextCard();
            } else {
                alert('You have completed the journey!');
                // Reset the game
                currentCategoryIndex = 0;
                currentCardIndex = 0;
            }
        }

        // Remove fade-out and add fade-in class
        cardImage.classList.remove('fade-out');
        cardImage.classList.add('fade-in');

        // Remove the fade-in class after the animation completes
        setTimeout(() => {
            cardImage.classList.remove('fade-in');
        }, 500); // This should match the duration of the fade-in animation

    }, 500); // This should match the duration of the fade-out animation
}

document.getElementById('next-card-button').addEventListener('click', showNextCard);

// Initialize the first card
showNextCard();