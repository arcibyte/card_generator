document.addEventListener('DOMContentLoaded', function() {
    const cardForm = document.getElementById('cardForm');
    const cardContainer = document.getElementById('cardContainer');
    const generatedCard = document.getElementById('generatedCard');

    cardForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const occupation = document.getElementById('occupation').value;
        const email = document.getElementById('email').value;
        const socialMedia = document.getElementById('socialMedia').value;
        const cardColor = document.getElementById('cardColor').value;
        const imageInput = document.getElementById('image');
        const image = imageInput.files[0];
        const imageShape = document.getElementById('imageShape').value;

        // Update the card
        updateCard(name, occupation, email, socialMedia, cardColor, image, imageShape);

        // Show the card
        cardContainer.classList.remove('hidden');
    });