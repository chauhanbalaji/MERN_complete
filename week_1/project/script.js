document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a simple animation to the input field on focus
    const searchInput = document.querySelector('main input');
    searchInput.addEventListener('focus', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    searchInput.addEventListener('blur', function() {
        this.style.transform = 'scale(1)';
    });
});
