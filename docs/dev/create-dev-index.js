/**
 * @description This script generates section elements for each markdown 
 *              file in the slides folder and updates the index.html file with the 
 *              generated section elements.
 * 
 *              This script is intended to be used during presentation development, 
 *              to create a quick index.html for testing the slides.
 * 
 */

const fs = require('fs');
const path = require('path');

// Path to the slides folder
const slidesFolder = '../slides';

// Path to the index.html file
const indexFile = '../index.html';

// Function to generate section elements for each markdown file
function generateSection(filePath) {
    return `<section data-transition="slide" data-markdown="${filePath}">${filePath}</section>\n`;
}

// Get a list of markdown files in the slides folder
const markdownFiles = fs.readdirSync(slidesFolder).filter(file => path.extname(file) === '.md');

// Generate section elements for each markdown file
const sectionElements = markdownFiles.map(file => generateSection(path.join('slides', file)));

// Read the contents of the index.html file
let indexContent = fs.readFileSync(indexFile, 'utf8');

// Find the start and end positions of <div class="slides">
const slidesStart = indexContent.indexOf('<div class="slides">') + '<div class="slides">'.length;
const slidesEnd = indexContent.indexOf('</div>', slidesStart);

// Prepare the updated content
let updatedIndexContent = indexContent.slice(0, slidesStart);
sectionElements.forEach(section => {
    updatedIndexContent += section;
});
updatedIndexContent += indexContent.slice(slidesEnd);

// Write the updated index content back to the index.html file
fs.writeFileSync(indexFile, updatedIndexContent);

console.log(indexFile+" file has been updated.");
