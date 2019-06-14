/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  

//  === GameObject ===

class GameObject {
  constructor(GameObjAttr) {
    this.createdAt = GameObjAttr.createdAt;
    this.dimensions = GameObjAttr.dimensions;
    this.name = GameObjAttr.name;
  }

destroy() {
  console.log(`${this.name} was removed from the game.`);
    }
  }

  // * createdAt
  // * name
  // * dimensions (These represent the character's size in the video game)
  // * 
  // //=== CharacterStats ===
  
  class CharacterStats extends GameObject {
   constructor(charStatsAttr){
     super(charStatsAttr)
     this.healthPoints = charStatsAttr.healthPoints;
   }
    
    takeDamage() {
        console.log(`${this.name} took damage.`)
    }          
         
     destroy(){
      return `${super.destroy()}`
     }       
   }
    


  
  
  // * healthPoints
  // * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  // * should inherit destroy() from GameObject's prototype

  //=== Humanoid (Having an appearance or character resembling that of a human.) ===
  
  class Humanoid extends CharacterStats {
    constructor(HumanoidAttr) {
      super(HumanoidAttr);
      this.team = HumanoidAttr.team;
      this.weapons = HumanoidAttr.weapons;
      this.language = HumanoidAttr.language;
    }
  
    greet() {
      console.log(`${this.name} offers a greeting in ${this.language}.`);
    }
  
    takeDamage() {
      return `${super.takeDamage()}`;
    }
  
    destroy() {
      return `${super.destroy()}`;
    }
  }      
  


    
  
  



  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!