document.getElementById('toggleButton').addEventListener('click', function() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const button = document.getElementById('toggleButton');

    // Check if the container has the "active" class
    const isActive = container.classList.toggle('active');

    // Update the text and button properties based on the state
    if (isActive) {
        container.style.backgroundColor = '#0dcaf0'; // Change container color
        text.textContent = 'I am Ahalya'; // Change the text
        button.textContent = 'Press Me Again'; // Change button text
        button.style.backgroundColor = '#d63384'; // Change button color
    } else {
        container.style.backgroundColor = 'lightgray'; // Revert container color
        text.textContent = 'HELLO'; // Revert text
        button.textContent = 'Press Me'; // Revert button text
        button.style.backgroundColor = '#007bff'; // Revert button color
    }
});
