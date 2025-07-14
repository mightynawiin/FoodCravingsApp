 function mi2(v){ // Decrease
          let element = document.getElementById(v);
          if (!element) return; 
          let currentValue = parseInt(element.innerText);
          if(isNaN(currentValue)) currentValue = 0;
          if(currentValue > 0){
            element.innerText = currentValue - 1;
          }
        }
       function mi(v) {
    let element = document.getElementById(v);
    if (!element) return; 
    let currentValue = parseInt(element.innerText);
    if (isNaN(currentValue)) currentValue = 0; 

    element.innerText = currentValue + 1;
}
