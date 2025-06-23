/* SKILL UP application general scripts */

/* Displaying user image */ 
function displayUserImg(img) {
    if (img.style.scale == "5") {
      img.style.translate = "0 0";
      img.style.scale = "1";
    }
    else {
      img.style.translate = "-3vw 3vw";
      img.style.scale = "5";
    }
   
    /*
    img.style.width = "20vw";
    img.style.height = "auto"; 
    changedWidth = img.offsetWidth;
    if (changedWidth == initialWidth) {
      img.style.height = "60%";
      img.style.width = "auto";
    }
    */
}