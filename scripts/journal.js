/* foundation of the html */
const myJournal = {
    date: "a",
    concepts: "b",
    coffee: "c",
    entry: "d",
    mood: "e"
}
console.log("journal entry", myJournal);


/* making blank array to push entries */
var allEntries = [];
allEntries.push(myJournal);

console.log("entries", allEntries);

/* practice */
const myJournal2 = {
    date: "dog",
    concepts: "cat",
    coffee: "horse",
    entry: "fish",
    mood: "mouse"
}
const myJournal3 = {
    date: "chocolate",
    concepts: "vanilla",
    coffee: "blueberry",
    entry: "strawberry",
    mood: "orange"
}

allEntries.push(myJournal2, myJournal3);
console.log("test", allEntries);


/* selecting all input fields */
var journalEntry = document.querySelectorAll("#content");
console.log(journalEntry);


/* button */
function newEntry(evt){
    console.log(evt);
    }
    
    const btnGetInfo = document.querySelector("#button");
    btnGetInfo.addEventListener("click", newEntry);
    
