var commentBlocks = document.getElementsByClassName("comment-renderer");
var idMap = new Map(); 
var comList = [];
var meanwords = [];
var highlightComments = []; 

meanwords.push("ugly");
meanwords.push("fat");
meanwords.push("stupid");
meanwords.push("weird"); 
meanwords.push("stupidity"); 
meanwords.push("fucking"); 
meanwords.push("suck");
meanwords.push("die"); 
meanwords.push("annoying"); 
meanwords.push("dumb");
meanwords.push("dumbest");
meanwords.push("shit");
meanwords.push("crap");
meanwords.push("worst");
meanwords.push("horrible");
meanwords.push("dislike");
meanwords.push("dislikes");

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


for (k = 0; k < comList.length; k++) {
	for (y = 0; y < meanwords.length; y++) {
		if (comList[k].includes(meanwords[y])) {
			highlightComments.push(comList[k]); 
		}
	}
}
//// watson spits back list
/*var counter = 0; 
var entity = watsonList[5];
for (w = 0; w < entity.length; w++) {
	if(entity[w][2][0] == "negative") {
		meanComments[counter] = comList[w];
	}
	counter++;
}*/

var changed = false; 
var scrollToId = ""
for (x = 0; x < highlightComments.length; x++) {
	var idName = idMap.get(highlightComments[x]);
	var scrollToId = idName; 
	document.getElementById(idName).style.backgroundColor = "yellow"; 
	var changed = true; 
}
if (changed == true) {
	alert("Mean comment detected. I know you're the type to be nice, so scroll down to type something nice"); 
	//window.scrollTo(getElementById(scrollToId));
}

