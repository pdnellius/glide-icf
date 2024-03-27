function generateAvatars(imageURLs) {
  // Split the input string into an array of URLs
  const urls = imageURLs.split(',');

  // Start the HTML string with a div to contain the avatars
  let htmlOutput = '<div style="display: flex; flex-direction: row; align-items: center;">';

  // Loop through each URL to generate the HTML for each avatar
  urls.forEach((url, index) => {
    htmlOutput += `<img src="${url.trim()}" style="border-radius: 50%; width: 50px; height: 50px; margin-left: ${index > 0 ? '-15px' : '0px'};" />`;
  });

  // Close the container div
  htmlOutput += '</div>';

  return htmlOutput;
}