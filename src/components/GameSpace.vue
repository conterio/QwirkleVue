<template>
<div>
  <div class="game-space">
    <QwirklePiece v-if="shape && color" v-bind:shape="shape" v-bind:color="color"></QwirklePiece>
  </div>
</div>
</template>

<script>
import QwirklePiece from './pieces/QwirklePiece'
export default {
  name: 'GameSpace',
  components: {QwirklePiece},
  props: {
    shape: String,
    color: String
  }
};
</script>

<style scoped>
.game-space {
  border: .25em solid black;
  width: 5.1em;
  height: 5.1em;
}

</style>