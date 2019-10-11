let ulCont = document.getElementById("nav-ul");
let liList = ulCont.getElementsByClassName("nav-item");

for ( let i = 0; i < liList.length; i++) {
        liList[i].addEventListener("click",  function() {
            // alert('working');
            let current = document.getElementsByClassName("active"); 
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
}