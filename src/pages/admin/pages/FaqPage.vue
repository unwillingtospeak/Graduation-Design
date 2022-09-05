<template>
  <div class="map">
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
    	const echartInit2= () =>{
       		var myChart = echarts.init(document.getElementById('chart2'));
        	// 指定图表的配置项和数据
          var option_2 = {
             title: {
                text: 'Referer of a Website',
                subtext: 'Fake Data',
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
                    { value: 76, name: 'pass' },
                    { value: 2, name: '1' },
                    { value: 33, name: '2' },
                    { value: 484, name: '3' },
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
      		echartInit2()
    	})
    //return
    	return {
      		echartInit2
    	};
  }
};
</script>
