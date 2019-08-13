import { View } from '@antv/data-set'

// 初始模拟数据
const testCSV = `Expt,Run,Speed
1,1,850
1,2,740
1,3,900
1,4,1070
1,2,1080`

// Connector 接入数据
const dv = new View().source(testCSV, {
  type: 'csv',
})

// 过滤数据
dv.transform({
  type: 'filter',
  callback: (row) => (row.Run !== '1'),
})

// 数据加工
dv.transform({
  type: 'map',
  callback: (row) => {
    row.Run *= 10
    return row
  },
})

// 筛选字段
dv.transform({
  type: 'pick',
  fields: ['Run', 'Speed'], // 决定保留哪些字段，如果不传，则返回所有字段
})

// 输出数据
// console.log(dv.rows)

// 获取索引0-2的子级
// dv.transform({
//   type: 'subset',
//   startRowIndex: 1, // 保留行的起始索引
//   endRowIndex: 2, // 保留行的结束索引
//   fields: ['Run', 'Speed'], // 保留字段集
// })

dv.transform({
  type: 'partition',
  groupBy: ['Run'], // 以year字段进行分组
  orderBy: ['Speed'] // 以month字段进行排序
})

// 输出数据
console.log(dv.rows)
