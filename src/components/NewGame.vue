<template>
  <div style="width: 500px; height:500px;">
    <button v-on:click="show = !show">
      Toggle
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridSize: 16
    };
  },
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
</style>