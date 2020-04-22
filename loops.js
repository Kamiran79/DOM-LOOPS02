/*
const dinos = [
    {
        dinoType: 't-rex',
        name: 'Tommy',
        age: 100
    },
    {
        dinoType: 'stegosaurus',
        name: 'Steve',
        age: 10
    },
    {
        dinoType: 't-rex',
        name: 'Ian',
        age: 100
    },
];

const buildDinoCards = () => {
    //todo: build dino card
    let domString = '';
    const selectedDiv = document.querySelector('#dino-pen');
    selectedDiv.innerHTML = `<h2>Dinos Go Here!!!</h2>`;
}

const inti = () => {
    buildDinoCards();
}

init();

*/

// exercise 2:
// create an assignments array, which has several assignment objects in it
// assignment should have: title, dueDate, topic, notes
// loop over assignments array, and create 'cards' for each assignment
// bonus points for using printToDom to print them to the dom
// hint: create a div for the assignment cards to go to


/* some data */


const assignments = [
    {
      title: 'product cards',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
    },
    {
      title: 'product cards2',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
    },
    {
      title: 'product cards3',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
    },
    {
      title: 'product cards4',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
    },
    {
      title: 'product cards5',
      dueDate: '03/05/2019',
      topic: 'HTML/CSS',
      notes: 'Use flexbox',
    }
];

/* build html string to be display in the page */
const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
}



const buildAssignmentCards = (assignmentCollection) => {
    let domString = '';
    for (let j = 0; j < assignmentCollection.length; j++) {
      domString += `<div class="assignment">`
      domString += `<div class="assignment-title">${assignmentCollection[j].title}</div>`;
      domString += `<strong>Due Date: ${assignmentCollection[j].dueDate}</strong>`
      domString += `<div>Topic: ${assignmentCollection[j].topic}</div>`
      domString += `<div>Notes: ${assignmentCollection[j].notes}</div>`
      domString += `</div>`
    }
  
    printToDom('#assignments', domString)
};
  
const init = () => {
    //buildDinoCards(dinos);
    buildAssignmentCards(assignments);
}


init();




