console.log("main");


function populatePage(entryArray){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = entryArray.map(myNewEntry).join("");
    document.querySelector("#goingToHTML").append(newDiv);
}

/* formatting the entries to put on the dom */
const myNewEntry = (oneJournalEntry) => {
    let block = `
        <div id="container">
            <h2>${oneJournalEntry.date}</h2>
            <p>Concepts Covered:
            ${oneJournalEntry.concepts}
            </p>
            <p>Cups of Coffee:
            ${oneJournalEntry.coffee}
            </p>
            <p>Mood:
            ${oneJournalEntry.mood}
            </p>
            
            <br> </br>
        </div>
        <div id="containerEntry">
        ${oneJournalEntry.entry}
        </div>
    `;
    return block;
};