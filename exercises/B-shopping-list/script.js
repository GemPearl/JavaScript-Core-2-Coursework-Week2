function shoppingList(arrayOfPeople) {
  // Write your code here...
  const content = document.getElementById("content"); // Get new element
  
  const u1E1 = document.createElement("ul"); //create a loop to look at indiviual elements in the array
 
  shopping.forEach(function(isList){

    const liEl = document.createElement("li");
    
    liEl.innerHTML = isList;
    ulEl.appendChild(liEl);
    })

    content.appendChild(ulEL);


}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
