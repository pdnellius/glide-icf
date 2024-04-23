// The function here takes the parameters that you
// have declared in the `glide.json` file, in the
// same order.
window.function = function(joinedSection, joinedText) {
  // create an array from the comma-separated text in joinedSection
  const sections = joinedSection.value.split(',');
  // create an array from the comma-separated text in joinedText
  const text = joinedText.value.split(',');
  // create a placeholder div that will we will append our lists to
  const output = document.createElement('div');
  //create a H2 for our sectionsList
  const sectionsHeading = document.createElement('h2');
  sectionsHeading.innerText = "Sections:"
  // create an H2 for our textList
  const textHeading = document.createElement('h2');
  sectionsHeading.innerText = "Text:"
  // create an ordered list that that will be our first list
  const sectionsList = document.createElement('ol');
  // create an ordered list that will be our second list
  const textList = document.createElement('ol');
  // loop through joinedSection and create a list item for each item
  sections.forEach(sectionItem => {
    const li = document.createElement('li');
    li.textContent = sectionItem;
    sectionsList.appendChild(li);
  });

  // loop through joinedText and create a list item for each item
  text.forEach(textItem => {
    const li = document.createElement('li');
    li.textContent = textItem;
    textList.appendChild(li);
  });

  // append the sectionsList and textList to the div
  output.appendChild(sectionsHeading);
  output.appendChild(sectionsList);
  output.appendChild(textHeading);
  output.appendChild(textList);

  html = `${output.outerHTML}`;

  return html;
}


// window.function = function(imageURLs, size, cap, backgroundColor, textColor) {
//   // Split the input string into an array of URLs and trim whitespace
//   const urls = imageURLs.value.split(',').map(url => url.trim());
//   const imagesize = size.value;
  
//   // Set default colors if none provided
//   const bg_color = (backgroundColor && backgroundColor.value) ? backgroundColor.value : 'black';
//   const text_color = (textColor && textColor.value) ? textColor.value : 'white';

//   // Define the cap value, default to urls.length if cap is not provided or invalid
//   let avatarCap = urls.length;
//   if (cap && cap.value) {
//     const parsedCap = parseInt(cap.value, 10);
//     if (!isNaN(parsedCap)) {
//       avatarCap = parsedCap;
//     }
//   }
  
//   // Determine the number of avatars to display
//   const displayCount = Math.min(urls.length, avatarCap);
//   const remainingCount = urls.length - displayCount;

//   // Use an array to collect HTML snippets for better performance on large arrays
//   let htmlSnippets = urls.slice(0, displayCount).map((url, index) => {
//     return `<img src="${url}" alt="Avatar ${index + 1}" style="border-radius: 50%; width: ${imagesize}px; height: ${imagesize}px; object-fit: cover; margin-left: ${index > 0 ? '-15px' : '0px'};" />`;
//   });

//   // Add an additional avatar if there are more avatars than the cap
//   if (remainingCount > 0) {
//     htmlSnippets.push(`<div style="background-color: ${bg_color}; border-radius: 50%; width: ${imagesize}px; height: ${imagesize}px; display: flex; align-items: center; justify-content: center; margin-left: -15px; font-weight: bold, font-size: ${imagesize / 4}px; color: ${text_color};">+${remainingCount}</div>`);
//   }

//   // Construct the final HTML string
//   const htmlOutput = `<div style="display: flex; flex-direction: row; align-items: center; overflow-x: auto; max-width: 100%; -ms-overflow-style: none; scrollbar-width: none;">${htmlSnippets.join('')}</div>`;

//   return htmlOutput;
// }
