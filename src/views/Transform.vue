<template lang="">
  <div>
    
  </div>
</template>

<script>
import G2 from '@antv/g2'
import { View } from '@antv/data-set'

export default {
  mounted() {
    const testCSV = `Expt,Run,Speed
1,1,850
1,2,740
1,3,900
1,4,1070`;

    const dv = new View().source(testCSV, {
      type: 'csv'
    });
    console.log(dv.rows);
  },
}
</script>