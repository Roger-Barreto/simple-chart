export const INITIAL_CHART_OPTIONS: Highcharts.Options = {
    colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066"],
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Sales (in millions)",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} M</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Sales",
        type: "column",
        data: [
          49.9, 71.5, 106.4, 129.2
        ],
      },
    ],
  };