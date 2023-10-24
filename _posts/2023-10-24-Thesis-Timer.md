<div id="countdown">
  <h1>Countdown Timer</h1>
  <p id="timer"></p>
  <p>
    Pages Left: 
    <input type="number" id="pages-input" min="0" value="25" oninput="updatePages()">
  </p>
  <p id="pages-per-day"></p>
</div>

<script>
  // Set the date we're counting down to
  var countDownDate = new Date("Nov 6, 2023 15:00:00").getTime();
  // Initialize totalPages
  var totalPages = 25;

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
    var pagesLeft = totalPages;
    var pagesPerDay = pagesLeft / days;

    // Display the countdown in the "timer" element
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Display the number of pages left and pages per day
    document.getElementById("pages-per-day").innerHTML = "Pages/Day: " + pagesPerDay.toFixed(2);

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
</script>
