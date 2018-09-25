document.write("You are trapped in a cave with 10% battery and very limited cell service. ");

var userChoice = prompt("Do you use/cell/wait for help/or/find a way out?");

if(userChoice =="cell") {
  document.write("<p class='choice'>You have chosen to use your phone. <p>Your phone has now died. Bad news.");
}

if(userChoice == "cell") {
  document.write("<p class='choice'>You now have no flashlight and no means of communication. <p>You have a panic attack.")
}

if(userChoice == "cell") {
  document.write("<p class= 'choice'>You become very dehydrated. <p>You die of dehydration after 4 days.")
}

if(userChoice == "wait for help") {
  document.write("<p class='choice'>You have been waiting for 24 hours now. <p>You are becoming quite hangry.")
}
 
if(userChoice == "wait for help") {
  document.write("<p class='choice'>You remember that you have not used your cell phone yet. <p>You get to make one phone call.")
}

userChoice = prompt(" Should you call Jimmy Johns/or/the police?")

if(userChoice == "Jimmy Johns") {
  document.write("<p class= 'choice'>You call Jimmy Johns for a #9 for delivery. <p>The order is place, but your phone dies.")
}

if(userChoice == "the police") {
  document.write("<p class='choice'>You call the police and they come and rescue you")
}
 
if(userChoice == "Jimmy Johns") {
  document.write("<p class= 'choice'>You continue to wait, the only person that can save you is the Jimmy Johns delivery guy. <p>You don't know if he is there or not because your phone is dead and now you are going into a hunger-diagnosed coma")
}

if(userChoice == "Jimmy Johns") {
  document.write("<p class='choice'>You eventually decease due to hunger.")
}

if(userChoice == "find a way out") {
  document.write("<p class='choice'>You come to a stop and have to choose between going left or going right.")
}

userChoice= prompt("Left or Right?")

if(userChoice == "Left") {
  document.write("<p class='choice'>you fall in a trap and are stuck for eternity")
}

if(userChoice == "Right") {
  document.write("<p class='choice'>YOU SEE THE LIGHT AND YOU ARE FREE!!!")
}