
window.onbeforeunload = function(e){  
  return 'Calling some alert messages here'; //return not alert
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    //m = checkTime(m);
    //s = checkTime(s);
    document.getElementById('DisplayTime').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime);
}

function getCurrentTime(event) {
	var x = document.getElementById('OpenTime').innerHTML; //document.getElementById('OpenTime').innerHTML;
	x = x + document.getElementById('DisplayTime').innerHTML;
	document.getElementById('OpenTime').innerHTML = x;
}

function getCloseTime() {
	var c;
	var todayx = new Date();
    var h = todayx.getHours();
    var m = todayx.getMinutes();
    var s = todayx.getSeconds();
	x = h + ":" + m + ":" + s;
	document.getElementById('CloseTime').innerHTML += x;
}

function graph() {
	//var height = document.getElementById("graph").offsetHeight;
	//var width = document.getElementById("graph").clientHeight;
	var height = document.getElementById("graph").clientHeight; // element height
	var width = document.getElementById("graph").clientWidth; 	// element width
	var main = document.getElementById("graph");
	main.innerHTML =   main.innerHTML + "<br/> height - " + height + "<br/> width " + width;

}

function displaySame(event){
	convertList();
	showtaskinfo();
	var element = event.target;
	var summary = document.getElementById("summary");
	summary.innerHTML = element.innerHTML;
}

function showtaskinfo() {
	document.getElementById("tsklist").style.width = "30%";
	document.getElementById("tskinfo").style.display = "inline";
}

function showtsklist() {
	document.getElementById("tsklist").style.width = "80%";
	document.getElementById("tskinfo").style.display = "none";
}

function copyinfo(event) {
	var element = event.target;
	var summary = document.getElementById("summary");
	summary.innerHTML = element.innerHTML;
}

function addComments() {
	var d = new Date();
	var dateformar = (d.getDate() + "-" + d.getMonth() +  "-" + d.getFullYear()
						+ " " + d.getHours() + ":" + d.getMinutes()  + ":" + d.getSeconds() );
	var comment = document.getElementById("comment");
	var comtype = document.getElementById("comtype");
	comment.innerHTML = comment.innerHTML + "<br/><br/>"
						+ dateformar + "<br/><hr/><br/>"+  comtype.innerHTML;
	comtype.innerHTML = "";
}

function convertCard() {
	showtsklist();
	var elements = document.getElementsByClassName("tasks");
	for (var i = 0, len = elements.length; i < len; i++) {
		var element = elements.item(i);
		element.classList.remove("w3-panel");
		//element.classList.add("w3-card-4");
		element.style.marginBottom  = "7vh";
		element.style.marginTop  = "2vh";
		element.style.marginRight  = "10vh";
		element.style.marginLeft  = "10vh";
		element.style.minHeight = "32vh";
		element.style.minWidth  = "28vw";
		element.style.float  = "left";
	}
}

function convertCardSmall() {
	showtsklist();
	var elements = document.getElementsByClassName("tasks");
	for (var i = 0, len = elements.length; i < len; i++) {
		var element = elements.item(i);
		element.classList.remove("w3-panel");
		//element.classList.add("w3-card-4");
		element.style.marginBottom  = "1vh";
		element.style.marginTop  = "2vh";
		element.style.marginRight  = "3vh";
		element.style.marginLeft  = "3vh";
		element.style.minHeight = "15vh";
		element.style.minWidth  = "9vw";
		element.style.float  = "left";
	}
}

function convertList() {
	showtsklist();
	var elements = document.getElementsByClassName("tasks");
	for (var i = 0, len = elements.length; i < len; i++) {
		var element = elements.item(i);
		element.classList.add("w3-panel");
		element.removeAttribute("marginBottom");
		element.removeAttribute("marginTop");
		element.removeAttribute("marginRight");
		element.removeAttribute("marginLeft");
		element.removeAttribute("minWidth");
		element.removeAttribute("minHeight");
		element.style.minHeight = "7vh";
		element.style.minWidth = "100%";
		element.style.marginLeft = "0";
		element.style.marginBottom = "0";
	}
}

function DragDropStatus() {
	showtsklist();
}

//This is will display or remove sidebar
function displaySideBar() {
	var sidebar = document.getElementById("sidebar");
	if(sidebar.style.display == "inline") {
		sidebar.style.display = "none";
	} else {
		sidebar.style.display = "inline";
	}
}
