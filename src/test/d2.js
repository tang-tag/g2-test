import { View } from '@antv/data-set'

// 初始模拟数据
const testCSV = `year,category,sold
2001,a,100
2001,b,300
2002,a,50`


// Connector 接入数据
const dv = new View().source(testCSV, {
  type: 'csv',
})

dv.transform({
  type: 'map',
  callback: (row)=> {
    row.sold = +row.sold
    return row
  },
})

dv.transform({
  type: 'percent',
  field: 'sold',           // 统计销量
  dimension: 'year',       // 每年的占比
  groupBy: ['category'], // 以不同产品类别为分组，每个分组内部各自统计占比
  as: 'percent',            // 结果存储在 percent 字段
})

console.log( dv.rows )
