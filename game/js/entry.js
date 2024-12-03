let eobj;

function LoadEntries(){
	//let text = "{\"entries\":[{\"title\":\"Test Entry 1\",\"date\":\"12/03/2024\",\"content\":\"This is the first entry :)\\nNew Line\\n\\nNew New Line\\n\\tNew Tabbed Line\"},{\"title\":\"Test Entry 2\",\"date\":\"12/03/2024\",\"content\":\"This is the second entry :D\\nNew Line\\n\\nNew New Line\\n\\tNew Tabbed Line\"},{\"title\":\"\",\"date\":\"\",\"content\":\"\"}]}";
	fetch("")
		.then(text => {
			eobj = JSON.parse(text);
		}));
}

function ShowEntryById(){
	
}

function ShowEntryByDate(){
	
}