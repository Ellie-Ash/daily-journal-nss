//doesnt work
const apiBaseURL = "http://localhost:8088/";

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

const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/myJournal")
            .then(response => response.json())
    }
}