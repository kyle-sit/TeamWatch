class Player {
    constructor(name, num, dob, position) {
        this.name = name;
        this.num = num;
        this.dob = dob;
        this.position = position;
        this.img;
        this.goals = 0;
        this.SoG = 0;
        this.PKs = 0;
        this.GP = 0;
        this.fouls = 0;
    }

    /*set name (name) {
        this.name = name;
    }

    set num (num) {
        this.num = num;
    }

    set dob (dob) {
        this.dob = dob;
    }

    set position (position) {
        this.position = position;
    }

    set img (img) {
        this.img = img;
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
    }*/
}

class Game {
    constructor(oppName, home, date, time, location, tscore, oscore) {
        this.oppName = oppName;
        this.home = home;
        this.date = date;
        this.time = time;
        this.location = location;
        this.tscore = tscore;
        this.oscore = oscore;
        this.win = false;
    }
     
    set oppName (oppName) {
        this.oppName = oppName;
    }    

    set home (home) {
        this.home = home;
    }

    set date (date) {
        this.date = date;
    }

    set time (time) {
        this.time = time;
    }

    set date (location) {
        this.location = location;
    }

    set tscore (tscore) {
        this.tscore = tscore;
    }

    set oscore (oscore) {
        this.oscore = oscore;
    }

    set win (win) {
        this.win = win;
    }
}
