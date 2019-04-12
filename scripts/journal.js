const journalEntry = document.querySelectorAll("#content");
console.log(journalEntry);

function entryInfo(evt){
    console.log(evt);
}

const btnGetInfo = document.querySelector("#button");
btnGetInfo.addEventListener("click", entryInfo);