//--------Variables and operators---------

/* part a) create two numerical variables and use the operator sum for save the value of the sum of both numbers on a 3rd 
variable.*/
var num1 = 405;
var num2 = 234;
var num3 = num1 + num2;
alert (num3);

// part b) create two string type variables and concatenate them saving the result on a 3rd variable.
var string1 = "Radium ";
var string2 = "Rocket.";
var string3 = string1 + string2;
alert (string3);

// part c) create two string type variables and sum the long of each variable saving the result of the sum on a 3rd variable.
var word1 = "Web";
var word2 = "Developer";
var totalLenght= word1.length + word2.length;
alert (totalLenght);

//--------Strings-----------

//part a) create a variable string type with at least 10 characters, and change the text into uppercase.
var string1 = "development";
string1= string1.toUpperCase();

//part b) create a string type variable with at least 10 characters and generate a new one with the first 5 characters from it.
var string1 = "development";
var string1Cutted= string1.substring(0,5);
alert (string1Cutted);

//part c) create a string type variable with at least 10 characters and generate a new one with the last 3 characters from it.
var string1 = "development";
var string1Cutted= string1.substring(string1.length-3,string1.length);
alert (string1Cutted);
alert (string1.length)

/*part d) create a string type variable with at least 10 characters and generate a new one with the first letter uppercased and the
 rest lowercased. Save the result in a new variable.*/
var string1 = "development";
var string1Merged = string1.substring(0,1).toUpperCase()+string1.substring(1).toLowerCase();
alert (string1Merged);

/*part e) create a string type variable with at least 10 characters and a blank space. Find the position of the first blank space
and save it on a new variable.*/
var string1 = "developme nt";
var string1BlankPos = string1.indexOf(" ");

/*part f) create a type string variable with at least 2 words long. Use the methods of the above exercises to generate
 a new string that have the first letter of both words uppercased and the rest on lowercase.*/
 var string1 = "jAvAsCriPt deveLopmEnt";
 var string1Modified= string1.substring(0,1).toUpperCase() +string1.substring(1,string1.indexOf(" ")).toLowerCase() +
  " " + string1.substring(string1.indexOf(" ")+1,string1.indexOf(" ")+2).toUpperCase() + string1.substring(string1.indexOf(" ")
  +2, string1.length).toLowerCase();
 alert (string1Modified);

 //----------Arrays----------

