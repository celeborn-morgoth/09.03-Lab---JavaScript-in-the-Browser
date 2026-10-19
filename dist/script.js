function myLineUp(event) {
    //  stop form submission from refreshing the entire page
    event.preventDefault();

    //  fetch data fields from the form
    let selectedStatus = document.querySelector('input[name="status"]:checked').value;
    let selectedDate = document.getElementById("gameDate").value;
    
    // find all checked boxes under player group
    let checkedPlayers = document.querySelectorAll('input[name="players"]:checked');
    let playersArray = [];
    
    checkedPlayers.forEach(function(playerBox) {
        playersArray.push(playerBox.value);
    });

    // format list of players cleanly 
    let formattedPlayers = playersArray.length > 0 ? playersArray.join(", ") : "None";

    // print all individual raw variables directly to the console window
    console.log("Status Selected:", selectedStatus);
    console.log("Date Selected:", selectedDate);
    console.log("Players Array:", playersArray);

    // concatenate data selections together into a singular text string
    let finalSummaryText = "Lineup Details -> Status: " + selectedStatus + " | Date: " + selectedDate + " | Lineup roster: " + formattedPlayers;

    // inject the text directly onto the page surface
    document.getElementById("webpageOutput").textContent = finalSummaryText;
}

// attach event handler to the submit button
let targetButton = document.getElementById("submitBtn");
targetButton.addEventListener("click", myLineUp);
