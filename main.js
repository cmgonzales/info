function star() {
  var modal = document.getElementById("myModal");

  var wel = document.getElementById("wel");

  var span = document.getElementsByClassName("close")[0];

  wel.onclick = function() {
    modal.style.display = "block";
  };

  span.onclick = function() {
    modal.style.display = "none";
    location.reload();
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      location.reload();
    }
  };
}
