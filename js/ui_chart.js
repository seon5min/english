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
			borderRadius: 8,
		}]
	};

	// Options
	chartOption = {
		responsive: false,
		legend: {
			display: false
		},
		plugins: {
			// tooltip
			tooltip: {
				displayColors: true,
				titleFont: {
					size: 14,
					weight: 'lighter',
					lineHeight : 1
				  },
				  bodyFont: {
					size: 14,
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
				 padding: 15,	
				 callbacks: {
					labelTextColor: function(context){
						return myChart.data.datasets.backgroundColor;
					}
				 },							 					 
			},
			legend: false,
			title: {
				display: true,
				text: '초급 Lv 03 일별 평균 학습현황',
				font: {
					size: 14,
					family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'",
					weight: '400',
					color: '#717171'

				},

				align: 'end'
			}
		},
		layout: {
			padding: {
				left: 10,
				right: 20,
				top: 0,
				bottom: 0
			}
		},
		scales: {
			x: {


			},
			y: {
				// y축 옵션
				suggestedMin: 0,
				suggestedMax: 1,
				ticks: {
					stepSize: 10,
					beginAtZero: true,
					color: "#717171",
					font: {
						size: 12,
						family: "'Noto Sans KR','맑은 고딕','Malgun Gothic','Roboto'"
					},
					padding: 5,


				},
				grid: {
					color: "#e1e1e1",
					display: true,
					// drawBorder: false,
					// drawTicks: false,
					// zeroLineColor: "transparent",

				},
			},
		},
	}
	var chartSet = {
		type: 'bar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}