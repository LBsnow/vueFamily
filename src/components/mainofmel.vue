<template>
  <div>
    <div id="melbar"></div>
    <div id="melpie"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import '../../node_modules/echarts/theme/halloween.js';
  import data from '../../static/data/data.json';

  export default {
    data() {
      return {
        chart: null
      };
    },
    methods: {
      drawbar(id) {
      	// 初始化一个echart的实例
        this.chart = echarts.init(document.getElementById(id), 'halloween');
        // 用setoption方法来配置数据和显示生成图表
        this.chart.setOption({
        	// 鼠标放上去的时候显示提示，用轴的数据进行提示
          tooltip: {
            trigger: 'axis'
          },
          // 右上角的工具的展示描述
          toolbox: {
            feature: {
            	// 变化的类型，比如折线图，条形图
              magicType: {
                type: ['line', 'bar']
              },
              // 保存图片的工具
              saveAsImage: {},
              // 数据视图的工具
              dataView: {}             
            },
            // 这推工具的位置的设定，绝对定位的方式
            right: 15,
            top: 30
          },
          // 就是条形格子的设定
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel:true
          },
          // x轴的数据描述
          xAxis: [
            {
              type: 'category',
              // boundrayGap: false,
              data: data.mellow.leixing
            }
          ],
          // y轴的数据描述
          yAxis: [
            {
              type: 'value',
              name: '周销售量',
              max: 40
            }
          ],
          // 系列展示
          series: [
            {
              name: '品牌销售情况',
              type: 'bar',
              // 每个条形图头部的表明数据
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              // 显示的标志
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              data: data.mellow.number
            }
          ]
        });
      },
      drawpie(id, centery) {
        this.chart = echarts.init(document.getElementById(id), 'halloween');
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            // 计算百分比的数据
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          toolbox: {
            feature: {
              saveAsImage: {},
              dataView: {}
            },
            right: 15,
            top: 10
          },
          legend: {
            orient: 'vertical',
            left: 5,
            top: 10,
            data: data.mellow.leixing,
          },
          series: [
            {
              name: '人数',
              type: 'pie',
              // 展示的圆的大小的，数据越大，圆的大小越大
              radius: '70%',
              // 展示的圆的位置
              center: ['50%', centery],
              data: data.mellow.numberData,
              itemStyle: {
              	// 强调的展示
                emphasis: {
                  shadowBlur: 10,
                  shadowOffset: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.drawbar('melbar');
        if (document.body.clientWidth < 470) {
          this.drawpie('melpie', '70%');
        } else {
          this.drawpie('melpie', '60%');
        }
        
        var that = this;
        var resizeTimer = null;
        window.onresize = function() {
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            that.drawbar('melbar');
            if (document.body.clientWidth < 470) {
              that.drawpie('melppie', '70%');
            } else {
              that.drawpie('melpie', '60%');
            }
          }, 100);
        }
      });
    }
  }

</script>

<style scoped>
  #melbar,
  #melpie {
    position: relative;
    left: 50%;
    width: 90%;
    height: 600px;
    margin-left: -45%;
    box-shadow: 0 0 10px #BF382A;
    border-radius: 10px;
  }  
  #melpie {
    margin-top: 30px;
  }
  @media screen and (max-width: 470px) {
    #melpie {
      height: 500px;
    }
  }
</style>