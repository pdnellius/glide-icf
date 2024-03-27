function generateAvatars(imageURLs) {
  // Split the input string into an array of URLs and trim whitespace
  const urls = imageURLs.split(',').map(url => url.trim());

  // Use an array to collect HTML snippets for better performance on large arrays
  const htmlSnippets = urls.map((url, index) => {
    return `<img src="${url}" alt="Avatar ${index + 1}" style="border-radius: 50%; width: 50px; height: 50px; margin-left: ${index > 0 ? '-15px' : '0px'};" />`;
  });

  // Construct the final HTML string
  const htmlOutput = `<div style="display: flex; flex-direction: row; align-items: center;">${htmlSnippets.join('')}</div>`;

  return htmlOutput;
}
