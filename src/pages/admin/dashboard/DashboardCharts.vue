<template>
  <div class="map">
     <va-card>
       <va-card-content>
         <div id="chart1" style="width: 100%; height: 400px;">
         </div>
       </va-card-content>
     </va-card>
  </div>
  <div style="width: 82%; height: 400px;margin-top: 1%;">
     <va-card>
       <va-card-content>
         <div id="chart2" style="width: 100%; height: 400px;">
         </div>
       </va-card-content>
     </va-card>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import { onMounted } from 'vue';
export default {
  setup() {
    //methods
    	const echartInit = () =>{
       		var myChart = echarts.init(document.getElementById('chart1'));
        	// 指定图表的配置项和数据
          const data = [["2022-06-05",116],["2022-06-06",129],["2022-06-07",135],["2022-06-08",86],["2022-06-09",73],["2022-06-10",85],["2022-06-11",73],["2022-06-12",68],["2022-06-13",92],["2022-06-14",130],["2022-06-15",245],["2022-06-16",139],["2022-06-17",115],["2022-06-18",111],["2022-06-19",309],["2022-06-20",206],["2022-06-21",137],["2022-06-22",128],["2022-06-23",85],["2022-06-24",94],["2022-06-25",71],["2022-06-26",106],["2022-06-27",84],["2022-06-28",93],["2022-06-29",85],["2022-06-30",73],["2022-07-01",83],["2022-07-02",125],["2022-07-03",107],["2022-07-04",82],["2022-07-05",44],["2022-07-06",72],["2022-07-07",106],["2022-07-08",107],["2022-07-09",66],["2022-07-10",91],["2022-07-11",92],["2022-07-12",113],["2022-07-13",107],["2022-07-14",131],["2022-07-15",111],["2022-07-16",64],["2022-07-17",69],["2022-07-18",88],["2022-07-19",77],["2022-07-20",83],["2022-07-21",111],["2022-07-22",57],["2022-07-23",55],["2022-07-24",60]];

        	var option_1 = {
            // Make gradient line here
              title: [
                {
                  text: '系统检测频率及结果统计'
                },

              ],
              legend: {
                  data: ['合格', '涉政','色情','暴力','迷信欺诈','种族、性别歧视']
                },
              tooltip: {
                trigger: 'axis'
              },
              xAxis: [
                {
                  type: 'category',
                  data: [ '2022-08-07',
                          '2022-08-08',
                          '2022-08-09',
                          '2022-08-10',
                          '2022-08-11',
                          '2022-08-12',
                          '2022-08-13',
                          '2022-08-14',
                          '2022-08-15',
                          '2022-08-16',
                          '2022-08-17',
                          '2022-08-18',
                          '2022-08-19',
                          '2022-08-20',
                          '2022-08-21',
                          '2022-08-22',
                          '2022-08-23',
                          '2022-08-24',
                          '2022-08-25',
                          '2022-08-26',
                          '2022-08-27',
                          '2022-08-28',
                          '2022-08-29',
                          '2022-08-30',
                          '2022-08-31',
                          '2022-09-01',
                          '2022-09-02',
                          '2022-09-03',
                          '2022-09-04',
                          '2022-09-05',
                        ]
                },

              ],
              yAxis: [
                {
                  type: 'value'
                },

              ],
              dataZoom: [
                      {
                        type: 'slider',
                        show: true,
                        start: 0,
                        end: 100,
                        handleSize: 8
                      },
                      {
                        type: 'inside',
                        start: 0,
                        end: 100
                      },
                      {
                        type: 'slider',
                        show: true,
                        yAxisIndex: 0,
                        filterMode: 'empty',
                        width: 12,
                        height: '70%',
                        handleSize: 8,
                        showDataShadow: false,
                        left: '93%'
                      }
                    ],
              series: [
                {
                  name: '合格',
                  type: 'line',
                  tack: 'Total',
                  data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0, 32, 0, 52, 0, 31, 0, 34, 0, 19, 0, 22, 11,0,2],//21
                  smooth: true,
                  color:['rgba(	173, 255, 47,1)'],
                  areaStyle: {
                          color: new echarts.graphic.LinearGradient(
                                  0,0,0,1,
                                  [
                                    {
                                      offset: 0,
                                      color: "rgba(	173, 255, 47,1)",
                                    },
                                    {
                                      offset: 1,
                                      color: "rgba(	107, 142, 35, 0.02)",
                                    },
                                  ],false
                                ),
                        }
                },
                {
                  name: '涉政',
                  type: 'line',
                  stack: 'Total',
                  data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0, 15, 0, 8, 0,  0, 0, 0,1, 1, 5, 6, 7,0,1],
                  color:['rgba(	255, 215, 0,1)'],
                  areaStyle: {
                          color: new echarts.graphic.LinearGradient(
                                  0,0,0,1,
                                  [
                                    {
                                      offset: 0,
                                      color: "rgba(	255, 215, 0,1)",
                                    },
                                    {
                                      offset: 1,
                                      color: "rgba(	255, 215, 0, 0.02)",
                                    },
                                  ],false
                                ),
                        },
                  smooth: true
                },
                {
                  name: '色情',
                  type: 'line',
                  stack: 'Total',
                  data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0, 0,5, 8,  0, 0, 0,31, 4, 5, 0, 6, 7,0,0],
                  color:['rgba(	178, 34, 34,1)'],
                  areaStyle: {
                          color: new echarts.graphic.LinearGradient(
                                  0,0,0,1,
                                  [
                                    {
                                      offset: 0,
                                      color: "rgba(	178, 34, 34,1)",
                                    },
                                    {
                                      offset: 1,
                                      color: "rgba(	178, 34, 34, 0.02)",
                                    },
                                  ],false
                                ),
                        },
                  smooth: true
                },
                {
                  name: '暴力',
                  type: 'line',
                  stack: 'Total',
                  data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0, 0, 0,9,  0,18, 13, 14, 15, 26, 27, 0, 0,0,1],
                  color:['rgba(	123, 104, 238,1)'],
                  areaStyle: {
                          color: new echarts.graphic.LinearGradient(
                                  0,0,0,1,
                                  [
                                    {
                                      offset: 0,
                                      color: "rgba(	123, 104, 238,1)",
                                    },
                                    {
                                      offset: 1,
                                      color: "rgba(	75, 0, 130, 0.02)",
                                    },
                                  ],false
                                ),
                        },
                  smooth: true
                },
                {
                  name: '迷信欺诈',
                  type: 'line',
                  stack: 'Total',
                  data: [9,0,0,0,0,0,0,0,0,0,0,0,0, 0, 27, 0,0,0,  0,15, 18, 13, 0,15, 26, 14, 0, 0,0,1],
                  color:['rgba(	255, 20, 147,1)'],
                  areaStyle: {
                          color: new echarts.graphic.LinearGradient(
                                  0,0,0,1,
                                  [
                                    {
                                      offset: 0,
                                      color: "rgba(	255, 20, 147,1)",
                                    },
                                    {
                                      offset: 1,
                                      color: "rgba(	255, 20, 147, 0.02)",
                                    },
                                  ],false
                                ),
                        },
                  smooth: true
                },
                {
                  name: '种族、性别歧视',
                  type: 'line',
                  stack: 'Total',
                  data: [0,0,0,0,0,0,0,0,0,0,9,  0,0,0,0, 0, 0, 0,18, 13, 14, 0,0,0,15, 6,0, 27, 0, 0,0,0],
                  color:['rgba(	95,174,227,1)'],
                  areaStyle: {
                          color: new echarts.graphic.LinearGradient(
                                  0,0,0,1,
                                  [
                                    {
                                      offset: 0,
                                      color: "rgba(	95,174,227,1)",
                                    },
                                    {
                                      offset: 1,
                                      color: "rgba(	95,174,227, 0.02)",
                                    },
                                  ],false
                                ),
                        },
                  smooth: true
                },

              ]
	        };
	        // 使用刚指定的配置项和数据显示图表。
	        myChart.setOption(option_1);
   		}

    const echartInit2= () =>{
     		var myChart = echarts.init(document.getElementById('chart2'));
      	// 指定图表的配置项和数据
        var option_2 = {
           title: {
              text: '检测库结果分类统计',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 10002, name: '通过:10002(51.33%)' },
                  { value: 1238, name: '涉政:1238(6.35%)' },
                  { value: 2564, name: '色情:2564(13.16%)' },
                  { value: 4085, name: '暴力:4085(20.96%)' },
                  { value: 664, name: '迷信欺诈:664(3.40%)' },
                  { value: 934, name: '种族、性别歧视:934(4.79%)' },
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
        }

        // Make gradient line here
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option_2);
    }
    //onMounted
    	onMounted(()=>{
      		echartInit()
          echartInit2()
    	})
    //return
    	return {
      		echartInit,
          echartInit2
    	};
  }
};
</script>
