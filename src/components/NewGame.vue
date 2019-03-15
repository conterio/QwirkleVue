<template>
  <div style="width: 500px; height:500px;">
      <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade" 	
      v-on:before-enter="beforeEnter"
			v-on:enter="enter"
		
			v-on:before-leave="beforeLeave"
			v-on:leave="leave">
    <p v-if="show">hello</p>
  </transition>
		<transition
			mode="out-in"
			v-on:before-enter="beforeEnter"
			v-on:enter="enter"
		
			v-on:before-leave="beforeLeave"
			v-on:leave="leave"
			:css="false">
		<p>Testing</p>
		</transition>
	</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      num: 1
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