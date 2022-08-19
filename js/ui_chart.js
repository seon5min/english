/* 같은 레벨 친구들 학습 현황 */
function chartDataStatus(chartLabel, chartData, myLevelStr) {
	var chartDataset = null;
	var chartOption = null;
	chartDataset = {
		labels: chartLabel,
		datasets: [{
			type: 'bar',
			barThickness: 40,
			data: chartData,
			backgroundColor: [
				'#583BF8',
				'#F3D144',
				'#F57E25',
				'#A363F8'
			],
			borderRadius: 8
		}]
	};

	// Options
	chartOption = {
		responsive: true,
		legend: {
			display: false
		},
		maintainAspectRatio: false,
		plugins: {
			tooltip: {
				displayColors: true,
				titleFont: {
					size: 12,
					weight: 'bold',
					lineHeight: 1
				},
				bodyFont: {
					size: 12,
					weight: 'bold',
					lineHeight: 1
				},
				borderColor: '#DEDEDE',
				backgroundColor: '#fff',
				borderWidth: 1,
				titleColor: '#000',
				titleAlign: 'center',
				boxWidth: 0,
				boxHeight: 0,
				bodyAlign: 'center',
				usePointStyle: true,
				yAlign: "bottom",
				padding: 12,
				callbacks: {
					labelTextColor: function () {
						return myChart.data.datasets.backgroundColor;
					},
				},
				titleColor: function (tooltipitem) {
					let bar_color = tooltipitem.tooltip.labelColors[0].backgroundColor;
					return bar_color;
				},
			},
			legend: false,
			title: {
				display: true,
				text: myLevelStr,
				font: {
					size: 12,
					//family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'", 
					weight: '400',
					color: '#717171'
				},
				align: 'end'
			}
		},
		layout: {
			padding: {
				left: 5,
				right: 20,
				top: 10,
				bottom: 10
			}
		},
		scales: {
			x: {
				ticks: {
					font: {
						size: 11,
						//family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'"
					},
					autoSkip: false,
					maxRotation: 0,
					minRotation: 0,
					padding: 10,

				},
				grid: {
					color: "#e1e1e1",
					display: true,
					drawBorder: false,
					drawTicks: false,
					zeroLineColor: "transparent",
				}
			},
			y: {
				suggestedMin: 0,
				suggestedMax: 1,
				ticks: {
					stepSize: 10,
					beginAtZero: true,
					color: "#717171",
					font: {
						size: 10,
						//family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'"
					},
					padding: 5,
				},
				grid: {
					color: "#e1e1e1",
					display: true,
					drawBorder: false,
					drawTicks: false,
					zeroLineColor: "transparent",

				},
			},
		},
	}
	const chartAreaPlugin = {
		id: 'chartAreaPlugin',
		beforeDraw(chart, args, options) {
			const {
				ctx,
				chartArea: {
					top,
					bottom,
					left,
					right,
					width,
					height
				}
			} = chart;
			ctx.save();
			ctx.fillStyle = '#fff';
			ctx.fillRect(left, top, width, height);

		}
	}

	var chartSet = {
		type: 'bar',
		data: chartDataset,
		options: chartOption,
		plugins: [chartAreaPlugin]
	}
	return chartSet;
}

