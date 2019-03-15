<template>
<div class="container">
  <div v-for="row in rows" :key="row">
    <div v-for="space in row.spaces" :key="space">
     <GameSpace v-bind:shape="space.shape" v-bind:color="space.color"></GameSpace>
    </div>
  </div>
</div>
</template>

<script>
import GameSpace from './GameSpace'
export default {
  name: 'GameBoard',
  data() {
    return {
      rows: [
        {
          name: 'column1',
          spaces: [
            {'shape': 'diamond', 'color': 'blue'},
            {'shape': 'diamond', 'color': 'blue'},
            {'shape': 'diamond', 'color': 'blue'},
            {'shape': 'diamond', 'color': 'blue'},
            {'shape': 'diamond', 'color': 'blue'},
            {'shape': 'circle', 'color': 'yellow'},
            {'shape': 'circle', 'color': 'yellow'},
            {'shape': 'circle', 'color': 'yellow'},
            {'shape': 'ninja-star', 'color': 'red'},
            {},
            {},
            {},
            {},
            {'shape': 'clover', 'color': 'green'}
          ]
        },
        {
          name: 'column2',
          spaces: [
            {'shape': 'diamond', 'color': 'blue'},
            {'shape': 'circle', 'color': 'green'},
            {'shape': 'circle', 'color': 'yellow'},
            {'shape': 'circle', 'color': 'yellow'},
            {'shape': 'ninja-star', 'color': 'red'},
            {},
            {'shape': 'ninja-star', 'color': 'blue'}
          ]
        },
        {
          name: 'column2',
          spaces: [
            {'shape': 'diamond', 'color': 'blue'},
            {'shape': 'circle', 'color': 'yellow'},
            {'shape': 'circle', 'color': 'yellow'},
            {'shape': 'ninja-star', 'color': 'red'},
            {},
            {'shape': 'ninja-star', 'color': 'blue'}
          ]
        }
      ]
    };
  },
  components: {GameSpace},
  methods: {
    increase() {
      return (this.num += 1);
    },
    beforeEnter(el) {
      console.log('beforeEnter');
    },
    enter(el, done) {
      console.log('enter');
      done();
    },
    beforeLeave(el) {
      console.log('beforeLeave');
    },
    leave(el, done) {
      console.log('leave');
      done();
    }
  }
};

</script>

<style scoped>
.clear {
  clear:both;
}

.container {
  display: flex;
  justify-content: center;
}
</style>