document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const welcomeButton = document.getElementById('welcomeButton');

    // Add event listener to the button
    welcomeButton.addEventListener('click', function() {
        // Redirect to the welcome page
        window.location.href = '/welcome';
    });
});
