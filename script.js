
// MINDSPARK Registration and Login

function showRegister() {
    let name = prompt("Enter your full name:");
    if (!name) return;

    let email = prompt("Enter your email:");
    if (!email) return;

    let password = prompt("Create a password:");
    if (!password) return;

    let participants = JSON.parse(
        localStorage.getItem("participants") || "[]"
    );

    let alreadyRegistered = participants.find(
        user => user.email === email
    );

    if (alreadyRegistered) {
        alert("This email is already registered!");
        return;
    }

    participants.push({
        name: name,
        email: email,
        password: password
    });

    localStorage.setItem(
        "participants",
        JSON.stringify(participants)
    );

    alert("Registration successful! You can now log in.");
}

function showLogin() {
    let email = prompt("Enter your registered email:");
    if (!email) return;

    let password = prompt("Enter your password:");
    if (!password) return;

    let participants = JSON.parse(
        localStorage.getItem("participants") || "[]"
    );

    let user = participants.find(
        participant =>
            participant.email === email &&
            participant.password === password
    );

    
    if (user) {

        localStorage.setItem("loggedInUser", JSON.stringify(user));
        displayDashboard(user);
    } else {
        alert("Invalid email or password. Please try again.");
    }
    
}

function displayDashboard(user) {

    document.getElementById("participantDashboard").style.display = "block";

    document.getElementById("participantName").innerText =
        "Hello, " + user.name;

    document.getElementById("score1").innerText = 0;
    document.getElementById("score2").innerText = 0;
    document.getElementById("score3").innerText = 0;
    document.getElementById("totalScore").innerText = 0;

    document.getElementById("participantDashboard")
        .scrollIntoView({ behavior: "smooth" });
}

function logout() {
    localStorage.removeItem("loggedInUser");
    document.getElementById("participantDashboard").style.display = "none";
    alert("You have logged out successfully!");
}




// DISPLAY ROUND INFORMATION

function showRoundInfo(roundNumber) {

    const rounds = {
        1: {
            title: "ROUND 01",
            name: "🔍 Digital Evidence Hunt",
            description: "Investigate the campus mystery by exploring digital clues, activity records and hidden evidence.",
            points: "Maximum Points: 25"
        },

        2: {
            title: "ROUND 02",
            name: "🔐 Cipher Break",
            description: "Explore secret messages, coding concepts, debugging challenges and logical puzzles.",
            points: "Maximum Points: 25"
        },

        3: {
            title: "ROUND 03",
            name: "⚖️ Final Verdict",
            description: "Connect all the clues, analyse the available evidence and present your final conclusion.",
            points: "Maximum Points: 30"
        }
    };

    const selectedRound = rounds[roundNumber];

    document.getElementById("participantDashboard").style.display = "none";

    document.getElementById("roundInfoPage").style.display = "block";

    document.getElementById("roundTitle").innerText = selectedRound.title;

    document.getElementById("roundName").innerText = selectedRound.name;

    document.getElementById("roundDescription").innerText =
        selectedRound.description;

    document.getElementById("roundPoints").innerText =
        selectedRound.points;

    window.scrollTo(0, 0);
}





// SHOW LEADERBOARD


function showLeaderboard() {
    document.getElementById("participantDashboard").style.display = "none";
    document.getElementById("roundInfoPage").style.display = "none";
    document.getElementById("leaderboardPage").style.display = "block";

    window.scrollTo(0, 0);
}

function backToDashboard() {
    document.getElementById("leaderboardPage").style.display = "none";
    document.getElementById("roundInfoPage").style.display = "none";
    document.getElementById("participantDashboard").style.display = "block";

    window.scrollTo(0, 0);
}
