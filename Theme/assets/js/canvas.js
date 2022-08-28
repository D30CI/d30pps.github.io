 			var canvas = document.getElementById("car");
      canvas.width = 364;
      canvas.height = 219;
      canvas.style = "border:1px solid red";
      var canvasContext = canvas.getContext("2d");

      const image = "https://i.ibb.co/cYfp8SQ/sedan.jpg";
      let canvasImg = new Image();
      canvasImg.src = image;
      canvasImg.onload = () => {
        canvasContext.drawImage(canvasImg, 0, 0, canvas.width, canvas.height);
      };

      setTimeout(() => {
        canvasContext.fillStyle = "red";
        canvasContext.beginPath();
        canvasContext.arc(110, 80, 5, 0, Math.PI * 2, true);
        canvasContext.fill();
      }, 500);
      setTimeout(() => {
        canvasContext.fillStyle = "red";
        canvasContext.beginPath();
        canvasContext.arc(150, 20, 5, 0, Math.PI * 2, true);
        canvasContext.fill();
      }, 500);