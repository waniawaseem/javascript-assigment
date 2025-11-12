//question # 1
  function showAlert() {
      alert("You clicked the link!");
    }
//question # 2
  function showMsg(name) {
      alert("You clicked on " + name + " image!");
    }
//question # 3
function deleteRow(button) {
      // Get the parent <tr> of the button and remove it
      let row = button.parentNode.parentNode;
      row.remove();
    }
//question # 4
function changeImage() {
      document.getElementById("myImage").src = "https://img.lovepik.com/free-png/20210928/lovepik-mobile-phone-png-image_401663651_wh1200.png";
    }
    function resetImage() {
      document.getElementById("myImage").src = "https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg?semt=ais_hybrid&w=740&q=80";
    }
//question # 5
let count = 0;
    function increase() {
      count++;
      document.getElementById("counter").innerText = count;
    }
    function decrease() {
      count--;
      document.getElementById("counter").innerText = count;
    }