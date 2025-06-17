document.addEventListener('DOMContentLoaded', function() {
    const subjectCards = document.querySelectorAll('.subject-card');
    
    // Click on the subject card event
    subjectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // f you click on a link, do not process it
            if (e.target.tagName === 'A') return;

            // Switch the activation status of the current subject
            const isActive = this.classList.contains('active');

            // Close other disciplines
            subjectCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('active');
                }
            });

            // Switch the current card status
            this.classList.toggle('active', !isActive);
        });
    });

    // Click on other locations on the page to close the menu
    document.addEventListener('click', function(e) {
        // Check if the click occurs inside the subject card
        const isClickInsideCard = Array.from(subjectCards).some(card => 
            card.contains(e.target) || card === e.target
        );

        // If the click occurs outside the card, close all menus
        if (!isClickInsideCard) {
            subjectCards.forEach(card => {
                card.classList.remove('active');
            });
        }
    });
});