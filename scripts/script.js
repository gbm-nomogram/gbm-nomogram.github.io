




function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function calculate(){


    var age_pt = 0;
    var kps_pt = 0;
    var resection_pt = 0;
    var chemo_pt = 0;
    var frac_pt = 0;
    var total_pt = 0;
    var prob_12 = [];
    var prob_6 = [];

    
    let age = document.getElementById("age").value;

        if (age > 69 && age < 80){
           age_pt = 5;
        }
        else {
            age_pt = 16;
        }

    let kps = document.getElementById("kps").value;

        if (kps == "2"){
            kps_pt = 12;
          }
        else if  (kps =="1"){
            kps_pt = 24;
          }

    let resection = document.getElementById("resection").value;

        if (resection == "biopsy"){
            resection_pt = 31;
          }
        else if (resection == "gt"){
            resection_pt = 7;
          }
        else {
            resection_pt = 0;
          }    

    let chemo = document.getElementById("chemotherapy").value;

        if (chemo == "no"){
            chemo_pt = 100;
          }

    let frac = document.getElementById("frac").value;

        if (frac == "60/30"){
            frac_pt = 12;
          }
        else if (frac == "30/10"){
            frac_pt = 33;
          }

        total_pt = age_pt + kps_pt + resection_pt + chemo_pt + frac_pt;

        if (total_pt < 15){
            prob_12 = [0.6,0.7];
          }
        else if (total_pt < 38){
            prob_12 = [0.5,0.6];
          }
        else if (total_pt < 58){
            prob_12 = [0.4,0.5];
          }
        else if  (total_pt <78){
            prob_12 = [0.3, 0.4];
          }
        else if (total_pt < 99){
            prob_12 = [0.2, 0.3];
          }
        else if (total_pt < 125){
            prob_12 = [0.1, 0.2];
          }
        else if (total_pt > 124){
            prob_12 = [0, 0.1];
          }
        else {
            prob_12 = [0, 0];
          }



        if (total_pt < 8){
            prob_6 = [0.9,1];
          }
        else if (total_pt < 62){
            prob_6 = [0.8,0.9];
          }
        else if (total_pt < 96){
            prob_6 = [0.7,0.8];
          }
        else if (total_pt <123){
            prob_6 = [0.6, 0.7];
          }
        else if (total_pt < 145){
            prob_6 = [0.5, 0.6];
          }
        else if (total_pt < 165){
            prob_6 = [0.4, 0.5];
          }
        else if (total_pt > 185){
            prob_6 = [0.3, 0.4];
          }
        else{
            prob_6 = [0, 0.3];
          }
  
  const p6 = '6 Month Survival Probabiilty: ' + prob_6[0] + ' to ' + prob_6[1];

  const p12 = '12 Month Survival Probabiilty: ' + prob_12[0] + ' to ' + prob_12[1];

  document.getElementById("prob6").innerHTML = p6;

  document.getElementById("prob12").innerHTML = p12;

  let x = document.getElementById("results").style.display
  
  document.getElementById("results").style.display = "block";


}
