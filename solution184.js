// Two fighters, one winner

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

function declareWinner(fighter1, fighter2, firstAttacker) {
    console.log(`first fighter: ${fighter1}, second fighter: ${fighter2}, first Atacker: ${firstAttacker}`)
    
    let f1 = fighter1.name
    let f2 = fighter2.name
    
    let f1Health = fighter1.health
    let f2Health = fighter2.health
    
    let f1Damage = fighter1.damagePerAttack
    let f2Damage = fighter2.damagePerAttack
    
    while (f1Health > 0 && f2Health > 0){
      if (firstAttacker == f1){
        f2Health -= f1Damage
        if (f2Health < 1){
          return f1
        }
        f1Health -= f2Damage
        if (f1Health < 1){
          return f2
        }
      } 
      else {
        f1Health -= f2Damage
        if (f1Health < 1) {
          return f2
        }
        f2Health -= f1Damage
        if (f2Health < 1) {
          return f1
        }
      }
      
    }
  }