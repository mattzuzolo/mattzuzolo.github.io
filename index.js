const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return "Good morning,";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon,";
  } else if (currentHour >= 18 && currentHour < 24) {
    return "Good evening,";
  } else {
    return "Welcome,";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const greetingSpan = document.getElementById("greeting");
  greetingSpan.textContent = getGreeting();
});
