var i = 0;
		function bar() {
			if (i == 0) {
			i = 1;
			var compl = document.getElementById("completion");
			var width = 1;
			var id = setInterval(growth, 10);
			function growth() {
				if (width >= 100) {
				clearInterval(id);
				i = 0;
			   } else {
				width++;
				compl.style.width = width + "%";
				compl.innerHTML = width + "%";
				}
			   }
			  }
			 }