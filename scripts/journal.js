/* foundation of the html */
/* const myJournal = {
    date: "4 - 1 - 2019",
    concepts: "First Day",
    coffee: "2",
    entry: "Today was my first day. I was excited! We went over the calendar and some campus rules. Can't wait to get started!",
    mood: "Great"
};
*/

/* making blank array to push entries */
/* var allEntries = [];
allEntries.push(myJournal);
*/

/* selecting all input fields */
/*var journalEntry = document.querySelector("#content");
*/

/* button */
/* function newEntry(evt) {
    console.log(evt);
}
*/
/* const btnGetInfo = document.querySelector("#button");
btnGetInfo.addEventListener("click", newEntry);
*/
/* formatting the entries to put on the dom */
/* const createLog = (oneJournalEntry) => {
    return `
        <div id="container">
            <h2>${oneJournalEntry.date}</h2>
            <p>Concepts Covered:
            ${oneJournalEntry.concepts}
            </p>
            <p>Cups of Coffee:
            ${oneJournalEntry.coffee}
            </p>
            <p>Mood:
            ${oneJournalEntry.mood}</p>
            <br> </br>
        </div>
        <div id="containerEntry">
        ${oneJournalEntry.entry}
        </div>
    `;
};
const outputSection = document.getElementById("goingToHTML");
*/
/* function to iterate over journal entries */
/* const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        const entryDiv = createLog(entries[i]);
        outputSection.innerHTML += entryDiv;
    };
};
*/
/* createLog(myJournal);
*/
/* invoking the render function */
/* renderJournalEntries(allEntries);
*/
const apiBaseURL = "http://127.0.0.1:8088/";

/* creating entry using POST */
const createEntry = (journalObj) => {
    fetch(`${apiBaseURL}`,
    {
        // These are found online
        method: "POST",
        headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify(journalObj)
        }
    )
    // Check the fetch promise
    .then(response => response.json())
    .then(parsedResult => {
        console.log("new entry", parsedResult);
    });
};

var myEntry  = {

};


createEntry(myEntry);