// Function to update background position based on mouse movement
const background = document.getElementById('background');

window.addEventListener('mousemove', (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { innerWidth: width, innerHeight: height } = window;

    // Calculate the mouse's position relative to the screen
    const xPos = (mouseX / width) * 100;
    const yPos = (mouseY / height) * 100;

    // Adjust the background position to create the interactive effect
    background.style.transform = `translate(-${xPos / 15}%, -${yPos / 15}%)`;
});