const realtime = new Ably.Realtime({ key: "bHfuJA.62rfqQ:ZpaCuUXJJcZ9HWqL" });
const myVotingChannel = realtime.channels.get("voting-channel");
let choiceOne = 0,
  choiceTwo = 0,
  choiceThree = 0,
  choiceFour = 0;
myVotingChannel.subscribe("vote", (msg) => {
  switch (msg.data) {
    case "1":
      choiceOne++;
      break;
    case "2":
      choiceTwo++;
      break;
    case "3":
      choiceThree++;
      break;
    case "4":
      choiceFour++;
      break;
    default:
      console.log("something broke, it wasnt me");
  }
  updateChartData();
});

function updateChartData() {
  FusionCharts.items["vote-chart"].setJSONData({
    chart: {
      caption: "If age is only a state of mind",
      subCaption: "Which category best describes YOUR state of mind right now?",
      theme: "fusion",
    },
    data: [
      {
        label: "Cheeky Child",
        value: choiceOne,
      },
      {
        label: "Tormented Teenager",
        value: choiceTwo,
      },
      {
        label: "Mad Midlifer",
        value: choiceThree,
      },
      {
        label: "Groovy Grandparent",
        value: choiceFour,
      },
    ],
  });
}

// Preparing the chart data
const chartData = [
  {
    label: "Cheeky Child",
    value: choiceOne,
  },
  {
    label: "Tormented Teenager",
    value: choiceTwo,
  },
  {
    label: "Mad Midlifer",
    value: choiceThree,
  },
  {
    label: "Groovy Grandparent",
    value: choiceFour,
  },
];
// Chart Configuration
const chartConfig = {
  type: "pie2d",
  renderAt: "chart-container",
  id: "vote-chart",
  width: "100%",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "If age is only a state of mind",
      subCaption: "Which category best describes YOUR state of mind right now?",
      theme: "fusion",
    },
    // Chart Data from Step 2
    data: chartData,
  },
};

FusionCharts.ready(() => {
  let fusioncharts = new FusionCharts(chartConfig);
  fusioncharts.render();
});
