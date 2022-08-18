/* 같은 레벨 친구들 학습 현황 */
function chartDataStatus(chartLabel1, chartData1) {
	var chartDataset = null;
	var chartOption = null;
	chartDataset = {
		labels: chartLabel1,
		datasets: [{
			type: 'bar',
			barThickness: 40,
			data: chartData1,
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
				text: '초급 Lv 03 일별 평균 학습현황',
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
function pieStatus(chartlabels, chartData) {
	var data = {
		labels: [
			chartlabels[0],
			chartlabels[1]
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
	var ctx2 = $("#myChart2");
	var myChart2 = new Chart(ctx2, {
		type: 'pie',
		data: data,
		options: {
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
								return '방송프로그램 ' + ': ' + chartData[2];
							}
						},
						afterBody: function (context) {
							var labels_tit = context[0].label;
							if (labels_tit === '최근 이용한 프로그램') {
								return 'e클립           ' + ': ' + chartData[1];

							} else {
								return 'e클립           ' + ': ' + chartData[3];
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
		}
	});
	$(".content_used_con #legend-div .s1").text(chartData[0] + chartData[1]);
	$(".content_used_con #legend-div .s2").text(chartData[2] + chartData[3]);
}

/* 나의 학습방 현황 */
function pieStatus2(chartlabels, chartData) {
	var data = {
		labels: [
			chartlabels[0],
			chartlabels[1]
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
	var ctx3 = $("#myChart3");
	var myChart3 = new Chart(ctx3, {
		type: 'pie',
		data: data,
		options: {
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
								return '방송프로그램 ' + ': ' + chartData[0];

							} else {
								return '방송프로그램 ' + ': ' + chartData[2];
							}
						},
						afterBody: function (context) {
							var labels_tit = context[0].label;
							if (labels_tit === '수강중인 강좌') {
								return 'e클립           ' + ': ' + chartData[1];

							} else {
								return 'e클립           ' + ': ' + chartData[3];
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
		}
	});
	$(".study_room_con #legend-div .s1").text(chartData[0] + chartData[1]);
	$(".study_room_con #legend-div .s2").text(chartData[2] + chartData[3]);
}




// $( document ).ready(function() {
// 	var pageload;
// 	var containerWidth = window.innerWidth;
	
// 	$('.tab_sub').hide();
	
// 	if(containerWidth <= 760) {
// 		var $tab_main = $('.recomCon .tab_main');
// 		if ($tab_main.length > 0) {
// 			if (recomId.indexOf('EGRD') > -1) {
// 				$tab_main.find('li').eq(0).addClass('on');
// 				$('.tab_sub0').show();
// 			} else {
// 				$tab_main.find('li').eq(1).addClass('on');
// 				$('.tab_sub1').show();
// 			}
// 			$('.tab_sub').find('li').filter('[grdCd='+recomId.substr(1)+']').addClass('on');
// 		}
	
// 		week_swiper_mo.update();
// 		newest_swiper.params.slidesPerView = 1.3;
	
// 	} else {
// 		if (containerWidth <= 995 && containerWidth > 760) {
// 			newest_swiper.params.slidesPerView = 3;
// 			week_swiper_pc.params.slidesPerView = 3;
// 		}
// 		if (containerWidth <= 1280 && containerWidth > 995) {
// 			newest_swiper.params.slidesPerView = 4;
// 			week_swiper_pc.params.slidesPerView = 4;
// 		}
// 		if (containerWidth > 1280) {
// 			newest_swiper.params.slidesPerView = 5;
// 			week_swiper_pc.params.slidesPerView = 5;
// 		}
// 		$('ul.tab_sub').hide();
// 		week_swiper_pc.update();
// 		newest_swiper.update();
// 	}
// 	clearTimeout(pageload);
// 	pageload = setTimeout(posPage,500);
// 	ThumbMov();
// });