<template>
 <div class="qwirkle-piece"><div :class="[shape, color]"></div></div>
</template>

<script>
export default {
  name: 'QwirklePiece',
  props: {
    shape: String,
    color: String
  }
}
</script>

<style scoped>

.qwirkle-piece {
  width: 5em;
  height: 5em;
  padding: 1em;
  -moz-box-shadow:inset 0px 0px 7px 0px #8c8e8f;
  -webkit-box-shadow:inset 0px 0px 7px 0px #8c8e8f;
  box-shadow:inset 0px 0px 7px 0px #8c8e8f;
  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #000000), color-stop(1, #000000));
  background:-moz-linear-gradient(top, #000000 5%, #000000 100%);
  background:-webkit-linear-gradient(top, #000000 5%, #000000 100%);
  background:-o-linear-gradient(top, #000000 5%, #000000 100%);
  background:-ms-linear-gradient(top, #000000 5%, #000000 100%);
  background:linear-gradient(to bottom, #000000 5%, #000000 100%);
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000000',GradientType=0);
  background-color:#000000;
  -moz-border-radius:3px;
  -webkit-border-radius:3px;
  border-radius:3px;
  border:1px solid #0b0e07;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:15px;
  text-decoration:none;
  text-shadow:0px 1px 0px #263666;
}
.qwirkle-piece:hover {
  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #000000), color-stop(1, #000000));
  background:-moz-linear-gradient(top, #000000 5%, #000000 100%);
  background:-webkit-linear-gradient(top, #000000 5%, #000000 100%);
  background:-o-linear-gradient(top, #000000 5%, #000000 100%);
  background:-ms-linear-gradient(top, #000000 5%, #000000 100%);
  background:linear-gradient(to bottom, #000000 5%, #000000 100%);
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000000',GradientType=0);
  background-color:#000000;
}
.qwirkle-piece:active {
  position:relative;
  top:1px;
}

.circle {
  width: 0;
  height: 0;
  border-left: 1.5em solid red;
  border-right: 1.5em solid red;
  border-bottom: 3em solid red;
  position: relative;
  border-radius: 50%;
}

.star-six {
  width: 0;
  height: 0;
  border-left: 1.5em solid transparent !important;
  border-right: 1.5em solid transparent !important;
  border-bottom: 3em solid red;
  position: relative;
  top: -.5em
}
.star-six:after {
  width: 0;
  height: 0;
  border-left: 1.5em solid transparent;
  border-right: 1.5em solid transparent;
  border-top: 3em solid red;
  position: absolute;
  content: "";
  top: .9em;
  left: -1.5em;
}

.clover {
  background: red; 
  height: 3em; 
  position: relative; 
  left: 1em;
  width: 1em; 
  border-radius: 5px;
}

.clover:after {
  background: red; 
  content: ""; 
  height: 1em; 
  left: -1em; 
  position: absolute; 
  top: 1em; 
  width: 3em; 
  border-radius: 5px;
}
.clover.blue, .clover.blue:after {
  background: blue;
}
.clover.yellow, .clover.yellow:after {
  background: yellow;
}
.clover.orange, .clover.orange:after {
  background: orange;
}
.clover.purple, .clover.purple:after {
  background: purple;
}
.clover.green, .clover.green:after {
  background: green;
}
.clover.red, .clover.red:after {
  background: red;
}

.diamond {
  width: 0;
  height: 0;
  border: 1.5em solid transparent;
  border-left: 1.5em solid transparent !important;
  border-right: 1.5em solid transparent !important;
  border-top: 1.5em solid transparent !important;
  border-bottom-color: red;
  position: relative;
  top: -1.5em;
}
.diamond:after {
  content: '';
  position: absolute;
  left: -1.5em;
  top: 1.5em;
  width: 0;
  height: 0;
  border: 1.5em solid transparent;
  border-top-color: red;
}


.ninja-star::after,
.ninja-star::before {
    position: absolute;
    top: -40px;
    left: -10px;
    content: "\2726";
    font-size: 5rem;
}

.ninja-star::after { /* The foreground star */
    -webkit-background-clip: text;
}

/* Demo styling */
body {
    background: #fbd629;
    padding: 0 2rem;
}

.ninja-star {
    position: relative;
}

.square {
  width: 0;
  height: 0;
  border-right: 3em solid red;
  border-bottom: 3em solid red;
  position: relative;
}


.blue {
  border-color: blue;
  color:blue;
}
.blue:after {
  border-top-color:blue;
}

.yellow {
  border-color:yellow;
}
.yellow:after {
  border-top-color:yellow;
  color:yellow;
}

.orange {
  border-color:orange;
  color:orange;
}
.orange:after {
  border-top-color:orange;
}

.purple {
  border-color:purple;
  color:purple;
}
.purple:after {
  border-top-color:purple;
}

.green {
  border-color:green;
  color:green;
}
.green:after {
  border-top-color:green;
}

.red {
  border-color:red;
  color:red;
}
.red:after {
  border-top-color:red;
}


</style>