console.log("this DOM-Loops02");
/*

const colors = ['red', 'orange', 'blue', 'white'];



const colorLoop = () => {
    let domString = '';
    for (let i = 0; i < colors.length; i++) {
    //
    domString += `<h2>${colors[i]}<h2>`;
    }

    console.log(domString);

}
/*
const instructor = [{FirstName: 'Luke', LastName: 'Lancster'},
                    {FirstName: 'Matt', LastName: 'Loggan'},
                    {FirstName: 'Micheal', LastName: 'hhh'}];

*/
/*
const instructor = [
                   {FirstName: 'Luke', LastName: 'Lancster'},
                   {FirstName: 'Matt', LastName: 'Gill'},
                   {FirstName: 'Micheal', LastName: 'Clark'}];

const instructorLoop = () => {
    let domString02 = '';
    for (let i = 0 ; i < instructor.length; i++) {
        domString02 += `<h2>First Name: ${instructor[i].FirstName} Last Name: ${instructor[i].LastName}</h2>`;
    } 
    //return domString02
    console.log(domString02);
}
                  
 const init = () => {
     instructorLoop();
 }

 init();

 */


 const dinos = [
    {
        title: 'Java',
        dueDate: '02/19/2020',
        topic: 'first topic',
        notes:'comments go here'
    },
    {
        title: 'JavaScript',
        dueDate: '01/19/2020',
        topic: 'second topic',
        notes:'comments go here'
    },
    {
        title: 'C#',
        dueDate: '03/19/2020',
        topic: 'third topic',
        notes:'comments go here'
    },    
];

const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
}

const buildDinoCards = (dinoCollection) => {
    //todo: build dino card
    let domString = '';
    for (let i = 0; i < dinoCollection.length; i++){
        domString += '<div class="dino">';
        domString += `<h2>Title: ${dinos[i].title}</h2>`;
        domString += `<h3>dueDate: ${dinos[i].dueDate}</h3>`;
        domString += `<h3>Topic: ${dinos[i].topic}</h3>`;
        domString += `<h3>Notes: ${dinos[i].notes}</h3>`;
        domString += '</div>';
    }

    console.log(domString);
    printToDom('#dino-pen', domString);

    //const selectedDiv = document.querySelector('#dino-pen');
    //selectedDiv.innerHTML = domString;
}
/*
const init = () => {
    buildDinoCards(dinos);
}

init();

*/