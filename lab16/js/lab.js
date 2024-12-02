/*
   Lab 16: JSON & APIs - Working with your partner, experiment with processing JSON from an API.
   Author: Isabelle Carrou
   Date: December 2, 2024
*/
// Using the core $.ajax() method
// Using the core $.ajax() method to get the latest XKCD comic

$.ajax({
    url: "https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function(comicObj) {
        console.log("Success: Comic data received:", comicObj); // This should show the comic object
        var comicSection = $('<section></section>');
        var comicTitle = $('<h2></h2>').text(comicObj.title);
        var comicImage = $('<img>')
            .attr('src', comicObj.img)
            .attr('alt', comicObj.alt)
            .attr('title', comicObj.alt);

        comicSection.append(comicTitle);
        comicSection.append(comicImage);
        $('body').append(comicSection);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error in request:", textStatus, errorThrown); // Logs errors
    }
});
