[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# Lettuce B Frank Restaurant Reservation App

This is an app that allows customers to make reservations at the Lettuce B Frank Restaurant. The app also allows restaurant staff review reservations made for that day in order to prepare for the customers. The idea of the application is to build a reservation system that anyone can use and that is easy to deploy to many different businesses.

This project demonstrates the construction of a full stack application from scratch, including the database, api routes, and front end website and styling. It will check to see if the user is logged in. If they are, they will be redirected to their active reservations and be given the option to create a new reservation. If the user is not logged in, they will be prompted to enter information to create a user account, specifically their name, email, and phone number. To create a reservation the user must enter a name for their party, the number of guests the reservation is for, the date for the reservation, and the time. Once the information is entered, it will be saved to that user's dashboard with their active reservations. If the user is a returning user checking their reservation, they login to the system with their email and phone number to sccess their current reservations.

Through this project we solidified our backend skills, specifically route building and handling databases, whilst learning how to integrate that with front-end logic and design. The main challenges we faced were staffing challenges with our group and communication issues. As far as building the code goes, the main challenge was figuring out what to build when and then coordinating how to fit is all together into a cohesive product. 

The live production version of this application can be accessed on Heroku [here](https://mysterious-sands-14513.herokuapp.com/). Please feel free to use and test the application and let me know of any improvements or suggestions.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Technology Used](#technology-used)
* [Credits](#credits)

## Installation

This application is fully depoloyed on Heroku, so there is no installation needed. Simply access the site through the provided URL in teh description above.

## Usage
##### [Back to Table of Contents](#table-of-contents)

To use the app, you can click on either the login/signin navigation link or simply click the Reservations button.

![reservations button](https://github.com/cynogriffin/lettuce-b-frank/blob/develop/public/assets/README%20images/Reservations.PNG)

Then you will enter your information (name, email, and phone number) to create an account.

![user signup screen](https://github.com/cynogriffin/lettuce-b-frank/blob/develop/public/assets/README%20images/signup.PNG)

Once you create an account for the first time, you will then be able to place your first reservation.

![reservation details screen](https://github.com/cynogriffin/lettuce-b-frank/blob/develop/public/assets/README%20images/res-details.PNG)

After entering the full details for your reservation,  it will be placed in the system and you can view your reservation details from the user dashboard.

![user dashboard with active reservations](https://github.com/cynogriffin/lettuce-b-frank/blob/develop/public/assets/README%20images/dashboard.PNG)

## Technology Used
##### [Back to Table of Contents](#table-of-contents)

For this application, the front end was built using HTML, CSS, and JAvascript. We used Handlebars.js as our templating engine for the HTML and Materialize for our CSS framework. The back end was built using Node.js, Express.js, MySQL, Sequelize, and various npm packages such as dotenv and express-sessions. The project deployed through Heroku.

## Credits
##### [Back to Table of Contents](#table-of-contents)

For this project, we mainly referenced the documentation for [Node.js](https://nodejs.org/api/) and [Express.js](https://www.npmjs.com/package/express), as well as [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [Materialize](https://materializecss.com/), [sequelize](https://sequelize.org/v5/manual/getting-started.html), and [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs).




### Team Members

- Cody Griffin

- Amy Rodriguez

---
Licensed under the [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0).  