/* 같은 레벨 친구들 학습 현황 */
function chartDataStatus(chartLabel, chartData) {
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
					weight: 'lighter',
					lineHeight: 1
				  },
				  bodyFont: {
					size: 12,
					weight: 'bold',
					lineHeight : '14px'
				  },
				 borderColor: '#DEDEDE',
				 backgroundColor:'#fff',
				 borderWidth: 1,
				 titleColor:'#000',
				 titleAlign:'center',
				 boxWidth:0,
				 boxHeight:0,
				 bodyAlign: 'center',
				 usePointStyle: true, 
				 yAlign: "bottom",	
				 padding: 10,	
				 callbacks: {
					labelTextColor: function(){
						return myChart.data.datasets.backgroundColor;
					},
				 },							 					 
			},
			legend: false,
			title: {
				display: true,
				text: '초급 Lv 03 일별 평균 학습현황',
				font: {
					size: 12,
					family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'",
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
						family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'"
					},
					autoSkip: false,
					maxRotation: 0,
					minRotation: 0,
					padding:10,
				
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
						family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'"
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
			const {ctx, chartArea: {top, bottom, left, right, width, height} } = chart;
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
// function pieChartDraw(chartLabel, chartData) {
// 	var chartDataset = null;
// 	var chartOption = null;
// 	chartDataset = {
// 		labels: [chartLabel[0], chartLabel[1]],
// 		datasets: [{
// 			label: '동그라미',
// 			data: [chartData[0] + chartData[1], chartData[2] + chartData[3]],
// 			backgroundColor: ['#F57E25', '#F3D144']
// 		}]

// 	};

// 	// Options
// 	chartOption = {
// 		responsive: false,
// 		tooltips: {
// 			callbacks: {
// 				title: function (tooltipItem, data) {
// 					return data['labels'][tooltipItem[0]['index']];
// 				},
// 				label: function (tooltipItem, data) {
// 					var labels_tit = data['labels'][tooltipItem['index']];
// 					if (labels_tit === '최근 이용한 프로그램') {
// 						return '첫번째 영상 ' + chartData[0];
// 					} else {
// 						return '첫번째 영상 ' + chartData[2];
// 					}
// 					//return '첫번째 영상 ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
// 				},
// 				afterLabel: function (tooltipItem, data) {
// 					var dataset = data['datasets'][0]['data'][tooltipItem['index']];
// 					var labels_tit = data['labels'][tooltipItem['index']];
// 					if (labels_tit === '최근 이용한 강좌') {
// 						return '두번째 영상 ' + chartData[1];
// 					} else {
// 						return '두번째 영상 ' + chartData[3];
// 					}
// 					//var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
// 					//return '두번째 영상 ' + dataset + '%';
// 				}
// 			},
// 			backgroundColor: '#FFF',
// 			titleFontSize: 16,
// 			titleFontColor: '#0066ff',
// 			bodyFontColor: '#000',
// 			bodyFontSize: 14,
// 			displayColors: false
// 		},
// 		legend: {
// 			display: false
// 		},
// 		legendCallback: customLegend
// 	}


// 	let customLegend = function (chart) {
// 		let ul = document.createElement('ul');
// 		let color = chart.data.datasets[0].backgroundColor;
// 		var dataset = chart.data['datasets'][0]['data'];
// 		// chart.data.labels.forEach(function (label, index) {
// 		//     ul.innerHTML += `<li data-index="${index}"><span style="background-color: ${color[index]}"></span>${label}</li>`;
// 		// });
	
// 		ul.innerHTML += "<li data-target='최근 이용한 프로그램'><span style='background-color: #F57E25';></span>최근 이용한 프로그램" + dataset[0] + "</ul>";
// 		ul.innerHTML += "<li data-target='최근 이용한 강좌'><span style='background-color: #F3D144;></span>최근 이용한 강좌" + dataset[1] + "</ul>";
	
// 		console.log(dataset);
// 		return ul.outerHTML;
// 	};
	
// 	var chartSet = {
// 		type: 'pie',
// 		data: chartData,
// 		options: chartOption,
// 	}
// 	return chartSet;
// }



