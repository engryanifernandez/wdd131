// Set current year in the footer
const currentYearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Set last modified date in the footer
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = "Last Modification: " + document.lastModified;