<template>
<div class="container"> 
  <div v-for="color in colors" :key="color" style="float:left">
    <div v-for="shape in shapes" :key="shape" style="margin-right:5px;">
        <QwirklePiece v-bind:shape="shape" v-bind:color="color"></QwirklePiece>
    </div>
  </div>
</div>
</template>

<script>

import QwirklePiece from './pieces/QwirklePiece'
export default {
  name: 'qwirklePieces',
  components: {QwirklePiece},
  data() {
    return {
      shapes: [ 'circle', 'star-six', 'clover', 'diamond', 'ninja-star', 'square' ],
      colors: [ 'blue', 'yellow', 'orange', 'purple', 'green', 'red' ]
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>