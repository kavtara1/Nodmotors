function changeid ()
{
var e = document.getElementById("a1");
e.id = "onclick-button";
document.getElementById("onclick-button").text = "დამატებულია";
}

function onClickMenu(){
	document.getElementById("book2").class.toggle("change");
	//document.getElementById("nav").classList.toggle("change");
	//document.getElementById("menu-bg").classList.toggle("change");

}


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}