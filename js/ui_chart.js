/* 차트 */
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
			// tooltip
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
					}
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