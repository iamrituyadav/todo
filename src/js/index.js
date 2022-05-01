document.getElementById("btn").addEventListener("click", save);
document.addEventListener("DOMContentLoaded", function () {
  console.log("page loaded");
  addLogo();
  display();
});

function save() {
  var x = document.getElementById("text").value;
  let savedData = JSON.parse(localStorage.getItem("descData")) || [];

  // display(savedData);

  let data = {
    desc: x,
  };

  savedData.push(data);

  localStorage.setItem("descData", JSON.stringify(savedData));
  display();
}

function display() {
  let savedData = JSON.parse(localStorage.getItem("descData")) || [];

  const container = document.getElementById("notes");
  container.innerHTML = null;

  savedData.map(function (item) {
    // console.log(item);
    let div = document.createElement("div");
    div.innerText = item.desc;

    container.append(div);
  });
}

function addLogo() {
  let img = document.createElement("img");
  img.src = "./static/image/icons8-bbb.svg";
  document.getElementById("logo-container").append(img);
}
