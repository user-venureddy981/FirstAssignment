document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const colorSelect = document.getElementById("colorSelect");
    const widthSelect = document.getElementById("widthSelect");
    const heightSelect = document.getElementById("heightSelect");
    const setButton = document.getElementById("setButton");
  
    setButton.addEventListener("click", function() {
      const selectedColor = colorSelect.value;
      const selectedWidth = widthSelect.value;
      const selectedHeight = heightSelect.value;
  
      container.style.backgroundColor = selectedColor;
      container.style.width = selectedWidth;
      container.style.height = selectedHeight;
    });
  });
  