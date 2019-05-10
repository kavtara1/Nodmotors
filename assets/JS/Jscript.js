function changeid ()
{
var e = document.getElementById("a1");
e.id = "onclick-button";
document.getElementById("onclick-button").text = "დამატებულია";
}

// function onClickMenu(){
	// document.getElementById("book2").class.toggle("change");
	//document.getElementById("nav").classList.toggle("change");
	//document.getElementById("menu-bg").classList.toggle("change");



function hide(){
	document.getElementById("input").innerHTML= "Thank you! Your message has been sent successfully.";	
	document.getElementById("green_image").src = "assets/images/pts2.png";


}

 function test () {
 	document.getElementById("book2").id.toggle("menu"); 
}



// function myFunction() {
//    var element = document.getElementById("book2");
//    element.class.toggle("burger");
//    document.getElementById("overlay").style.display = "block";
// }

function on() {

  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
