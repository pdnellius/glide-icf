# Overlapping Circular Avatars

This plugin takes a comma-separated string of image URLs and generates HTML to display these images as overlapping circular avatars with inline CSS.

## How to Use

1. Create a join list of image URLs
2. Point the experimental code column to that CSV string of image URLs
3. The column will return an HTML string. Insert this value into a Rich Text component in Glide.

Example:

```javascript
const avatarHTML = generateAvatars("https://example.com/avatar1.png,https://example.com/avatar2.png,https://example.com/avatar3.png");
document.body.innerHTML = avatarHTML;
