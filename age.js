// script.js
document.getElementById("calculateBtn").addEventListener("click", function () {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
  
    if (!day || !month || !year) {
      document.getElementById("result").innerText = "Please fill all fields correctly.";
      return;
    }
  
    const today = new Date();
    let ageYear = today.getFullYear() - year;
    let ageMonth = today.getMonth() + 1 - month;
    let ageDay = today.getDate() - day;
  
    if (ageDay < 0) {
      ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      ageMonth--;
    }
    if (ageMonth < 0) {
      ageMonth += 12;
      ageYear--;
    }
  
    document.getElementById("result").innerText =
      `You are ${ageYear} years, ${ageMonth} months, and ${ageDay} days old`;
  });