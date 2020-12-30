# twitter-clone-django-react

Prerequisites

This project has dependencies installed via npm, which is a package manager for node. In order to view the project, you should have node installed on your machine. If you don't have it, you can install it here
live-server should be installed globally on your machine. If you don't have it, open a new terminal window and run this command npm install -g live-server
How To Run The Application Locally

Clone the project

In you teminal, move to the directory where you want to keep this repository in. Then, clone this repository using this command:

    git clone https://github.com/yasminhillis/YouTube-clone-react.git
Then, cd into the repository using this command:

    cd YouTube-clone-react
Install the project depdencies:

    npm install
Set up interactions with the YouTube API

You'll need a developer key in order to access videos from the YouTube Data API. This is common practice with third party APIs because they want to keep track of who is accessing their data, enforce rate limits, and even sometimes make money. Access to the YouTube API is free, all you need is a Google Account.

 Go to Google's YouTube API

 If prompted, select a project or create a new one. It doesn't matter what you name a new project

 Click Enable and then Go to Credentials Select Web browser from the drop-down and the Public data radio button

 Give your key any name, leave the optional field blank, and click Create.

 Make your key available to the rest of your application from a new file, src/config/youtube.js

Now, run this command to build the project

    npm run build
In another terminal window by running live-server. If no new window is prompted in your browser, navigate to http://127.0.0.1:8080/ to view the project.

Stack:

React
jQuery
Next Steps:

I am planning to add a back-end for this project. Deployment is another crucial step to be taken as well. I want to use redux as well.

Bug reports

Please do not hesitate to report bugs by opening a new issue in the repositiry

Author

Yasmin Hillis
