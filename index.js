tailwind.config = {
  theme: {
    colors: {
      purple: "hsl(259, 100%, 65%)",
      "light-red": "hsl(0, 100%, 67%)",
      white: "hsl(0, 0%, 100%)",
      "off-white": "hsl(0, 0%, 94%)",
      "light-grey": "hsl(0, 0%, 86%)",
      "smokey-grey": "hsl(0, 1%, 44%)",
      "off-black": "hsl(0, 0%, 8%)",
    },
  },
};

document.querySelector("button").addEventListener("click", function () {
  let day = parseInt(document.querySelector("#day-input").value);
  let month = parseInt(document.querySelector("#month-input").value);
  let year = parseInt(document.querySelector("#year-input").value);

  const date = new Date();
  const actualDay = date.getDate();
  const actualMonth = date.getMonth() + 1;
  const actualYear = date.getFullYear();

  let years = actualYear - year;
  let months = actualMonth - month;
  let days = actualDay - day;

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const prevMonth = actualMonth === 1 ? 12 : actualMonth - 1;
    const daysInPrevMonth = new Date(actualYear, prevMonth, 0).getDate();
    days += daysInPrevMonth;
    months--;
  }

  document.querySelector("#day-output").innerHTML = days;
  document.querySelector("#month-output").innerHTML = months;
  document.querySelector("#year-output").innerHTML = years;
});
