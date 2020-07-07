function fetchGitHubInformation(event) {
/* first check that a github username has been entered, if not then return */
    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }
/* username entered, return loading gif to screen "we are working on it"
    note template literals (backtick) */
    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);
/* making promises to GitHub API to retrieve user-date for username  */
 $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function(response) {
            var userData = response;
            $("#gh-user-data").html(userInformationHTML(userData));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    `<h2>No info found for user ${username}</h2>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });
}