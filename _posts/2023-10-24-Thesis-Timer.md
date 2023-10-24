<div id="countdown">
  <h1>Countdown until Thesis is Due</h1>
  <p id="timer"></p>
  <p>
    Pages Left: 
    <input type="number" id="pages-input" min="0" value="500">
    <button onclick="updatePages()">Update</button>
  </p>
  <p id="pages-left"></p>
  <p id="pages-per-day"></p>
</div>

<script>
  // Set the date we're counting down to
  var countDownDate = new Date("Nov 6, 2023 15:00:00").getTime();
  // Initialize totalPages
  var totalPages = 500;

  // Function to update the pagesLeft value
  function updatePages() {
    var pagesInput = document.getElementById("pages-input");
    totalPages = parseFloat(pagesInput.value);
  }
  
  // Update the countdown every 1 second
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Calculate the number of pages left and pages per day
    var pagesLeft = totalPages - (totalPages / (days + 1));
    var pagesPerDay = pagesLeft / days;

    // Display the countdown in the "timer" element
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Display the number of pages left and pages per day
    document.getElementById("pages-left").innerHTML = "Pages Left: " + pagesLeft.toFixed(2);
    document.getElementById("pages-per-day").innerHTML = "Pages/Day: " + pagesPerDay.toFixed(2);

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
</script>
