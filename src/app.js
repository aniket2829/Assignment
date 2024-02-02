// Importing necessary modules
const express = require('express'); // Importing Express framework
const app = express(); // Creating an instance of Express
require("./db/conn"); // Importing database connection
const path = require("path"); // Importing path module
const Login = require("./models/register"); // Importing user model
const bcrypt = require("bcryptjs"); // Importing bcrypt for password hashing

const port = process.env.PORT || 5000; // Setting port number

const template_path = path.join(__dirname, "../templates/views"); // Setting path for views
const static_path = path.join(__dirname, "../public"); // Setting path for static files

// Middleware setup
app.use(express.json()); // Using json middleware for parsing JSON data
app.use(express.urlencoded({ extended: false })); // Using urlencoded middleware for parsing URL-encoded data

app.use(express.static(static_path)); // Serving static files from the 'public' directory
app.set("view engine", "hbs"); // Setting the view engine to Handlebars
app.set("views", template_path); // Setting the views directory

// Route for rendering the login page
app.get("/login", (req, res) => {
    res.render("login");
});

// Route for rendering the registration page
app.get("/", (req, res) => {
    res.render("register");
});

// Route for rendering the home page
app.get("/home", (req, res) => {
    res.render("home");
});

// Route for rendering the welcome page
app.get("/welcome", (req, res) => {
    res.render("welcome");
});

// Route for handling user registration
app.post("/", async (req, res) => {
    try {
        // Creating a new user instance
        const registerEmployee = new Login({
            username: req.body.username,
            password: req.body.password,
            name:req.body.name
        });
        // Saving the new user to the database
        const registered = await registerEmployee.save();
        // Redirecting to the login page after successful registration
        res.status(201).redirect("/login"); 
    } catch (error) {
        // Sending error response if registration fails
        res.status(400).send(error);
    }
});

// Route for handling user login
app.post("/login", async (req, res) => {
    try {
        // Extracting username and password from the request body
        const username = req.body.username
        const password = req.body.password
        // Finding the user with the provided username
        const userEmail = await Login.findOne({username:username})
        // Comparing the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, userEmail.password);
        console.log("User Email:", userEmail);
        console.log("Is Match:", isMatch);
        // Rendering the home page if login credentials match
        if (isMatch){
            res.status(201).render("home")
        } else {
            // Rendering the login page with an error message if login fails
            res.render("login",{loginError:"Please Enter your details carefully!"})
        }
    } catch (error) {
        // Rendering the login page with an error message if an error occurs during login
        res.render("login",{loginError:"Please Enter your details carefully!"});
    }
});

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log("Server started on Port 5000");
});
