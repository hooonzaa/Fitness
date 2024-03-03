function Home(){
    window.location.href = "home.html";
}

const validCredentials = [
    "petr.ahoj1",
    "jana.pizza2",
    "karel.kočka3",
    "eva.12345"
];

function checkLogin() {
    var enteredUsername = document.getElementById('Uname').value;
    var enteredPassword = document.getElementById('Pswrt').value;

    const foundUser = enteredUsername + "." + enteredPassword;

for (let i = 0; i < validCredentials.length; i++) {
        if (foundUser === validCredentials[i]) {
            console.log("Login successful.");
            window.location.href = "home.html";
            return;
        }
        console.log('Error: Invalid username or password. Please try again.');
    }
}


function Login(){
window.location.href = "login.html"
}



function setGoal() {
    const sport = document.getElementById('sport').value;
    const cíle = document.getElementById('goal').value; 

    const progressDiv = document.getElementById('progress');
    progressDiv.innerHTML = 'Vybraný sport: ' + sport + 'goal: ' + cile;

    console.log("Selected sport:", sport);
    console.log("Selected goal:", cíle)

    }
   
    
    


 