var commentBlocks = document.getElementsByClassName("comment-renderer");
var idMap = new Map(); 
var comList = []
var count = 0; 
for (i = 0; i < commentBlocks.length; i++) {
	var aKey = commentBlocks[i].getElementsByClassName("comment-renderer-text-content");
	if (aKey[0].clientWidth == 522) {
		var aKey = aKey[0].innerText;
		comList[count] = aKey; 
		var val = "commentNumber" + count.toString(); 
		commentBlocks[i].id = val;
		idMap.set(aKey, val);
		count++;
	}
}

var meanComments = [];
//// watson spits back list
var counter = 0; 
var entity = watsonList[5];
for (w = 0; w < entity.length; w++) {
	if(entity[w][2][0] == "negative") {
		meanComments[counter] = comList[w];
	}
	counter++;
}

var changed = false; 
for (x = 0; x < meanComments.length; x++) {
	var idName = idMap.get(meanComments[x]);
	document.getElementById(idName).style.backgroundColor = "yellow"; 
	var changed = true; 
}
if (changed == true) {
	alert("Mean comment detected. I know you're the type to be nice, so scroll down to type something nice"); 
}
