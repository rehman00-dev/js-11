// 1. Alert on link click
function showAlert() {
    alert("You clicked the link!");
}

// 2. Mobile image alert
function mobileAlert() {
    alert("Thanks for purchasing a phone!");
}

// 3. Delete table row
function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();
}

// 4. Image change on mouse events
function changeImage(img) {
    img.src = "https://via.placeholder.com/200?text=Image+2";
}

function resetImage(img) {
    img.src = "https://via.placeholder.com/200?text=Image+1";
}

// 5. Counter
let count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerText = count;
}

function decrease() {
    count--;
    document.getElementById("counter").innerText = count;
}
