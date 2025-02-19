const username = localStorage.getItem("result");
const meetingName = localStorage.getItem("meetingName");
const meetingTopic = localStorage.getItem("meetingTopic");
const id = localStorage.getItem("id");

function logout(condition) {
  if (condition === "auto" && username) {
    if (!meetingName && !meetingTopic) {
      if (!window.location.href.includes("/src/dashboard.html")) {
        location.replace("/src/dashboard.html");
      }
    }
  }

  if (
    (condition === "press" && username) ||
    (condition === "auto" && !username)
  ) {
    if (condition === "press") {
      const items = ["result", "meetingName", "meetingTopic", "id"];
      items.forEach((item) => localStorage.removeItem(item));
    }

    if (!window.location.href.includes("src/login.html")) {
      location.replace("/src/login.html");
    }
  }
}

if (username) {
  document.getElementById("account").textContent = `Hello, ${username}!`;
}
