// Function to generate cute flirty messages
function cuteSurprise() {
  const cuteMessages = [
    "Are you a samoyed puppy? Because you're too cute to handle! 🐶",
    "I must be a dog, because I’m barking up the right tree with you! 💖",
    "You’re paws-itively the best! 😘",
    "If I were a puppy, I’d chase you forever! 🐕"
  ];

  const flirtMessage = document.getElementById('flirt-message');
  const randomMessage = cuteMessages[Math.floor(Math.random() * cuteMessages.length)];
  flirtMessage.textContent = randomMessage;

  // Display the flirt message with a smooth fade-in
  flirtMessage.style.opacity = 1;
}

// Initial opacity of puppy image (start with hidden)
window.onload = () => {
  setTimeout(() => {
    const puppyContainer = document.getElementById('puppy-container');
    const puppyImage = document.getElementById('puppy-img');

    puppyContainer.style.opacity = 1;
  }, 1000); // Delay the puppy appearance slightly for smooth intro
};

// Create floating hearts
function createHearts() {
  const heartCount = 10;
  const background = document.getElementById('background');

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.left = `${Math.random() * 100}%`;
    background.appendChild(heart);
  }
}

createHearts();









