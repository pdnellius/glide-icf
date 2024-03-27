window.function = function(imageURLs,size) {
  // Split the input string into an array of URLs and trim whitespace
  const urls = imageURLs.value.split(',').map(url => url.trim());
  const size = size.value;
  
  // Use an array to collect HTML snippets for better performance on large arrays
  const htmlSnippets = urls.map((url, index) => {
    return `<img src="${url}" alt="Avatar ${index + 1}" style="border-radius: 50%; width: ${size}px; height: ${size}px; margin-left: ${index > 0 ? '-15px' : '0px'};" />`;
  });

  // Construct the final HTML string
  const htmlOutput = `<div style="display: flex; flex-direction: row; align-items: center;">${htmlSnippets.join('')}</div>`;

  return htmlOutput;
}
