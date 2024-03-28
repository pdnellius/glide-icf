window.function = function(imageURLs, size, cap) {
  // Split the input string into an array of URLs and trim whitespace
  const urls = imageURLs.value.split(',').map(url => url.trim());
  const imagesize = size.value;
  const avatarCap = cap ? parseInt(cap.value, 10) : urls.length;
  
  // Determine the number of avatars to display
  const displayCount = Math.min(urls.length, avatarCap);
  const remainingCount = urls.length - avatarCap;

  // Use an array to collect HTML snippets for better performance on large arrays
  const htmlSnippets = urls.slice(0, displayCount).map((url, index) => {
    return `<img src="${url}" alt="Avatar ${index + 1}" style="border-radius: 50%; width: ${imagesize}px; height: ${imagesize}px; object-fit: cover; margin-left: ${index > 0 ? '-15px' : '0px'};" />`;
  });

  // Add an additional avatar if there are more avatars than the cap
  if (urls.length > avatarCap) {
    htmlSnippets.push(`<div style="background-color: white; border-radius: 50%; width: ${imagesize}px; height: ${imagesize}px; display: flex; align-items: center; justify-content: center; margin-left: -15px; font-size: ${imagesize / 4}px; color: black;">+${remainingCount}</div>`);
  }

  // Construct the final HTML string
  const htmlOutput = `<div style="display: flex; flex-direction: row; align-items: center; overflow-x: auto; max-width: 100%; -ms-overflow-style: none; scrollbar-width: none;">${htmlSnippets.join('')}</div>`;

  return htmlOutput;
}
