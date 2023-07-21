//Habilidades (chart)

function fadeIn(element) {
  let opacity = 0;
  element.style.opacity = 0;
  let timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 50);
}

function fadeOut(element) {
  let opacity = 1;
  element.style.opacity = 1;
  let timer = setInterval(function () {
    if (opacity <= 0) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = opacity;
    opacity -= 0.1;
  }, 50);
}

//Botones para cambiar de grafico al clickear
const texasStadisticsButton = document.getElementById("texasBtn");
const guildMemberBtn = document.getElementById("guildBtn");

const ctx = document.getElementById("myChart").getContext("2d");
const ctx2 = document.getElementById("myChart2").getContext("2d");

let chartValue = "";

guildMemberBtn.addEventListener("click", () => {
  guildBtn.classList.add("active");
  texasBtn.classList.remove("active");
  myChart2.style.display = "none";
  myChart.style.display = "block";
  chartValue = "Guild stadistics";
  getChart(chartValue);
});

texasStadisticsButton.addEventListener("click", () => {
  texasBtn.classList.add("active");
  guildBtn.classList.remove("active");
  myChart2.style.display = "block";
  myChart.style.display = "none";
  chartValue = "Texas Stadistics";
  getChart(chartValue);
});

function getChart(chartValue) {
  //guildMemberBtn
  if (chartValue === "Guild stadistics") {
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Quantity of members (thousands)",
          "Members contributions (thousands)",
          "Average age of members",
          "New jobs (thousands)",
          "Currently projects",
        ],
        datasets: [
          {
            label: "Membership stadistics",
            data: [90, 150, 40, 54, 70],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
            ],
            fill: false,
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
                fontColor: "#fff",
              },
              gridLines: {
                display: true,
                color: "rgba(255, 255, 255, 0.2)",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#fff",
                
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        title: {
          display: true,
          text: "Horizon's Members",
          fontColor: "#fff",
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
          },
        },
      },
    });
  }
  //texasStadisticsButton
  else if (chartValue === "Texas Stadistics") {
    const myChart2 = new Chart(ctx2, {
      type: "radar",
      data: {
        labels: [
          "Population (Millions)",
          "Area (hundred miles)",
          "Life expectancy (in years)",
          "Average annual temperature(°F)",
          "Renewable energy consumption",
          "Median household income (in thousand dollars)",
          "Unemployment rate (%)",
        ],
        datasets: [
          {
            label: "Texas stadistics",
            data: [29, 26, 78.8, 65.9, 22.9, 59, 3.7],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "#ce7420",
            pointBackgroundColor: "#ce7420",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
                fontColor: "#fff",
              },
              gridLines: {
                display: true,
                color: "rgba(255, 255, 255, 0.2)",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#fff",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        title: {
          display: true,
          text: "Skills Level",
          fontColor: "#fff",
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
          },
        },
      },
    });
  }
}
//Start with texas stadistics chart at the begining
texasStadisticsButton.click();
guildMemberBtn.click();
texasStadisticsButton.click();
