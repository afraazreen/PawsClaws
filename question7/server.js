const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const { name } = require('ejs');


const app = express();

//Set the views directory
app.set('views', path.join(__dirname, 'views'));

//Set the public directory
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({ extended: true}))

app.use(bodyParser.urlencoded({ extended: true}));

//Express sessions
app.use(session({
    secret: 'random',
    resave: false,
    saveUninitialized: false
}));

//Set EJS as the view engine
app.set('view engine', 'ejs');

//Define routes

//1. Home.ejs 
app.get('/', (req, res) => {
    res.render('homeStyleLayout', {
        pageTitle: 'Home',
        content: 'home',
    });
});

//

//2. createAnAccount.ejs
app.get('/createAnAccount', (req, res) => {
    res.render('layout', {
        pageTitle: 'Account Creation',
        content: 'createAnAccount',
    });
});

//3. catCare.ejs 
app.get('/catCare', (req, res) => {
    res.render('animalStyleLayout', {
        pageTitle: 'Cat Care',
        content: 'catCare',
    });
});

//4. dogCare.ejs 
app.get('/dogCare', (req, res) => {
    res.render('layout', {
        pageTitle: 'Dog Care',
        content: 'dogCare',
    });
});

//5. haveAPetToGiveAway.ejs
app.get('/haveAPetToGiveAway', (req, res) => {
    if(req.session.isAuthenticated){
    res.render('layout', {
        pageTitle: 'Have A Pet To Giveaway',
        content: 'haveAPetToGiveAway' 
    });
    }
    else{
        res.render('layout', {
            pageTitle: 'Access Denied',
            content: 'accessDenied',
        });
    }
});

//6. findDogOrCat.ejs
app.get('/findDogOrCat', (req, res) => {
    res.render('layout', {
        pageTitle: 'Find A Dog Or Car',
        content: 'findDogOrCat',
    });
});

//7. contactUs.ejs
app.get('/contactUs', (req, res) => {
    res.render('layout', {
        pageTitle: 'Contact Us',
        content: 'contactUs',
    });
});

//8. successfulAccountCreation.ejs
app.get('/successfulAccountCreation', (req,res) => {
    res.render('layout', {
        pageTitle: 'Account Created',
        content: 'successfulAccountCreation',
    });
});

//9.  login 
app.get('/login', (req,res) => {
    res.redirect('login-page');
});

//10.  login-page.ejs
app.get('/login-page', (req,res) => {
    res.render('layout', {
        pageTitle: 'Log in',
        content: 'login-page',
    });
});

//11. logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/logout-page')
    });
});

//12. logout-page
app.get('/logout-page', (req,res) => {
    res.render('layout', {
        pageTitle: 'Logged out',
        content: 'logout-page',
    });
});
//13. loggedIn.ejs
app.get('/loggedIn', (req,res) => {
    res.render('layout', {
        pageTitle: 'Logged in',
        content: 'loggedIn',
    });
});

//13. usernameTaken.ejs
app.get('/usernameTaken', (req,res) => {
    res.render('layout', {
        pageTitle: 'Username Taken',
        content: 'usernameTaken',
    });
});

//14. usernameDoesNotExist.ejs
app.get('/usernameDoesNotExist', (req,res) => {
    res.render('layout', {
        pageTitle: 'Username Does Not Exist',
        content: 'usernameDoesNotExist',
    });
});

//15. addedPet.ejs
app.get('/addedPet', (req,res) => {
    res.render('layout', {
        pageTitle: 'Added A Pet',
        content: 'addedPet',
    });
});

//15. addedPet.ejs
app.get('/filteredPets', (req,res) => {
    res.render('layout', {
        pageTitle: 'Filtered Pets',
        content: 'filteredPets',
    });
});

//Forms
//Define routes
app.post('/submitLogin', (req,res) =>{     
    console.log(req.body)
    const usernameToCheck = req.body.username;
    const passwordToCheck = req.body.password;
   
    //Check if username and password combo exists
    if (isCredentialExists(usernameToCheck, passwordToCheck)) {
        req.session.isAuthenticated = true;         //Login the user automatically
        req.session.username = req.body.username;   //Set username in session
        res.redirect('/loggedIn');
    }
    else{
        res.redirect('/usernameDoesNotExist');
    }
});

app.post('/submitGiveAway', (req,res) =>{       //Giveaway pet
    const username = req.session.username;
    const petType = req.body.pettype;
    const breed = req.body.breed;
    const age = req.body.age;
    const gender = req.body.gender;
    const otherDogs = req.body.otherdogs === 'on' ? 'Yes' : 'No'; // Checkbox value handling
    const otherCats = req.body.othercats === 'on' ? 'Yes' : 'No'; // Checkbox value handling
    const smallChildren = req.body.smallchildren === 'on' ? 'Yes' : 'No'; // Checkbox value handling
    const comment = req.body.comment;
    const ownerName = req.body.ownername;
    const ownerEmail = req.body.owneremail;
    
    addPetInfo(username,petType,breed,age,gender,otherDogs,otherCats,smallChildren,comment,ownerName,ownerEmail)

    res.redirect('/addedPet')
});

app.post('/submitFind', (req, res) => {         //Find pet
    try {
        //Read the pet information file
        const fileContent = fs.readFileSync('soen287_a3/Q7/AdoptADogOrCat/pets.txt', 'utf8');

        //Split the file content into pet records
        const petRecords = fileContent.trim().split('\n');

        //Extract form data
        const formCriteria = req.body;

        //Filter pet records based on form criteria
        const filteredPetRecords = filterPetRecords(petRecords, formCriteria);

        //Render filteredPets.ejs with filtered pet records
        res.render('filteredPets', { filteredPetRecords });
    } catch (error) {
        console.error('Error processing form submission:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/submitCreateAccount', (req,res) =>{       //Create account
    console.log(req.body)
    const usernameToCheck = req.body.username;
   
    //Check if username is already taken or already logged in
    if (isUsernameTaken(usernameToCheck)) {
        res.redirect('/usernameTaken');
    }
    else{
    //Write username and password to user.txt
    fs.appendFileSync('soen287_a3/Q7/AdoptADogOrCat/users.txt', `${req.body.username}:${req.body.password}\n`);

    req.session.isAuthenticated = true;         //Login the user automatically
    req.session.username = req.body.username;   //Set username in session
    
    //Return success response
    res.redirect('/successfulAccountCreation');
    }

});


//Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});