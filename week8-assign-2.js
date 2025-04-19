/*
Coding Steps:
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
1. Use at least one array.
2. Use at least two classes.
3. Your menu should have the options to create, view, and delete elements.
 

Video Steps:
Create a video, up to five minutes max, showing and explaining how your project works with an emphasis on the portions you contributed.
* This video should be done using screen share and voice over.
* This can easily be done using Zoom, although you don't have to use Zoom, it's just what we recommend.
* You can create a new meeting, start screen sharing, and start recording.
* This will create a video recording on your computer.
* This should then be uploaded to a publicly accessible site, such as YouTube.
* Ensure the link you share is PUBLIC or UNLISTED!

Coding Assignment Submission
This assignment is designed as a learning exercise to help you build and apply key skills.
*** You do not need to submit it*** but we encourage you to complete the steps to reinforce your understanding. Focus on practicing, experimenting, and improving your work to get the most out of this activity.

*/
class Team {
    constructor (teamName) { // each team has a name and starts with a blank roster array
        this.teamName = teamName;
        this.teamRoster = [];
    }

    addPlayer (player) { // add a player to the team
        return this.teamRoster.push(player);
    }
}

class Player {
    constructor (name, phone, position) {
        this.name = name; // name of the player
        this.phone = phone; // phone to text the player
        this.position = position; // position player usually plays
    }
}

class Menu {
    constructor(teamA, teamB, teamC, teamD) { // this men's league has four teams
        this.earlyGame = [teamA,teamB]; // two teams play the early game
        this.lateGame = [teamC, teamD]; // two teams play the late game
        this.earlyGamePlayers = teamA.teamRoster.concat(teamB.teamRoster); // array of players and subs for early game
        this.lateGamePlayers = teamC.teamRoster.concat(teamD.teamRoster); // array of players and subs for the late game
        this.leaguePlayers = this.earlyGamePlayers.concat(this.lateGamePlayers); // array of all the players in the league
        this.teams = [teamA, teamB, teamC, teamD]; // all the teams in the league
        this.selectedTeam = null; // no team selectected when object created
    }

    showMainMenuOptions() {
        return prompt(`MAIN MENU
            This week's early game: Team A vs Team B
            This week's late game: Team C vs Team D
            ----------
            0) Exit
            1) View a team roster
            2) Add a New Player to a Team
            3) Not Avail: Assign an Existing Player to a team
            4) See all league players
            `);
    }

