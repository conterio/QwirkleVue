<template>
<div>
  <div v-for="color in colors" :key="color">
    <div class="qwirkle-piece" v-for="shape in shapes" :key="shape" style="margin-right:5px;">
        <div v-bind:class="[color, shape]"></div>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  data() {
    return {
      shapes: [ 'circle', 'star-six', 'clover', 'diamond', 'ninja-star', 'square' ],
      colors: [ 'blue', 'yellow', 'orange', 'purple', 'green', 'red' ]
    };
  }
};
</script>

<style scoped>

</style>