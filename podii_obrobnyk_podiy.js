
var counter = 0;
function onClickButton(el) {
    counter++;
   el.innerHTML = "Ви нажали на кнопку" + ": " + counter;
   console.log(el.name);
}