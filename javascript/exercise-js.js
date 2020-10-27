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
 