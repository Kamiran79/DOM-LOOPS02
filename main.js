console.log("this DOM-Loops02");


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