var data = document.getElementsByClassName("comment-renderer-text-content");
var niceArray = new Array(data.length);
for (x = 0; x < data.length; x++) {
  niceArray[x] = data[x].innerText;
}
console.log(niceArray);
