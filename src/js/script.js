/* eslint-disable quotes */
var ctx = document.getElementById("myChart").getContext("2d");

var chart = new Chart(ctx, {
  // 1
  type: "bar",
  data: {
    // 2
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    // 3
    datasets: [
      {
        // 4
        label: "Signups",
        // 5
        backgroundColor: "#8DBEC8",
        borderColor: "#8DBEC8",
        // 6
        data: [330, 190, 200, 350, 400, 380, 270, 250, 290],
      },
      {
        label: "FTD",
        backgroundColor: "#F29E4E",
        borderColor: "#F29E4E",
        data: [400, 160, 290, 260, 420, 100, 200, 500, 340, 0],
      },
      {
        label: "Earned",
        backgroundColor: "#71B374",
        borderColor: "#71B374",
        data: [0, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      },
    ],
  },
});
