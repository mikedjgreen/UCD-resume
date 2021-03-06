<img src="https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png" style="margin: 0;">

# Mike Green's CV

Resume project using Code Institute's 'Interactive Front End Development' module's tutorials.

## Google Maps API

Google documentation for using API: [Google Maps](https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=en_US)

* HTML "div id='map'"
* Get API key for Google Maps Javascript API
* Reference Google JS library for working with Google maps.
* Rendering the map. zoom parameter  gets larger value to zoom in to area. lat/lng coordinates
* Adding markers to the map, in clusters.

## GitHub API

* prompting client for GitHub username
* using js fetchGitHubInformation function to retrieve repositories from GitHub for username
* using jQuery promises to retrieve information $.when().then()
* rendering user data using function userInformationHTML(user)
* rendering repo data using function repoInformationHTML(repos)

### NB  API Throttling
Found I got an error retrieving GitHub API data see [GitHub doc](https://developer.github.com/v3/#rate-limiting)

Within the terminal , used command :" curl -i https://api.github.com/users/octocat" to inspect error.

X-Ratelimit-Limit: 60   means 'The maximum number of requests you're permitted to make per hour.'

* amended error capture of 403 (Forbidden) on fetchGitHubInformation function.


## Email Service

* Signing up [EmailJS](https://www.emailjs.com/)
* email template id 'mikeg' to gmail account
* use emailjs sdk to generate
* amend contact.html to call js script assets/js/sendEmail.js

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the backend lessons.

## Updates Since The Instructional Video

We continually tweak and adjust this template to help give you the best experience. Here are the updates since the original video was made:

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

--------

Happy coding!
