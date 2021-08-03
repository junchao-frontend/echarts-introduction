<template>
  <div>
    <div id="main" style="width:600px;height: 400px;border: 1px solid red"></div>
    <button id="add">增加数据</button>
    <div id="pie" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
    }
  },
  mounted () {
    this.initBar();
    //this.initPie();
  },
  methods: {
    initBar () {
      // var myChart = this.$echarts.init(document.getElementById('main'), 'dark');
      // // 指定图表的配置项和数据
      // var xDataArr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      // var yDataArr = [5, 20, 36, 10, 10, 20]

      var myChart = this.$echarts.init(document.getElementById('main'), 'dark');
      // 指定图表的配置项和数据
      var xDataArr = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      var yDataArr = [5, 20, 36, 10, 10, 20]
      var option = {
        animation:true, //开启动画
        //animationDuration:7000, 动画时长
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          type:'category',
          data: xDataArr
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: yDataArr,
          itemStyle: {
            color: {
              type: 'linear', //线性渐变
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0, color: 'red' //0%出的颜色
                },
                {
                  offset: 1, color: 'skyblue' //0%出的颜色
                }
              ]
            }
          }
        }]
      }
      myChart.setOption(option)
      // 监听window窗口大小变化的事件
      window.onresize = function(){
        console.log('111111')
        this.myChart.resize()
      }

      var btnAdd = document.querySelector('#add')
      btnAdd.onclick =function() {
        //console.log(btnAdd)
        xDataArr.push('小明')
        yDataArr.push(30)
        var option = {
          xAxis:{
            data:xDataArr
          },
          series:[{
            data:yDataArr
          }]
        }
        myChart.setOption(option)
      }
      
    },
    // initPie () {
    //   var myChart = this.$echarts.init(document.getElementById('pie'));
    //   var option = {
    //     title: {
    //       text: '某站点用户访问来源',
    //       subtext: '纯属虚构',
    //       left: 'center'
    //     },
    //     tooltip: {
    //       trigger: 'item'
    //     },
    //     legend: {
    //       orient: 'vertical',
    //       left: 'left',
    //     },
    //     series: [
    //       {
    //         name: '访问来源',
    //         type: 'pie',
    //         radius: '50%',
    //         data: [
    //           {
    //             value: 1048, 
    //             name: '搜索引擎',
    //             emphasis:{
    //               itemStyle:{
    //                 color:'pink'
    //               },
    //               label:{
    //                 color:'skyblue'
    //               }
    //             }
    //            },
    //           { value: 735, name: '直接访问' },
    //           { value: 580, name: '邮件营销' },
    //           { value: 484, name: '联盟广告' },
    //           { value: 300, name: '视频广告' }
    //         ],
    //         emphasis: {
    //           itemStyle: {
    //             shadowBlur: 10,
    //             shadowOffsetX: 0,
    //             shadowColor: 'rgba(0, 0, 0, 0.5)'
    //           }
    //         }
    //       }
    //     ]
    //   }
    //   myChart.setOption(option)
    // },
  }
}
</script>
