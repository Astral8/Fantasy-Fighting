var mainPlayerHealth = 100;
var opponentHealth = 100;
playerMove = 0;

opponentAttacks = [callandor, saidin, swing, ashaman];
// Rand's Moves

mainPlayerAttacks = [sword, wolfAttack, punch, shootArrow];
// Jon's Moves

function compFantasy() { //switch player
  if(playerMove == 1 && opponentHealth != 0) {
  var move = Math.floor((Math.random() * 4) + 1);
    opponentAttacks[move]();
    playerMove = 0;
  }
}


function sword() {
  if(playerMove == 0 && mainPlayerHealth != 0) {

      document.getElementById('message').innerHTML = " Jon swung at Rand with his blade ";
        opponentHealth = opponentHealth - 30;
      if(opponentHealth < 0){ opponentHealth = 0}
        document.getElementById('opponentHP').innerHTML = opponentHealth;
      if(opponentHealth == 0){
        document.getElementById('message').innerHTML = " Rand died! "
      }
    playerMove = 1;
}
}

function wolfAttack() {
  if(playerMove == 0 && mainPlayerHealth != 0) {
    document.getElementById('message').innerHTML = " Jon called his wolf! ";
        opponentHealth = opponentHealth - 20;
    if(opponentHealth < 0 ) { opponentHealth = 0}
    document.getElementById('opponentHP').innerHTML = opponentHealth;
    if(opponentHealth == 0){
      document.getElementById('message').innerHTML = " Rand died! "
    }
  playerMove = 1;
}
}

function punch() {
  if(playerMove == 0 && mainPlayerHealth != 0) {
    document.getElementById('message').innerHTML = " Jon swung at Rand! ";
        opponentHealth = opponentHealth - 20;
    if(opponentHealth < 0 ) { opponentHealth = 0}
    document.getElementById('opponentHP').innerHTML = opponentHealth;
    if(opponentHealth == 0){
      document.getElementById('message').innerHTML = " Rand fainted! "
    }
  playerMove = 1;
}
}

function shootArrow() {
  if(playerMove == 0 && mainPlayerHealth != 0) {
    document.getElementById('message').innerHTML = " Jon shot an Arrow! ";
        opponentHealth = opponentHealth - 5;
    if(opponentHealth < 0 ) { opponentHealth = 0}
    document.getElementById('opponentHP').innerHTML = opponentHealth;
    if(opponentHealth == 0){
      document.getElementById('message').innerHTML = " Rand died! "
    }
  playerMove = 1;
}
}















function callandor() {
 if (playerMove == 1 && mainPlayerHealth != 0) {
 document.getElementById('message').innerHTML = " Rand used his Callandor on Jon! ";
 mainPlayerHealth = mainPlayerHealth - 10



 if(mainPlayerHealth < 0){
   mainPlayerHealth = 0}
   document.getElementById('mainPlayerHP').innerHTML = mainPlayerHealth;
 if(mainPlayerHealth == 0){
   document.getElementById('message').innerHTML = " Jon Died! "
 }

}
}


function saidin() {
  if (playerMove == 1 && mainPlayerHealth != 0) {
  document.getElementById('message').innerHTML = " Rand used his Saidin Power on Jon! ";
  mainPlayerHealth = mainPlayerHealth - 10



  if(mainPlayerHealth < 0){
    mainPlayerHealth = 0}
    document.getElementById('mainPlayerHP').innerHTML = mainPlayerHealth;
  if(mainPlayerHealth == 0){
    document.getElementById('message').innerHTML = " Jon Died! "
  }

 }
 }

function swing() {
  if (playerMove == 1 && mainPlayerHealth != 0) {
  document.getElementById('message').innerHTML = " Rand swung at Jon! ";
  mainPlayerHealth = mainPlayerHealth - 10



  if(mainPlayerHealth < 0){
    mainPlayerHealth = 0}
    document.getElementById('mainPlayerHP').innerHTML = mainPlayerHealth;
  if(mainPlayerHealth == 0){
    document.getElementById('message').innerHTML = " Jon Died! "
  }

 }
 }

function ashaman() {
  if (playerMove == 1 && mainPlayerHealth != 0) {
  document.getElementById('message').innerHTML = " Rand called his Asha'man on Jon! ";
  mainPlayerHealth = mainPlayerHealth - 10



  if(mainPlayerHealth < 0){
    mainPlayerHealth = 0}
    document.getElementById('mainPlayerHP').innerHTML = mainPlayerHealth;
  if(mainPlayerHealth == 0){
    document.getElementById('message').innerHTML = " Jon Died! "
  }

 }
 }
