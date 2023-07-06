// A Strange Trip to the Market

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise. 

function isLockNessMonster(s) {
    // Convert the input string to lowercase for case-insensitive matching
   var lowerInput = s.toLowerCase();
 
   // Check if the input string contains any of the phrases
   var phrases = ["tree fiddy", "3.50", "three fifty"];
   for (var i = 0; i < phrases.length; i++) {
     if (lowerInput.includes(phrases[i])) {
       return true;
     }
   }
 
   return false;
 }