/* 최근 이용 콘텐츠 현황 */
function pieStatus(chartLabel, chartData) {
	var chartDataset = {
		labels: [
			chartLabel[0],
			chartLabel[1]
		],
		datasets: [{
			label: '최근 이용 콘텐츠 현황',
			data: [chartData[0] + chartData[1], chartData[2] + chartData[3]],
			backgroundColor: [
				"#F57E25",
				"#F3D144"
			],
			hoverBackgroundColor: [
				"#F57E25",
				"#F3D144"
			],
			borderWidth: 0
		}]
	};
	// Options
	var chartOption = {
		plugins: {
			tooltip: {
				displayColors: true,
				titleFont: {
					size: 14,
					//family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'",
					weight: 'bold',
					lineHeight: 1.2
				},
				bodyFont: {
					size: 14,
					//family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'",
					weight: 'normal',
					lineHeight: 1.2
				},
				borderColor: '#DEDEDE',
				backgroundColor: '#fff',
				borderWidth: 1,
				titleAlign: 'center',
				boxWidth: 0,
				boxHeight: 0,
				bodyAlign: 'left',
				usePointStyle: true,
				yAlign: "bottom",
				padding: 12,
				callbacks: {
					title: function (context) {
						let title = context[0].label;
						return title;
					},
					beforeBody: function (context) {
						var labels_tit = context[0].label;
						if (labels_tit === '최근 이용한 프로그램') {
							return '방송프로그램 ' + ': ' + chartData[0];

						} else {
							return '온라인콘텐츠 ' + ': ' + chartData[2];
						}
					},
					afterBody: function (context) {
						var labels_tit = context[0].label;
						if (labels_tit === '최근 이용한 프로그램') {
							return 'e클립             ' + ': ' + chartData[1];
						} else {
							return '방과후영어     ' + ': ' + chartData[3];
						}
					},
					label: function (context) {}
				},
				titleColor: function (tooltipiem) {
					let pie_color = tooltipiem.tooltip.labelColors[0].backgroundColor;
					return pie_color;
				},
				bodyAlign: function (context) {
					return 'left'
				},
				bodyColor: function (context) {
					return '#717171';
				},
			},
			responsive: false,
			maintainAspectRatio: false,
			legend: {
				display: false
			}
		},
		layout: {
			padding: {
				left: 0,
				right: 0,
				top: 50,
				bottom: 2
			}
		},
	};	

	// ChartSet
	var chartSet = {
		type: 'pie',
		data: chartDataset,
		options: chartOption,
	}
	
	$(".content_used_con #legend-div .s1").text(chartData[0] + chartData[1]);
	$(".content_used_con #legend-div .s2").text(chartData[2] + chartData[3]);

	return chartSet;
}

/* 나의 학습방 현황 */
function pieStatus2(chartLabel, chartData) {
	var chartDataset = {
		labels: [
			chartLabel[0],
			chartLabel[1]
		],
		datasets: [{
			label: '나의 학습방 현황',
			data: [chartData[0] + chartData[1], chartData[2] + chartData[3]],
			backgroundColor: [
				"#583BF8",
				"#A363F8"
			],
			hoverBackgroundColor: [
				"#583BF8",
				"#A363F8"
			],
			borderWidth: 0
		}]
	};
	
	// Options
	var chartOption = {
		plugins: {
			tooltip: {
				displayColors: true,
				titleFont: {
					size: 14,
					//family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'",
					weight: 'bold',
					lineHeight: 1.2
				},
				bodyFont: {
					size: 14,
					//family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'",
					weight: 'normal',
					lineHeight: 1.2
				},
				borderColor: '#DEDEDE',
				backgroundColor: '#fff',
				borderWidth: 1,
				titleAlign: 'center',
				boxWidth: 0,
				boxHeight: 0,
				bodyAlign: 'left',
				usePointStyle: true,
				yAlign: "bottom",
				padding: 12,
				callbacks: {
					title: function (context) {
						let title = context[0].label;
						return title;
					},
					beforeBody: function (context) {
						var labels_tit = context[0].label;
						if (labels_tit === '수강중인 강좌') {
							return '온라인콘텐츠 ' + ': ' + chartData[0];

						} else {
							return '방송프로그램 ' + ': ' + chartData[2];
						}
					},
					afterBody: function (context) {
						var labels_tit = context[0].label;
						if (labels_tit === '수강중인 강좌') {
							return '방과후영어     ' + ': ' + chartData[1];

						} else {
							return 'e클립             ' + ': ' + chartData[3];
						}
					},
					label: function (context) {}
				},
				titleColor: function (tooltipiem) {
					let pie_color = tooltipiem.tooltip.labelColors[0].backgroundColor;
					return pie_color;
				},
				bodyAlign: function (context) {
					return 'left'
				},
				bodyColor: function (context) {
					return '#717171';
				},
			},
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false
			}
		},
		layout: {
			padding: {
				left: 0,
				right: 0,
				top: 50,
				bottom: 2
			}
		},
	};	

	// ChartSet
	var chartSet = {
		type: 'pie',
		data: chartDataset,
		options: chartOption,
	}
	
	$(".study_room_con #legend-div .s1").text(chartData[0] + chartData[1]);
	$(".study_room_con #legend-div .s2").text(chartData[2] + chartData[3]);

	return chartSet;
}