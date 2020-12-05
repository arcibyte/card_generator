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

       // Update the card
        updateCard(name, occupation, email, socialMedia);

        // Show the card
        cardContainer.classList.remove('hidden');
    });

    function updateCard(name, occupation, email, socialMedia) {
        generatedCard.innerHTML = `
            <h2>${name}</h2>
            <p>${occupation}</p>
            <p>Email: ${email}</p>
            <p>Social media: ${socialMedia}</p>
        `;
    }
});
