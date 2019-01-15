class Spaceship {

  constructor(name, crew) {
    this.name = name;
    this.crew = crew;
    this.phasers = 5;
    this.shields = 4;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    if(this.crew.length) {
       this.docked = false;
    } else {
      this.docked = true;
    };
    this.phasersCharge = 'uncharged';
    this.notifyCrew = this.notifyCrew();
  };

  notifyCrew() {
    this.crew.forEach(crewMember => (crewMember.currentShip = this));
  };

};
