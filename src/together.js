const username = localStorage.getItem("result");

function logout(condition) {
  const loginPage = "/src/login.html";
  if (
    (condition === "press" && username) ||
    (condition === "auto" && !username)
  ) {
    if (condition === "press") {
      const items = ["result", "meetingName", "meetingTopic"];
      items.forEach((item) => localStorage.removeItem(item));
    }
    location.replace(loginPage);
  }
}

document.getElementById("account").textContent = `Hello, ${username}!`;
