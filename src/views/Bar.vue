<template>
  <div ref="container" />
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'

export default {
  mounted() {
    let data = [
      {
        State: "WY",
        小于5岁: 25635,
        "5至13岁": 1890,
        "14至17岁": 9314
      },
      {
        State: "DC",
        小于5岁: 30352,
        "5至13岁": 20439,
        "14至17岁": 10225
      },
      {
        State: "VT",
        小于5岁: 38253,
        "5至13岁": 42538,
        "14至17岁": 15757
      },
      {
        State: "ND",
        小于5岁: 51896,
        "5至13岁": 67358,
        "14至17岁": 18794
      },
      {
        State: "AK",
        小于5岁: 72083,
        "5至13岁": 85640,
        "14至17岁": 22153
      }
    ];

    let ds = new DataSet();
    let dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["小于5岁", "5至13岁", "14至17岁"], // 展开字段集
      key: "年龄段", // key字段
      value: "人口数量", // value字段
      retains: ["State"] // 保留字段集，默认为除fields以外的所有字段
    });
    // 数据被加工成 {State: 'WY', 年龄段: '小于5岁', 人口数量: 25635}

    let chart = new G2.Chart({
      container: this.$refs.container,
      forceFit: true,
      height: window.innerHeight
    });
    chart.source(dv);
    // chart.coord().transpose();
    chart.axis("State", {
      label: {
        offset: 12
      }
    });
    chart
      .intervalStack()
      .position("State*人口数量")
      .color("年龄段")
      .label('人口数量')
      .label('人口数量', {
        offset: -16, // 文本距离图形的距离
        label: { // 所有文本共享的配置信息
          fontWeight: 'bold', // 文本粗细
          fontFamily: '宋体', // 文本字体
          fontSize: 12, // 文本大小
          textAlign: 'center', // 文本对齐方式，可取值 left center right，默认为 center
          textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
        },
        custom: false, // 是否使用自定义文本，如果是true，那么就使用html显示文本
        renderer: function(text, item, index)  {
          // 配合 custom 为 true 使用，格式化文本的函数
        }
      });

    chart.render();
  }
};
</script>