    start(){
        let selection = this.showMainMenuOptions();

        while (selection !== 0) {
            switch (selection) {
                case '1':
                    this.showRoster();
                    break;
                case '2': 
                    this.addPlayer();
                    break;
                case '3':
                    this.assignPlayer();
                    break;
                case '4':
                    this.showLeaguePlayers();
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
    }

    showRoster() {
        let index = prompt(this.showTeams() + " \n" + "-----------\n" + "Enter NUMBER of team to view: "); // select a team

        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            alert (this.showPlayers(this.selectedTeam.teamRoster));
        } else {
            alert ('valid team number not selected.'); // selection not one of the teams
        }
    }


    addPlayer () {
        let name = prompt("Player's Name: "); // prompt for new player info
        let phone = prompt(" Player's Phone: ");
        let position = prompt("Player's Position: ");
        
        let newPlayer = new Player(name, phone, position); // create new player
        
        let index = prompt(`${this.leaguePlayers.length}: Player ${newPlayer.name},
            ${newPlayer.phone}, ${newPlayer.position}, has been created in the system.
            ${this.showTeams()}
            -------
            Select team for this player: `); // ask for team to add player to
        if (index > -1 && index < this.teams.length) {
            this.teams[index].addPlayer(newPlayer); // add player to team
            alert(this.showPlayers(this.teams[index].teamRoster)); // show added player
            return this.teams[index].teamRoster;
        }
        this.leaguePlayers.push(newPlayer); // add new player to league roster
        }
/*
    assignPlayer() {
        let playerToAssign = prompt(this.showPlayers(this.leaguePlayers) + "\n" + "------------\n" + "Select NUMBER of Player to Assign: ");
        if (playerToAssign > -1 && playerToAssign < this.leaguePlayers) {
            this.selectedTeam = prompt(`${this.showTeams()}
            -------
            Select team for this player: `);
        } else {
            alert ("Error; You must choose a different player. Back to Main Menu.");
        }
        this.selectedTeam.teamRoster.addPlayer(playerToAssign);
        alert(`${playerToAssign} has been added to ${this.selectedTeam}.`)
    }
*/
    
    showPlayers (playerArray) {
        let rosterString = ""
        for (let i = 0; i < playerArray.length; i++) {
            rosterString += i + ") " + playerArray[i].name + ", " + playerArray[i].position + "\n";
        }
        return rosterString;
    }

    showTeams () {
        let teamString = (`
            0) Team A
            1) Team B
            2) Team C
            3) Team D`);
        return teamString;
    }

    showLeaguePlayers () {
        alert(this.showPlayers(this.leaguePlayers));
    }
}

//Testing Team and Player classes- create and display players' info
/*
let player1 = new Player ("Mike", "505-259-9004", "Defense");
let player2 = new Player ("Zach", "505-505-5050", "Forward");
let player3 = new Player ("Seth", "505-555-5555", "Goalie");
let teamTest = new Team("Test Team");
teamTest.addPlayer(player1);
teamTest.addPlayer(player2);
teamTest.addPlayer(player3);
console.log(teamTest);
console.log(teamTest.teamRoster[2].name); //expect "Seth"
console.log(teamTest.teamRoster[0].position); //expect "Defense"
console.log(teamTest.teamRoster[1].phone); //expect "505-505-5050"
*/
//finished Testing Team and Player classes



// SET UP
// create the league players
let initLeaguePlayers = [];
for (let i = 0; i < 4; i++) { //four teams
    for (let f = 0; f < 3; f++) { //three forwards per team
        let forward = new Player(
            "Forward" + i + f,
            "505-555-50" + i + f,
            "Forward");
        initLeaguePlayers.push(forward);
    }
    for (let d = 0; d < 2; d++) { //two defensemen per team
        let defense = new Player(
            "Defense" + i + d,
            "505-555-51" + i + d,
            "Defense");
        initLeaguePlayers.push(defense);
    }
    for (let g = 0; g < 1; g++) { //one goalie per team
        let goalie = new Player(
            "Goalie" + i + g,
            "505-555-52" + i + g,
            "Goalie");
        initLeaguePlayers.push(goalie);
    }

}
//Check the leaguePlayers array
/*
console.log(leaguePlayers[12].name); // expect "Forward20"
console.log(leaguePlayers[5].position); // expect "Goalie"
console.log(leaguePlayers[22].phone); // expect "505-555-5131"
console.log(leaguePlayers.length); // expect 24
*/

// Assign initial teams; this men's league has four teams
// create four team objects and assign players fron the leaguePlayers array, then check each

let teamA = new Team('Team A');
for (let i = 0; i < 6; i++) {
    teamA.addPlayer(initLeaguePlayers[i]);
}
/*
console.log(`${teamA.teamName}`); // expect Team A
console.log(`${teamA.teamRoster[3].name}`); // expect Defense00
console.log(`${teamA.teamRoster.length}`); // expect 6
*/

let teamB = new Team("Team B");
for (let i = 0; i < 6; i++) {
    teamB.addPlayer(initLeaguePlayers[i+6]);
}
/*
console.log(`${teamB.teamName}`); // expect Team B
console.log(`${teamB.teamRoster[3].name}`); // expect Defense10
console.log(`${teamB.teamRoster[5].position}`); // expect Goalie
console.log(`${teamB.teamRoster[2].phone}`) // expect 505-555-5012
*/

let teamC = new Team("Team C");
for (let i = 0; i < 6; i++) {
    teamC.addPlayer(initLeaguePlayers[i+12]);
}
/*
console.log(`${teamC.teamName}`); // expect Team B
console.log(`${teamC.teamRoster[3].name}`); // expect Defense20
console.log(`${teamC.teamRoster[5].position}`); // expect Goalie
console.log(`${teamC.teamRoster[2].phone}`) // expect 505-555-5022
*/

let teamD = new Team("Team D");
for (let i = 0; i < 6; i++) {
    teamD.addPlayer(initLeaguePlayers[i+18]);
}
/*
console.log(`${teamD.teamName}`); // expect Team B
console.log(`${teamD.teamRoster[3].name}`); // expect Defense20
console.log(`${teamD.teamRoster[5].position}`); // expect Goalie
console.log(`${teamD.teamRoster[2].phone}`) // expect 505-555-5022
*/


let menu = new Menu(teamA, teamB, teamC, teamD);
menu.start();
