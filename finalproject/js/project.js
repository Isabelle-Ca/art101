//INTRO BUTTON CLICK//
var click = document.getElementById('myClick');

// Get the OK button
var okButton = document.getElementById('okBtn');

// Get the main content area
var mainContent = document.getElementById('mainContent');

// When the page loads, display the box
window.onload = function() {
  click.style.display = 'flex'; // Show the box
}

// When the user clicks the "OK" button, hide the box and show the content
okButton.onclick = function() {
  click.style.display = 'none'; // Hide the box
  mainContent.style.display = 'block'; // Show the main content
}
//THIS IS FOR THE SONGS//
document.getElementById('songForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission (page reload)

  // Get the user input
  var songQuery = document.getElementById('myInput').value;

  // Check if input is empty
  if (songQuery === "") {
    alert("Please enter a song name.");
    return;
  }

  // Simulating an API response (replace this with actual API calls)
  // Here, we're just hardcoding some sample song data
  var songData = [
    { title: "Hello", artist: "Adele" },
    { title: "Shape of You", artist: "Ed Sheeran" },
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "Levitating", artist: "Dua Lipa" },
    { title: "Stay", artist: "The Kid LAROI, Justin Bieber" }
  ];

  // Filter songs based on the user input
  var filteredSongs = songData.filter(function(song) {
    return song.title.toLowerCase().includes(songQuery.toLowerCase());
  });

  // Display the results section
  var songResultsDiv = document.getElementById('songResults');
  var songList = document.getElementById('songList');

  // Clear any previous results
  songList.innerHTML = "";

  // If no songs found
  if (filteredSongs.length === 0) {
    songList.innerHTML = "<li>No songs found matching your search.</li>";
  } else {
    // Add each song to the list
    filteredSongs.forEach(function(song) {
      var listItem = document.createElement('li');
      listItem.textContent = `${song.title} by ${song.artist}`;
      songList.appendChild(listItem);
    });
  }

  // Show the results section
  songResultsDiv.style.display = 'block';

  // Optionally, clear the input field
  document.getElementById('myInput').value = '';
});

