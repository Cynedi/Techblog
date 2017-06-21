// //************Pop'up de confirmation de l'envoi quand on clique sur envoyer**************************//


  //document.getElementById("myBtn").addEventListener("click", function(){
  //     confirm ("Confirmer l'envoi?");
  // });



//***************affichage ALT image*********************************//

function on() {
    var x= document.getElementById("imgArticle").alt;
           document.getElementById("alt").innerHTML = x;
}

function off(){
         document.getElementById("alt").innerHTML = "";
}
//************Onglet interatif**********************//

var ct = document.getElementsByClassName("ct");

ct[0].style.display = "block";
ct[1].style.display = "none";
ct[2].style.display = "none";

function changeOnglet(index) {

for (var i= 0; i< ct.length; i++) {

  if (index === i) {
    ct[i].style.display = "block";
  }

  else {
    ct[i].style.display = "none";
  }
}
}
