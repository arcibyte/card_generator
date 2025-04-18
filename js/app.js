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
    function updateCard(name, occupation, email, socialMedia, cardColor, image, imageShape) {
        const imageURL = image ? URL.createObjectURL(image) : '';

        // Style image
        const imageStyle = imageShape === 'circle' ? 'border-radius: 50%;' : '';

        generatedCard.innerHTML = `
            <h2 style="color: ${cardColor}">${name}</h2>
            <p style="color: ${cardColor}">${occupation}</p>
            <p style="color: ${cardColor}">Email: ${email}</p>
            <p style="color: ${cardColor}">Social media: ${socialMedia}</p>
            <img src="${imageURL}" alt="User Image" style="${imageStyle}">
        `;
    }
});
