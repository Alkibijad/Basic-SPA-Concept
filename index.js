let btnNavbar = document.querySelectorAll("li");
let sections = document.querySelectorAll("section");

for (let i = 0; i < btnNavbar.length; i++) {
  btnNavbar[i].addEventListener("click", displayView);
}

function displayView() {
  let btnSelectedView = this.getAttribute("class");

  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  if (btnSelectedView === "contact") {
    let chatBox = document.querySelector('.chat-box');
    chatBox.style.display = "block";
  }

  let selectedView = document.querySelector(
    `section[class="${btnSelectedView}"]`
  );
  
  selectedView.style.display = "block";
}
