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

class Player {
    constructor (name, phone, position) {
        this.name = name;
        this.phone = phone;
        this.position = position;
    }
    
    addPlayer(){ //adds a player to the league
        this.name = prompt('Player Name: ');
        this.phone = prompt('Phone number: ');
        this.position = prompt('Position: ');
        return [this.name, this.phone, this.position];
    }

    display() { //displays player info
        return `${this.name}, ${this.phone}, plays ${this.position}.`
    }
}


class Team {
    constructor (teamName) {
        this.teamName = teamName;
    }
    
    createTeam (teamName) { //names team, creates the team array
        this.teamName = teamName;
        this.teamRoster = [];
        // doesn't return anything yet
    }

    addPlayer (player){
        if (player instanceof Player) {
            this.teamRoster.push(player);
        } else {
            throw new Error(`Player must be in the League.`);
        }
    }

    displayNoPlayers (){
        return `${this.teamName} has ${this.teamName.length} players.`
    }
}


class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection !== 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4': 
                    this.displayAllTeams();
                    break;
                default:
                    selection = 0;

            }
            selection = this.showMainMenuOptions();
        }
        alert('Good-bye');
    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create new team
            2) View a team
            3) Delete a team
            4) Display all teams
            `);
    }

    showTeamMenuOptions(teamInfo){
        return prompt(`
            0) Go to previous menu
            1) Add a player
            2) Delete a player
            -------------------
            ${teamInfo}`);
    }

    createTeam() {
        let teamName = prompt('Enter Name of New Team: ');
        this.teams.push(new Team(teamName));
    }

    viewTeam () {
        let index = prompt('Enter number of team to view: ');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = ("Team Name: " + this.selectedTeam + "\n");

            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                roster += i + ") " + this.selectedTeam.players[i].name + ", " + this.selectedTeam.players[i].position + "\n";
            }
        let selection = this.showTeamMenuOptions(description);
        switch (selection) {
            case '1':
                this.createPlayer();
                break;
            case '2':
                this.deletePlayer();
                break;
        }
        }
    }


    deleteTeam () {

    }

    displayAllTeams () {
        let teamString = "";
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ") " + this.teams[i].teamName + "\n";
        }
        alert(teamString);
    }
}

// Test Player class- create and display players
let player1 = new Player ("Mike", "505-259-9004", "Defense");
console.log (player1.display());

let player2 = new Player ("Zach", "505-505-5050", "Forward");
console.log (player2.display());

let player3 = new Player ("Seth", "505-555-5555", "Goalie");
console.log (player3.display());

let menu = new Menu();
menu.start();