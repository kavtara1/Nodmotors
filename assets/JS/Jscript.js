
// document.addEventListener("DOMContentLoaded", function() {
//   var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

//   if ("IntersectionObserver" in window) {
//     let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           let lazyImage = entry.target;
//           lazyImage.src = lazyImage.dataset.src;
//           lazyImage.srcset = lazyImage.dataset.srcset;
//           lazyImage.classList.remove("lazy");
//           lazyImageObserver.unobserve(lazyImage);
//         }
//       });
//     });

//     lazyImages.forEach(function(lazyImage) {
//       lazyImageObserver.observe(lazyImage);
//     });
//   } else {
//     // Possibly fall back to a more compatible method here
//   }
// });




function hide(){

	document.getElementById("input").innerHTML= "Thank you! Your message has been sent successfully.";	
	document.getElementById("green_image").src = "assets/images/pts2.png";
}


function onof() {
  var x = document.getElementById("overlay");
  if (x.style.display === "block" )  {
    x.style.display = "none";
    document.getElementById("menu").classList.toggle("change");
  } else {
    x.style.display = "block";
    document.getElementById("menu").classList.toggle("change");
  }
}


