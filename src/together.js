const username = localStorage.getItem("result");

function logout(condition) {
  const loginPage = "/src/login.html";
  if (
    (condition === "press" && username) ||
    (condition === "auto" && !username)
  ) {
    if (condition === "press") {
      localStorage.removeItem("result");
      localStorage.removeItem("meetingName");
      localStorage.removeItem("meetingTopic");
    }
    location.replace(loginPage);
  }
}

document.getElementById("account").textContent = `Hello, ${username}!`;
