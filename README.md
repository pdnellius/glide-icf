# Overlapping Circular Avatars

This plugin takes a comma-separated string of image URLs and generates HTML to display these images as overlapping circular avatars with inline CSS.

## How to Use

1. Include `function.js` in your project.
2. Call the `generateAvatars(imageURLs)` function with a comma-separated string of image URLs.
3. The function will return an HTML string. Insert this string into your webpage to display the overlapping avatars.

Example:

```javascript
const avatarHTML = generateAvatars("https://example.com/avatar1.png,https://example.com/avatar2.png,https://example.com/avatar3.png");
document.body.innerHTML = avatarHTML;
