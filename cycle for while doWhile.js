/* for(var i = 100; i > 5; i /=2) {
    console.log(i);
}
*/
// відрізняється виключно умовою запису циклів

/*
var j = 1000;
    while(j >= 100) {
    console.log(j);
    j -= 100;

}
 */
/*
    var isHasCar = true;
        while(isHasCar == true) {

}
 */
// верхній цикл запусте безкінечний цикл,
// так як іс хез кар постйно буде - тру


/*
// У цьому циклі,ітерація в любому разі виповнеться сопчатку,
а тільки потім почне виконуватися цикл
 */
/*
var x = 100;
    do {
    console.log(x);
}
    while (x < 50);
/*


 */

//Дотакткові оператори які використовуються в середині циклів
/*
for(var i = 10; i <= 20; i += 2) {
    if(i > 15)
        break;
    console.log(i);
}
*/
/*
for(var i = 10; i <= 20; i++) {
    if(i % 2 == 0)
        continue;
    console.log(i);
}

 */


// Як перебрати весь МАСИВ!!!

var arr = [5,7, 3,8,9, "stroka"]
for(var i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    console.log("Елемент" + (i + 1) + ": " + arr[i]);
}

