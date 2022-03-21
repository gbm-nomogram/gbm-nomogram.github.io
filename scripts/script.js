


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

function calculate_rt(){


    var age_pt = 0;
    var kps_pt = 0;
    var resection_pt = 0;
    var chemo_pt = 0;
    var frac_pt = 0;
    var total_pt = 0;
    var prob_12 = [];
    var prob_6 = [];

    
    let age = document.getElementById("age_rt").value;

        if (age < 70){
           age_pt = 0;
        }
        else if (age < 80) {
            age_pt = 5;
        }
        else {
            age_pt = 16
        }

    let kps = document.getElementById("kps_rt").value;

        if (kps == "2"){
            kps_pt = 12;
          }
        else if  (kps =="1"){
            kps_pt = 24;
          }

    let resection = document.getElementById("resection_rt").value;

        if (resection == "biopsy"){
            resection_pt = 31;
          }
        else if (resection == "gt"){
            resection_pt = 7;
          }
        else {
            resection_pt = 0;
          }    

    let chemo = document.getElementById("chemotherapy_rt").value;

        if (chemo == "no"){
            chemo_pt = 100;
          }


    let frac = document.getElementById("frac_rt").value;

        if (frac == "60/30"){
            frac_pt = 12;
          }
        else if (frac == "30/10"){
            frac_pt = 33;
          }
        


        total_pt = age_pt + kps_pt + resection_pt + chemo_pt + frac_pt;

        if (total_pt < 15){
            prob_12 = [0.6,1];
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


  
  const p6 = '6 Month Survival Probabiilty: ' + prob_6[0]*100+'%' + ' to ' + prob_6[1]*100 +'%';

  const p12 = '12 Month Survival Probabiilty: ' + prob_12[0]*100+'%' + ' to ' + prob_12[1]*100+'%';

  document.getElementById("prob6_rt").innerHTML = p6;

  document.getElementById("prob12_rt").innerHTML = p12;

  let x = document.getElementById("results_rt").style.display;
  
  document.getElementById("results_rt").style.display = "block";

}


function calculate_all(){


    var age_pt = 0;
    var kps_pt = 0;
    var resection_pt = 0;
    var chemo_pt = 0;
    var frac_pt = 0;
    var total_pt = 0;
    var prob_12 = [];
    var prob_6 = [];



    let kps = document.getElementById("kps").value;

        if (kps == "2"){
            kps_pt = 10;
          }
        else if  (kps =="1"){
            kps_pt = 20;
          }

    let resection = document.getElementById("resection").value;

  
    let chemo = document.getElementById("chemotherapy").value;

        if (chemo == "no"){
            chemo_pt = 52;
          }


    let frac = document.getElementById("frac").value;


        
    let age = document.getElementById("age_all").value;

        if (resection == "biopsy" && frac == "no"){
          if (age < 70){
            age_pt = 99;
          }
          else if (age < 80){
            age_pt = 100;
          }
          else{
            age_pt = 64;
          }

        }


        if (resection == "gt" && frac == "no"){
          if (age < 70){
            age_pt = 35;
          }
          else if (age < 80){
            age_pt = 36;
          }
          else{
            age_pt = 64;
          }

        }

        if (resection == "st" && frac == "no"){
          if (age < 70){
            age_pt = 59;
          }
          else if (age < 80){
            age_pt = 60;
          }
          else{
            age_pt = 24;
          }

        }

        if (resection == "biopsy" && frac == "yes"){
          if (age < 70){
            age_pt = 32;
          }
          else if (age < 80){
            age_pt = 30;
          }
          else{
            age_pt = 37;
          }

        }

        if (resection == "gt" && frac == "yes"){
          if (age < 70){
            age_pt = 14;
          }
          else if (age < 80){
            age_pt = 12;
          }
          else{
            age_pt = 19;
          }

        }

        if (resection == "st" && frac == "yes"){
          if (age < 70){
            age_pt = 10;
          }
          else if (age < 80){
            age_pt = 8;
          }
          else{
            age_pt = 15;
          }

        }

        total_pt = age_pt + kps_pt + resection_pt + chemo_pt + frac_pt;

        if (total_pt < 6){
            prob_12 = [0.6,1];
          }
        else if (total_pt < 21){
            prob_12 = [0.5,0.6];
          }
        else if (total_pt < 33){
            prob_12 = [0.4,0.5];
          }
        else if  (total_pt <46){
            prob_12 = [0.3, 0.4];
          }
        else if (total_pt < 59){
            prob_12 = [0.2, 0.3];
          }
        else if (total_pt < 75){
            prob_12 = [0.1, 0.2];
          }
        else if (total_pt > 74){
            prob_12 = [0, 0.1];
          }
        else {
            prob_12 = [0, 0];
          }


        if (total_pt < 21){
            prob_6 = [0.8,1];
          }
        else if (total_pt < 43){
            prob_6 = [0.7,0.8];
          }
        else if (total_pt < 59){
            prob_6 = [0.6, 0.7];
          }
        else if (total_pt < 73){
            prob_6 = [0.5, 0.6];
          }
        else if (total_pt < 86){
            prob_6 = [0.4, 0.5];
          }
        else if (total_pt < 98){
            prob_6 = [0.3, 0.4];
          }
        else if (total_pt < 111){
            prob_6 = [0.2, 0.3];
          }
        else if (total_pt < 127){
            prob_6 = [0.1, 0.2];
          }
        else {
            prob_6 = [0, 0.1];
          }


  
  const p6_all = '6 Month Survival Probability: ' + prob_6[0]*100+'%' + ' to ' + prob_6[1]*100+'%';

  const p12_all = '12 Month Survival Probability: ' + prob_12[0]*100+'%' + ' to ' + prob_12[1]*100+'%';

  document.getElementById("prob6_all").innerHTML = p6_all;

  document.getElementById("prob12_all").innerHTML = p12_all;

  let x = document.getElementById("results_all").style.display;
  
  document.getElementById("results_all").style.display = "block";


}
