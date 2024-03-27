document.addEventListener('DOMContentLoaded', function() {
  // Example usage of the generateAvatars function
  const exampleInput = "https://example.com/avatar1.png,https://example.com/avatar2.png,https://example.com/avatar3.png";
  const avatarHTML = generateAvatars(exampleInput);

  // Display the generated avatars in the page
  document.getElementById('avatarDisplay').innerHTML = avatarHTML;
});
