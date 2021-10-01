function listOfColours(colours) {
  // Write your code here...

  let divContent = document.querySelector("#content");
  let selectedDropDownMenu =document.createElement("select");
  let pElement = document.createElement("p");
  pElement.innerText = `You have selected:`;

  divContent.appendChild(selectedDropDownMenu);
  divContent.appendChild(pElement);

  colours.forEach(colorName => {
    let optionName = document.createElement("option");
    optionName.innerText = colorName;
    selectedDropDownMenu.appendChild(optionName);
    });

    selectedDropDownMenu.addEventListener("change", (e) => {
      pElement.style.color = e.target.value;
      pElement.innerText = `You have selected: ${e.target.value}`;
    })

}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