/* part a) given the next array, show in console the month 5 and 11.*/
var months = ["Enero","Febrero","Narzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];
console.log (months[4] +" and "+ months[10]);

/* part b) sort the array of months alphabetically and show in console.*/
var months = ["Enero","Febrero","Narzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];
console.log (months.sort());

/* part c) add an element at the beggining and the end of the array*/
var months = ["Enero","Febrero","Narzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];
months.unshift("Start of the Year");
months.push ("End of the Year");

/* part d) remove an element at the beggining and end of the array*/
var months = ["Enero","Febrero","Narzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
months.shift();
months.pop();

/* part e) invert the order of the array*/
var months = ["Enero","Febrero","Narzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
months.reverse();
console.log(months);

/* part f) Unite all the elements of the array in a single string where each month is separated by a hyphen */
var months = ["Enero","Febrero","Narzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
months = months.join("-");

/* part g) create a copy of the array of months that contain from Mayo to Noviembre*/
var months = ["Enero","Febrero","Narzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var monthsModified= months.slice(4,11);

//----------if else----------------

/* part a) create a random number between 0 and 1 using the function Math.random(), if the value is greater or equal than 0,5, 
show an alert with a message "Greater than 0,5", but an alert with a message "Lower than 0.5"  */
var randomNumber = Math.random();
console.log (randomNumber);
if (randomNumber>=0.5) {
    alert ("Greater than 0,5")
}   else {
    alert ("Lower than 0,5")
}

/* part b) Create an "Age" variable that contains an integer between 0 and 100 and displays the following alert messages:
"Bebé" if the age is less than 2 years
"Niño" if the age is between 2 and 12 years
"Adolescente" if the age is between 13 and 19 years
"Joven" if the age is between 20 and 30 years
"Adulto" between 31 and 60 years
“Adulto mayor” between 61 and 75 years
"Anciano" if older than 75 years*/

var randomNumber = Math.random();
var Age = Math.round(randomNumber * 100);
console.log(Age);
if ((Age < 2)) {
    alert ("Bebé")
} else if (Age<=12) {
    alert ("Niño")
} else if (Age<=19) {
    alert ("Adolescente")
} else if (Age<=30) {
    alert ("Joven")
} else if (Age<=60) {
    alert ("Adulto")
} else if (Age<=75) {
    alert ("Adulto mayor")
} else {
    alert ("Anciano")
}

//---------For-----------

/* part a)  create an array that contain five words and go over the array using a loop for of JavaScript to show an alert using
each words.*/

var sentence = ["enviorment","security","information","Cooking","manifest"];
for (var i = 0; i < sentence.length; i++) {
    alert (sentence [i]);
}

/* part b) To the previous array, convert the first letter of each word to uppercase and show an alert for each modified word. */

var phrase = ["enviorment","security","information","Cooking","manifest"];
for (var i = 0; i < phrase.length; i++) {
    phrase[i] = phrase[i].substring(0,1).toUpperCase()+ phrase[i].substring(1).toLowerCase();
    alert (phrase[i]);
}

/*part c) Create a variable called "sentence" that has an empty string, then to the array from point a) go through it with 
a for loop to save each word within the sentence variable. At the end show a single alert with the complete chain.*/

var phrase = ["enviorment","security","information","Cooking","manifest"];
var sentence;
for (var i = 0; i < phrase.length; i++) {
    if (i< phrase.length-1) {
    sentence += phrase[i]+" ";
    } else {
        sentence+= phrase [i];
    }
}
alert (sentence);

/* part d) 
Create an empty array and with a for loop of 10 repetitions, fill the array with the number of the repetition, that is, at the 
end of the execution of the for loop, there should be 10 elements within the array, from number 0 to number 9. 
Show by the browser console the to the final array*/

var phrase = ["enviorment","security","information","Cooking","manifest"];
var empty = [];
for (var i = 0; i<10; i++) {
    empty.push(i);
}
console.log (empty);

//----------Function------------

/* part a) Create a sum function that receives two numeric values ​​and returns the result. Execute the function and save the 
result in a variable, showing the value of said variable in the browser console.*/

function plus (num1,num2) {
    return num1 + num2;
}
var result = plus(78,5);
console.log (result);

/* part b) To the previous sum function, add a validation to control if any of the parameters is not a number, show an alert 
clarifying that one of the parameters has an error and return the NaN value as a result.*/

function plusCheck (num1,num2) {
    if (typeof (num1) =='number' && typeof (num2) =='number' ) {
        return num1 + num2;
        } else {
            alert ("One or more variables are not a number.");
            return "NaN";
        }
    }
var result = plusCheck(8,9);
console.log (result);

/* part c) Create a validate integer function that takes a number as a parameter and returns true if it is an integer.*/

function validateInteger (num) {
    if (num % 1 == 0){
    return true;
    } else {
        return false;
    }
}
var checking = validateInteger (5);
alert (checking);

/* part d) 
To the sum function of exercise 6b) add a call that validates that the numbers are integers. In case there are decimals,
 show an alert with the error and return the number converted to integer (rounded).*/

 function plusCheck (num1,num2) {
    var flag = 0;
    if (typeof (num1) =='number' && typeof (num2) =='number' ) {
        flag = 1;
        sum = num1 + num2;
        } else {            
            alert ("One or more variables are not a number.");
            return "NaN";
        }
    if (flag = 1) {
        if (sum % 1 !== 0) {
            alert ("One or more numbers have decimal.")
            return (Math.round (sum));
        } else {
            return (sum);
        }
    }
}
var result = plusCheck(8,9);
console.log (result);

/* part e) Convert the validation of exercise 6b) into a separate function and call it within the sum function, checking that
 everything continues to work the same.*/

function integerValidation (num1,num2) {
    if (typeof (num1) !=='number' || typeof (num2) !=='number') { 
        alert ("One or more variables are not a number.");
        return false;
    }
}
function plus (num1,num2) {
    if (integerValidation(num1,num2) !==false) {
        return num1 + num2;
    } else {
        return "NaN";
    }    
}
var check = plus (12,5);
alert (check);