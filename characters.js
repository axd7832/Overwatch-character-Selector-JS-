
//This file will hold the arrays of the characters
var doc = document.getElementById("cont");
var roles = {};
roles["empty"] = ["Role?","-- Select an Option -- ","Attack","Defense","Tank","Support"];
//attack male or female
roles["Attack"] = ["Male or Female?","-- Select an Option -- ", "Attack: Male","Attack: Female"];
roles["Attack: Male"] = ["Weapon?","-- Select an Option -- ", "Attack: Male: Gun","Attack: Male: Shuriken"];
//Genji
roles["Attack: Male: Shuriken"] = ["Here's your hero!","Genji"];
roles["Attack: Male: Gun"] = ["What kind of gun?","-- Select an Option -- ", "Attack: Male: Gun: Assault Rifle","Attack: Male: Gun: Pistols", "Attack: Male: Gun: Shotguns"];
//Solider 76
roles["Attack: Male: Gun: Assault Rifle"] = ["Here's your hero!","Soldier 76"];
//McCree
roles["Attack: Male: Gun: Pistols"] = ["Here's your hero!","McCree"];
//Reaper
roles["Attack: Male: Gun: Shotguns"] = ["Here's your hero!","Reaper"];
//Females: All use guns
roles["Attack: Female"] = ["Weapon?","-- Select an Option -- ", "Attack: Female: Rocket Launcher","Attack: Female: Sub-Machine Gun","Attack: Female: Pistols"];
//Pharah
roles["Attack: Female: Rocket Launcher"]= ["Here's your hero!","Pharah"];
//Sombra
roles["Attack: Female: Sub-Machine Gun"]= ["Here's your hero!","Sombra"];
//Tracer
roles["Attack: Female: Pistols"]= ["Here's your hero!","Tracer"];

//Defense male or female
roles["Defense"]=["Male or Female or Robot?","-- Select an Option -- ", "Defense: Male","Defense: Female","Defense: Robot"];
//Bastion
roles["Defense: Robot"]=["Here's your hero!","Bastion"];
//Roles Male
roles["Defense: Male"]=["Weapon?","-- Select an Option -- ", "Defense: Male: Gun","Defense: Male: Bow"];
//Hanzo
roles["Defense: Male: Bow"]=["Here's your hero!","Hanzo"];
//Defense- Gun
roles["Defense: Male: Gun"]=["What kind of gun?","-- Select an Option -- ", "Defense: Male: Gun: Rivet Gun", "Defense: Male: Gun: Frag Launcher"];
//Torb
roles["Defense: Male: Gun: Rivet Gun"]=["Here's your hero!","Torbjorn"];
//Junkrat
roles["Defense: Male: Gun: Frag Launcher"]=["Here's your hero!","Junkrat"];
//Defense Female
roles["Defense: Female"]=["Weapon?","-- Select an Option -- ", "Defense: Female: Sniper","Defense: Female: Ice Blaster"];
//Widowmaker
roles["Defense: Female: Sniper"]=["Here's your hero!","Widowmaker"];
//Mei
roles["Defense: Female: Ice Blaster"]=["Here's your hero!","Mei"];

//Tank Heros
roles["Tank"] = ["Male or Female?","-- Select an Option -- ", "Tank: Male","Tank: Female"];
//Tank Male
roles["Tank: Male"]=["Weapon?","-- Select an Option -- ", "Tank: Male: Gun","Tank: Male: Rocket Hammer"];
//Reinhardt
roles["Tank: Male: Rocket Hammer"]=["Here's your hero!","Reinhardt"];
//Tank male gun
roles["Tank: Male: Gun"]=["What kind of gun?","-- Select an Option -- ", "Tank: Male: Gun: Scrap Gun","Tank: Male: Gun: Tesla Cannon"];
//Road Hog
roles["Tank: Male: Gun: Scrap Gun"]=["Here's your hero!","Roadhog"];
//Winston
roles["Tank: Male: Gun: Tesla Cannon"]=["Here's your hero!","Winston"];
//tank female: gun type?
roles["Tank: Female"]=["What type of gun?","-- Select an Option -- ", "Tank: Female: Particle Cannon","Tank: Female: Fusion Cannons"];
//Zarya
roles["Tank: Female: Particle Cannon"]=["Here's your hero!","Zarya"];
//D.va
roles["Tank: Female: Fusion Cannons"]=["Here's your hero!","DVA"];

//Support
roles["Support"] = ["Male or Female or Robot?","-- Select an Option -- ", "Support: Male","Support: Female","Support: Robot"];
//Lucio
roles["Support: Male"]=["Here's your hero!","Lucio"];
//Zenyatta
roles["Support: Robot"]=["Here's your hero!","Zenyatta"];
//Support Female
roles["Support: Female"]=["Weapon?","-- Select an Option -- ", "Support: Female: Biotic Rifle", "Support: Female: Photon Projector","Support: Female: Healing Staff"];
//Symmetra
roles["Support: Female: Photon Projector"]= ["Here's your hero!","Symmetra"];
//Mercy
roles["Support: Female: Healing Staff"]= ["Here's your hero!","Mercy"];
//Ana
roles["Support: Female: Biotic Rifle"]= ["Here's your hero!","Ana"];
//roles["-- Select an Option -- "]= ["Here's your hero!","Mercy"];

