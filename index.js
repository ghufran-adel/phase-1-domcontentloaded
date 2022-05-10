// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  const talk =  document.getElementById('text');
talk.textContent ="This is really cool!"
  });
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );