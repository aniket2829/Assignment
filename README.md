#Overview
This project is a web application built with Node.js, Express.js, MongoDB, and Handlebars (hbs) templating engine. It provides user registration, login, and basic authentication functionalities.

#Installation
Clone the repository to your local machine.
Navigate to the project directory.
Run npm install to install the required dependencies.
Set up a MongoDB database and replace the connection string in db/conn.js with your MongoDB connection string.
#Usage
To start the server, run npm start or node app.js in the terminal.
Open a web browser and navigate to http://localhost:5000 to access the application.
#Project Structure
db/conn.js: Establishes a connection to the MongoDB database.
models/register.js: Defines the Mongoose schema for user registration.
public/: Contains static files such as CSS and client-side JavaScript.
src/:
app.js: Main application file. Defines routes and server setup.
views/: Contains Handlebars (hbs) templates for rendering HTML pages.
#Features
User Registration: Allows users to register by providing a username, password, and name.
User Login: Authenticates users based on their username and password.
Session Management: Maintains user sessions for authenticated routes.
Error Handling: Provides error handling for registration and login processes.
#Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Handlebars (hbs)
