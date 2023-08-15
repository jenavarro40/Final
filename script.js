var now = new Date();
console.log(now)
var mes = now.getMonth(); 
var ano = now.getFullYear();
var day=now.getDay();
var hora=now.getHours();
var min=now.getMinutes();
var seg=now.getSeconds();
var getval=1;


function time()
{
    setInterval('dateperyear()',1000);
}

function dateperyear()
{
    var now = new Date();
    console.log(now)
    var mes_string = now.getMonth()+1; 
    var ano = now.getFullYear();
    var day=now.getDate();
    var day_weeks=now.getDay();
    var hora=now.getHours();
    var min=now.getMinutes();
    var seg=now.getSeconds();
    switch (day_weeks)
    {
        case 2: day_week="Monday";break;
        case 3: day_week="Tuesday";break;
        case 4: day_week="Wednesday";break;
        case 5: day_week="Thursday";break;
        case 6: day_week="Friday";break;
        case 7: day_week="Saturday";break;
        case 1: day_week="Sunday";break;
        
    }

    switch (mes_string)
    {
        case 1: mes="January";break;
        case 2: mes="February";break;
        case 3: mes="March";break;
        case 4: mes="April";break;
        case 5: mes="May";break;
        case 6: mes="Juny";break;
        case 7: mes="July";break;
        case 8: mes="August";break;
        case 9: mes="September";break;
        case 10: mes="October";break;
        case 11: mes="November";break;
        case 12: mes="December";break;
        
    }
  
    document.getElementById("month").innerHTML=mes;
    document.getElementById("day").innerHTML=day;
    document.getElementById("day_week").innerHTML=day_week;
    document.getElementById("year").innerHTML=ano;
    
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=seg;
    if(getval==0)
    {
        if(hora>12)
        {
            hora=hora-12
            document.getElementById("PM").innerHTML="PM"; 
        }
        else if (hora==0)
        {
            hora=12
            document.getElementById("PM").innerHTML="AM"; 

            
        }
        else if (hora<12) document.getElementById("PM").innerHTML="AM"; 
    }
    else document.getElementById("PM").innerHTML=" "; 
    document.getElementById("hours").innerHTML=hora;
}

function gettimeb()
{
    if(getval==1) getval=0;
    else getval=1;
}