//ID Count for creating Elements
var idCount = 1;
	//console.log(document.getElementById("newSelect1"));
	function addOptions(arrayString){
		//array for arrayString
		var array = roles[arrayString];
		console.log("array: "+array);
		console.log("array: "+array[0]);
		//new Div
		var newDiv = document.createElement('div');
		newDiv.setAttribute('id','newDiv' + idCount);
		newDiv.setAttribute('class','center');
		//Add div to document
		doc.appendChild(newDiv);
		//New H2
		var newH2 = document.createElement('h2');
		var text = array[0];
		//Add text to h2
		var firstIndex = document.createTextNode(text);
		newH2.appendChild(firstIndex);
		document.getElementById('newDiv' + idCount).appendChild(newH2);
			//If Array length isnt 0
			if(array.length != 0){
				//Create a new form
				var newForm = document.createElement('form');
				newForm.setAttribute('id','newForm'+ idCount);
				document.getElementById('newDiv' + idCount).appendChild(newForm);``

				//new Select Statement
				var newSelect = document.createElement('select');
				newSelect.setAttribute('id','newSelect'+ idCount);
				//added onChange event
				document.getElementById('newForm' + idCount).appendChild(newSelect);
				console.log(newSelect);

				//Attach Event for IE
				if(document.attachEvent){
					newSelect.attachEvent("onchange",function(){
									//gets the div that the select is in
						console.log("Attach Event");
						var parentDiv = newSelect.parentNode.parentNode;
						console.log(parentDiv);
						console.log(parentDiv.parentNode.childNodes);
						while( parentDiv != parentDiv.parentNode.lastChild) {
							parentDiv.parentNode.removeChild(parentDiv.parentNode.lastChild);
							--idCount;
							console.log(idCount);
						}
						//create a new div + form
						if(parentDiv == parentDiv.parentNode.lastChild){
							console.log(" I am the last Child");
							addOptions(newSelect.options[newSelect.selectedIndex].text);
						}
					});

				}
				//addEventListener for Chrome
				else{
				newSelect.addEventListener("change",function(){
								//gets the div that the select is in
					console.log("selected: "+newSelect);
					console.log("Selected String: "+newSelect.options[newSelect.selectedIndex].text);
					console.log("selected parent: "+newSelect.parentNode.parentNode);
					console.log(newSelect.parentNode.parentNode);
					var parentDiv = newSelect.parentNode.parentNode;
					console.log(parentDiv);
					console.log(parentDiv.parentNode.childNodes);
					while( parentDiv != parentDiv.parentNode.lastChild) {
						parentDiv.parentNode.removeChild(parentDiv.parentNode.lastChild);
						--idCount;
						console.log(idCount);
					}
					//create a new div + form
					if(parentDiv == parentDiv.parentNode.lastChild){
						console.log(" I am the last Child");
						addOptions(newSelect.options[newSelect.selectedIndex].text);
					}
				});
			}
				//New Options
				for(var i=1; i<array.length;++i){
					var arrText = array[i]
					var arrTextNode = document.createTextNode(arrText);
					var option = document.createElement('option');
					option.setAttribute("id", "option"+i+"-"+idCount);
					option.text = arrText;
					//console.log(option);
					document.getElementById('newSelect'+idCount).appendChild(option);
					//Probably shouldn't be here VVVVVVVVVVVVVVVV
					if(array.length == 2){
						var newImg = document.createElement('img');
						var imgName = array[1];
						console.log(imgName);
						newImg.setAttribute('id',imgName);
						newImg.setAttribute('src',"images/"+imgName+".png");
						document.getElementById('newDiv' + idCount).appendChild(newImg);
					}
				}
				++idCount;
			}

		}
addOptions("empty");

//cookie
		//if a cookie doesnt exist, the user hasnt been here before
		if( GetCookie('user_id') == null){//no cookies
		//get the users nickname
		var getName = prompt('Hello user! What is your name?');
		document.write('<h2>Welcome, '+getName+ '! This is your first time here. </h2>');
		SetCookie('user_id',getName);
		SetCookie('hit_count','1');
		console.log(GetCookie('user_id'));
		}
		//set the cookies
	//else we have a return visitor
		else{
			var getName = GetCookie('user_id');
			var getHits = GetCookie('hit_count');
			getHits = parseInt(getHits)+1;
			document.write('<h2>Welcome back, '+getName+ '! You have visited: '+getHits+'. </h2>');
			SetCookie('hit_count',getHits); //update hit count
		}
