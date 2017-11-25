class Player {
    constructor(fName, lName, DOB, jerseyNumber, position) {
        this.fName = fName;
        this.lName = lName;
        this.DOB = DOB;
        this.jerseyNumber = jerseyNumber;
        this.position = position;
        this.goals = 0;
        this.SoG = 0;
        this.PKs = 0;
        this.GP = 0;
        this.fouls = 0;
    }

    set fName (fName) {
        this.fName = fName;
    }

    set lName (lName) {
        this.lName = lName;
    }

    set DOB (DOB) {
        this.DOB = DOB;
    }

    set jerseyNumber (jerseyNumber) {
        this.jerseyNumber = jerseyNumber;
    }

    set position (position) {
        this.position = position;
    }

    set goals (goals) {
        this.goals = goals;
    }

    set SoG (SoG) {
        this.SoG = SoG;
    }

    set PKs (PKs) {
        this.PKs = PKs;
    }

    set GP (GP) {
        this.GP = GP;
    }

    set fouls (fouls) {
        this.fouls = fouls;
    }
}

class Game {
    constructor(WoL, goalsFor, goalsAgainst, AoH, date) {
        this.WoL = WoL;
        this.goalsFor = goalsFor;
        this.goalsAgainst = goalsAgainst;
        this.AoH = AoH;
        this.date = date;
    }
     
    set WoL (WoL) {
        this.WoL = WoL;
    }    

    set goalsFor (goalsFor) {
        this.goalsFor = goalsFor;
    }

    set goalsAgainst (goalsAgainst) {
        this.goalsAgainst = goalsAgainst;
    }

    set AoH (AoH) {
        this.AoH = AoH;
    }

    set date (date) {
        this.date = date;
    }
}
