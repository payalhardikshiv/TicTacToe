
var cntclick = 0;

function  displayVal(id)
{
	
	cntclick ++;
	if(cntclick % 2 == 0)
	{
		document.getElementById("Navigate").innerHTML = "Second Player";
		document.getElementById(id).innerHTML = "0";
	    document.getElementById(id).value = "0";
	}
	else
	{
		document.getElementById("Navigate").innerHTML = "First Player";
		document.getElementById(id).innerHTML = "x";
	    document.getElementById(id).value = "x";
	}
	
getBtnValueByCell();
getBtnValueByRow();
chkValCross();

	
}
// get value by all cells value of each row
function getBtnValueByCell()
{
        var t = document.getElementById("tblgame");
		var trs = t.getElementsByTagName("tr");
		var tds = null;
		var buttons;
		var chkvalue = [];
		var reval = [];
		var comval;
		



		for (var i=0; i<trs.length; i++)
		{
			tds = trs[i].getElementsByTagName("td");
			for (var n=0; n<trs.length;n++)
			{
				buttons = tds[n].getElementsByTagName("button");
				for(var j=0; j<buttons.length;j++)
				{
				console.log(buttons[j].value);
					if(buttons[j].value != "Click Me")
					{
					chkvalue.push(buttons[j].value);
					}   
				}
				
				
		    }
			console.log(chkvalue);
			if(chkvalue.length > 0)
			{
				comval = chkvalue[0];
				reval = chkvalue.filter(function(val){return comval == val;});
				console.log(reval);
				if(reval.length == 3)
				{
					if(reval[0] == "x")
					{
						document.getElementById("Navigate").innerHTML = "player 1 has Won";
					}
					else
					{
						document.getElementById("Navigate").innerHTML = "player 2 has Won";
					}
					
					return true;
					
				}
				else
				{
					reval = [];
					chkvalue = [];
					comval = "";
				}
			}
			
		

    }
	
}


function getBtnValueByRow()
{
	
	    var tRow = document.getElementById("tblgame");
		var trsR = tRow.getElementsByTagName("tr");
		var tdsR = null;
		var buttonsR;
		var chkvalueR = [];
		var revalR = [];
		var comvalR;
		
		

for(var j=0; j < 3; j++)
{

		for (var i=0; i<trsR.length; i++)
		{
			
			tdsR = trsR[i].getElementsByTagName("td");
			buttonsR = tdsR[j].getElementsByTagName("button");
			console.log(buttonsR[0].value);
			 
		   if(document.getElementById(buttonsR[0].id).value != "Click Me")
			{
			chkvalueR.push(document.getElementById(buttonsR[0].id).value);
			}
          		
				
		
       }
	        console.log(chkvalueR);
			if(chkvalueR.length > 0)
			{
				comvalR = chkvalueR[0];
				revalR = chkvalueR.filter(function(val){return comvalR == val;});
				console.log(revalR);
				if(revalR.length == 3)
				{
					if(revalR[0] == "x")
					{
						document.getElementById("Navigate").innerHTML = "player 1 has Won";
					}
					else
					{
						document.getElementById("Navigate").innerHTML = "player 2 has Won";
					}
					
					return true;
					
				}
				else
				{
					revalR = [];
					chkvalueR = [];
					comvalR = "";
				
				}
			}
			
		

	
 }
	
}

function chkValCross()
{
	
	    var td00 = document.getElementById("btn00");
		var td11 = document.getElementById("btn11");
		var td22 = document.getElementById("btn22");
		var td02 = document.getElementById("btn02");
		var td20 = document.getElementById("btn20");
		var chkvalueCross= [];
		var chkreval = [];
		var chkcomval;
		var cntbtn = 0;
		
		
		//console.log(td00.value);
		//consoel.log(td11.value);
		
			
		if(td11.value != "Click Me" && td11.value == td00.value && td11.value == td22.value)
			{
			chkvalueCross.push(td11.value);
			chkvalueCross.push(td11.value);
			chkvalueCross.push(td11.value);
			}
		else if(td11.value != "Click Me" && td11.value == td02.value && td11.value == td20.value)
		{
			chkvalueCross.push(td11.value);
			chkvalueCross.push(td02.value);
			chkvalueCross.push(td20.value);
		}
          			
				
	console.log(chkvalueCross);	
	if(chkvalueCross.length > 0)
	{
		chkcomval = chkvalueCross[0];
		chkreval = chkvalueCross.filter(function(val){return chkcomval == val;});
		console.log(chkreval);
				if(chkreval.length == 3)
				{
					if(chkreval[0] == "x")
					{
						document.getElementById("Navigate").innerHTML = "player 1 has Won";
					}
					else
					{
						document.getElementById("Navigate").innerHTML = "player 2 has Won";
					}
					
					return true;
					
				}
				else
				{
					chkreval = [];
					chkValCross = [];
					chkcomval = "";
				
				}
	}
}
	