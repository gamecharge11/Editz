const img = document.getElementById("img");
window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('#img');
            img.src = URL.createObjectURL(this.files[0]);
            img.onload = imageIsLoaded;
            document.getElementById("fl-img").style.display="none";
        }
    });
});

function sv () {
    document.getElementById("img").style.width=document.getElementById("width").value + "px";
    document.getElementById("img").style.height=document.getElementById("height").value + "px";
}

function strt () {
    document.getElementById("img").style.display="flex";
    document.getElementById("fl").style.display="none";
}
function grayscale() {
    document.getElementById("img").style.filter = "grayscale" + "(" + document.getElementById("g").value + "%" + ")";
  }
  function contrast() {
    document.getElementById("img").style.filter = "contrast" + "(" + document.getElementById("c").value + "%" + ")";
  }
  function brightness() {
    document.getElementById("img").style.filter = "brightness" + "(" + document.getElementById("b").value + "%" + ")";
  }
  var grl = "false";
function gr () {

    document.getElementById("img").style.filter = "grayscale" + "(" + "100" + "%" + ")";



      
    
  
}
function groff () {

    document.getElementById("img").style.filter = "grayscale" + "(" + document.getElementById("g").value + "%" + ")";


      
    
  
}
function vr () {
    document.getElementById("img").style.width="525px";
    document.getElementById("img").style.height="600px";
}
function hr () {
    document.getElementById("img").style.width="1350px";
    document.getElementById("img").style.height="650px";
}


