<template>
  <handsontable :data="data" :settings="settings" ref="table"></handsontable>
</template>

<script>
import Handsontable from '../components/handsontable'

export default {
  components: {
    Handsontable
  },

  data () {
    setTimeout(() => {
      const table = this.$refs['table'].table
      console.log(1)
      table.setDataAtCell(1, 1, 123)
      console.log(2)

      this.data[1][1] = '123'
    }, 100)
    return {
      data: [
        ['', 'Kia', 'Nissan', 'Toyota', 'Honda'],
        ['2008', 10, 11, 12, 13],
        ['2009', 20, 11, 14, 13],
        ['2010', 30, 15, 12, 13]
      ],
      settings: {
        colHeaders: true,
        rowHeaders: true,
        stretchH: 'all',
        columnSorting: true,
        contextMenu: true,
        afterChange: function (changes, source) {
          console.log(arguments)
        }
      }
    }
  }
}
</script>
