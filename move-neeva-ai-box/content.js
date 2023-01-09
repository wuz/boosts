const sidebars = document.querySelectorAll(".app-layout__column-2kU_Y");

const rightSidebar = sidebars[sidebars.length - 1];
const mainContent = sidebars[sidebars.length - 2];

const divs = mainContent.querySelectorAll("div");

const aiAnswerBox = Array.from(divs).find((div) => Array.from(div.classList).some((str) => str.includes('aiAnswer')));

const aiAnswerContainer = aiAnswerBox.parentNode.parentNode.parentNode.parentNode.parentNode;

aiAnswerContainer.style.display = 'none';

mainContent.removeChild(aiAnswerContainer);

rightSidebar.prepend(aiAnswerContainer);

aiAnswerContainer.style.display = 'block';