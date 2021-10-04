function listOfColours(colours) {
  // Write your code here...

  let divContent = document.getElementById("content");
  
    const elementSelect = document.createElement('select');
  content.appendChild(elementSelect);
  const elementParagraph = document.createElement('p');
  content.appendChild(elementParagraph);


  colours.forEach(function(isColours){
    const elementOption = document.createElement('option');
    elementOption.value = isColours
    elementOption.innerText = isColours;
    elementSelect.appendChild(elementOption);
  })

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
