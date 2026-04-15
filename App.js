let count = 0;

function updateUI() {
  document.getElementById("count").innerText = count;
}

function increment() {
  count++;
  updateUI();
}

function decrement() {
  count--;
  updateUI();
}

function resetCount() {
  count = 0;
  updateUI();
}
