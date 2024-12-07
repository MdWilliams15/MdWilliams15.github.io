$(document).ready(function() {
    // jQuery UI Date Picker widget
    $("#date").datepicker();

    // JavaScript Event Handling for changing background color
    $('#changeColorBtn').on('click', function() {
        // Generate a random color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // Change the background color of the entire body
        $('body').css('background-color', randomColor);
    });

    // Event Handling for displaying random joke
    $('#jokeBtn').on('click', function() {
        // AJAX request to fetch a random joke
        $.ajax({
            url: "https://official-joke-api.appspot.com/random_joke", // Public API for jokes
            method: "GET",
            success: function(response) {
                // Display the joke on the webpage
                const jokeHtml = `
                    <h3>Random Joke</h3>
                    <p><strong>${response.setup}</strong></p>
                    <p>${response.punchline}</p>
                `;
                $('#greeting').html(jokeHtml); // Reuse the greeting section
            },
            error: function() {
                $('#greeting').html("<p>Error loading joke. Please try again later.</p>");
            }
        });
    });
});

