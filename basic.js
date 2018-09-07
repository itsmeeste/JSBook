
function HelloWorld()
{
    alert("Hello World");
}

var hello = "Hello World!!!!";


function ShowAlert()
{
    alert(hello);
}

function ShowConsole()
{
    console.log(hello);
}

function ShowDocument()
{
    document.write(hello);
}

function ShowSquare(number)
{
    document.write(number * number);
}

function SumNumbers(num1,num2,num3)
{
    document.write(num1+num2+num3);
}


// Variables 2
var person = {name: "stephen",age: 24,occupation:"Something"};

function ChangePerson()
{
    console.log("Name : " + person.name + ", Age: ", + person.age + ", Occupation: " + person.occupation );

    // Change the value
    person.name = "Some other name";
    console.log("Name : " + person.name + ", Age: ", + person.age + ", Occupation: " + person.occupation );

}


function ButtonClick()
{
    person.age = person.age + 1;
    console.log("Name : " + person.name + ", Age: ", + person.age + ", Occupation: " + person.occupation );
}

function SubmitPerson()
{
    if(document.getElementById("age").value >=20 && document.getElementById("age").value >=20 <= 40)
    {
        alert("True");
    }
    else
        {
            alert("false");
        }

    var p = {name:document.getElementById("name").value,age: document.getElementById("age").value, occupation:document.getElementById("occ").value};
     console.log("Name : " + p.name + ", Age: ", + p.age + ", Occupation: " + p.occupation );
}


function ConvertString()
{
    var input  = document.getElementById("change").value;
    var input = input.toUpperCase();
    document.getElementById("change").value = input;
}
function ConCatString(str,num)
{
    var output = str + num;
    console.log(output);
}

var stringArray= ["something1","something2","something3"];
function AddToArray()
{
    stringArray.push("Something4");
    stringArray.pop();
    for(i = 0; i < stringArray.length;i++)
    {
        console.log(stringArray[i]);
    }
}

function Iteration(num)
{
    for(i = 1; i <= num;i++)
    {
        if(i %2 ==0)
            console.log("Current iteration: " + i);
    }
}

function FizzBuzz(maxNum,fizz,buzz)
{
    for(i ==0; i < maxNum;i++)
    {
        if(i %3 ==0 && i % 5==0)
        {
            console.log("FIZZBUZZ, " + i);
        }
        else if(i %3 == 0)
        {
            console.log(fizz +  " " +i);
        }
        else if(i % 5 ==0)
        {
            console.log(buzz +  " " +i);
        }
    }
}

function While1(input)
{
    var output = input;
    while(output > 1)
    {
        
        if(output % 3 ==0)
        {
            console.log(output + "/" + 3);
            output = output / 3;
        }
        else if((output + 1) % 3 ==0)
        {
            console.log(output + " + 1 " + "/" + 3);
            output = (output+1) / 3;
        }
        else if((output - 1) % 3 ==0)
        {
            console.log(output + " - 1 "+ "/" + 3);
            output = (output-1) / 3;
        }
    }
}

function String4(input)
{
    var itr =0;
    var total = 0;
    for(i =0;i<input.length;i++)
    {
        for(j =0;j < input.length;j++)
        {
            if(j < i)
                continue;
            if(itr ==3)
            {
                total++;
                itr =0;
            }
            if(input.charAt(i) == input.charAt(j))
            {
                itr++;
            }
            else
            {
                itr = 0;
            }
        }
    }
    console.log("Number of Triples: " + total);
}

function DomCreateParagraph()
{

    var para = document.createElement("P");
    var text = document.createTextNode("something to put in here");
    para.appendChild(text);
    document.body.appendChild(para);
}


// function ReadingJSONFile()
// {
//     var input = document.getElementById("kingInput").value;
//     //var resultsURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
//     var resultsURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
//     var request = new XMLHttpRequest();
//     request.open('GET',resultsURL);
//     request.responseURL = "JSON";
//     request.send();

//     // now get the response
//     request.onload = function()
//     {
//         var s = request.response;
//         s = JSON.parse(s);
//         //console.log(s);
//         //console.log(s.squadName);
//         for(i = 0; i < s.length;i++)
//         {
//             if(s[i].hse == input)
//             {
//                 console.log(s[i]);
//             }
            
//         }
        
//     }
// }
function ReadingJSONFile()
{
    var input = document.getElementById("kingInput").value;
    //var resultsURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    var resultsURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
    var request = new XMLHttpRequest();
    request.open('GET',resultsURL);
    request.responseURL = "JSON";
    request.send();

    // now get the response
    request.onload = function()
    {
        var s = request.response;
        s = JSON.parse(s);
        console.log(s);
        //console.log(s.squadName);
        for(i = 0; i < s.length;i++)
        {
            // for(j = 0; j < s.members[i].powers.length;j++)
            //     {
            //         console.log(s.members[i].powers[j]);
            //     }
            
                if(input == s[i].nm)
                {
                    console.log(s[i].nm +", " +  s[i].cty + ", " + s[i].hse, ", " + s[i].yrs);
                }   
        }
        
    }
}
// function ReadingJSONFile()
// {
//     var input = document.getElementById("kingInput").value;
//     var resultsURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
//     //var resultsURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
//     var request = new XMLHttpRequest();
//     request.open('GET',resultsURL);
//     request.responseURL = "JSON";
//     request.send();

//     // now get the response
//     request.onload = function()
//     {
//         var s = request.response;
//         s = JSON.parse(s);
//         //console.log(s);
//         //console.log(s.squadName);
//         //console.log(s.members);
//         for(i = 0; i < s.members.length;i++)
//         {
//             //if(s[i].hse == input)
//             //{
//                 //console.log(s.members[i].name);
//                 for(j =0; j < s.members[i].powers.length;j++)
//                 {
//                     console.log(s.members[i].powers[j]);
//                 }
//             //}
            
//         }
        
//     }
// }

function Rect(input)
{
    var length = input.length;
    
    for(i =0; i < length;i++)
    {
        for(j =0; j < length;j++)
        {
            
            if(i ==0)
            {
                document.write(input.charAt(j));
            }
            else if(i == length -1)
            {
                document.write(reverse(input).charAt(j));
            }
            else if(j==0)
            {
                document.write(input.charAt(i));
            }
            else if(j==length-1)
            {
                document.write(reverse(input).charAt(i));
            }
            else
                document.write("*");
        }
        document.write("" + "<br>");

    }
    

}

function reverse(input)
{
    var split = input.split("");
    var rev = split.reverse();
    var join = rev.join("");
    return join;
}



HelloWorld();


// Basic 2
//ShowAlert();
//ShowConsole();
//ShowDocument();

// Function 1
//ShowSquare(2);
// Functions 2
//SumNumbers(1,2,3);

// variables 2
ChangePerson();
ConCatString("hello",34);
AddToArray();
//Iteration(10);
//FizzBuzz(200,"fizz","buzz");
//While1(30);
//String4("abcXXXabc");
String4("xxxabyyyycd");
//domCreateParagraph();
//ReadingJSONFile();
Rect("REKT");

