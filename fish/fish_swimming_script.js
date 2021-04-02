let imgname = shark.src;
shark.onclick = function() {
  shark.swim();
}
shark.translateX = 1;

shark.swim = function() {						
  var movex = shark.translateX;
  var posit = shark.getBoundingClientRect();
  var edges = document.body.getBoundingClientRect();
						
	if (posit.right >= edges.right) {
	  shark.src = "cool_shark1.png";
		shark.translateX = -1;
	};
	if (posit.left <= edges.left) {
			shark.src = "cool_shark.png";
			shark.translateX = 1;
	};
	shark.style.left = posit.left + movex + 'px';
  setTimeout(shark.swim, 10);
}
