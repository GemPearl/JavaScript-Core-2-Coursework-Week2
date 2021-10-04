function listOfNames(arrayOfPeople) {
  let content = document.getElementById("content");

  people.forEach(function (person){
    const h1E1 = document.createElement("h1");
    h1E1.innerHTML = person.name;
    content.appendChild(h1E1);
    const h2E1 = document.createElement("h2");

    h2E1.innerHTML = person.job;
    content.appendChild(h2E1)
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
