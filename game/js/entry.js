let eobj;
let ce = 0;

async function LoadEntries(){
	//let text = "{\"entries\":[{\"title\":\"Test Entry 1\",\"date\":\"12/03/2024\",\"content\":\"This is the first entry :)\\nNew Line\\n\\nNew New Line\\n\\tNew Tabbed Line\"},{\"title\":\"Test Entry 2\",\"date\":\"12/03/2024\",\"content\":\"This is the second entry :D\\nNew Line\\n\\nNew New Line\\n\\tNew Tabbed Line\"},{\"title\":\"\",\"date\":\"\",\"content\":\"\"}]}";
	console.log("Fetching Data...");
	let xmlHttp = new XMLHttpRequest();
    await xmlHttp.open("GET", "https://raw.githubusercontent.com/Mad-Mushroom/DerPhysikus/refs/heads/main/game/js/entries.json", false);
    xmlHttp.send(null);
	console.log("Data:\n" + xmlHttp.responseText);
	eobj = JSON.parse(xmlHttp.responseText);
	ShowEntryById(0);
}

function ShowEntryById(id){
	var arrayLength = eobj.entries.length;
	for (var i = 0; i < arrayLength; i++) {
		if(i == id){
			document.getElementById("outText").innerHTML = eobj.entries[i].content;
			document.getElementById("outTitle").innerHTML = eobj.entries[i].title;
			document.getElementById("outDate").innerHTML = eobj.entries[i].date;
			//console.log(eobj.entries[i].content);
			return;
		}
	}
}

function ShowEntryByDate(date){
	var arrayLength = eobj.entries.length;
	for (var i = 0; i < arrayLength; i++) {
		if(eobj.entries[i].date == date){
			document.getElementById("outText").innerHTML = eobj.entries[i].content;
			document.getElementById("outTitle").innerHTML = eobj.entries[i].title;
			document.getElementById("outDate").innerHTML = eobj.entries[i].date;
			//console.log(eobj.entries[i].content);
			return;
		}
	}
}

function NextEntry(){
	ce++;
	ShowEntryById(ce);
}
function PreEntry(){
	if(ce > 0) ce--;
	ShowEntryById(ce);
}
function LatestEntry(){
	ce = eobj.entries.length-2;
	ShowEntryById(ce);
}

LoadEntries();
