<template>
  <div class="jess"></div>
</template>

<script>

export default {
  name: 'jess'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  $eye-color: #654321;
  $glasses-color: purple;
  $skin-color: #faf0e6;
  $skin-color-dark: darken($skin-color, 20%);
  $hair-color: #654321;
  $shirt: purple;
  $skirt: $shirt;
  $belt: darken($shirt, 8%);
  $belt-buckle: $belt;
  $shoe: $belt;
  
  .jess:before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 90px;
    height: 120px;
    left: 205px;
    top: 0;
    background-color: #faf0e6;
    background-image: radial-gradient(circle, #000000 15%, #654321 15%, #654321 35%, #ffffff 30%, #ffffff 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle, #000000 15%, #654321 15%, #654321 35%, #ffffff 30%, #ffffff 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(ellipse, #faf0e6 40%, #800080 10%, #800080 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(ellipse, #faf0e6 40%, #800080 10%, #800080 50%, rgba(0, 0, 0, 0) 50%), linear-gradient(0deg, transparent 20%, purple 20%), linear-gradient(#faf0e6, #faf0e6), radial-gradient(circle, #faf0e6 40%, #e9bd91 40%, #e9bd91 53%, rgba(0, 0, 0, 0) 42%), linear-gradient(#faf0e6, #faf0e6), linear-gradient(0deg, transparent 20%, white 20%), radial-gradient(ellipse, #000000 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle, #654321 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle, #654321 50%, rgba(0, 0, 0, 0) 50%);
    background-repeat: no-repeat;
    background-size: 30px 30px, 30px 30px, 53px 43px, 53px 43px, 100% 5px, 25px 13px, 25px 25px, 60px 15px, 35px 22px, 65px 30px, 180px 160px, 65px 120px;
    background-position: 10px 50px, 50px 50px, -2px 45px, 39px 45px, center 60px, center 70%, center 75%, center 80%, center 85%, center 95%, -75px -95px, 55px -50px;
    border-radius: 40px;
}

.jess {
  height: 500px;
  width: 500px;
  position: relative;
  display: inline-block;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(to right, #faf0e6, #faf0e6), radial-gradient(ellipse, #faf0e6 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(ellipse, #faf0e6 50%, rgba(0, 0, 0, 0) 50%), linear-gradient(to right, #570057, #570057 35%, #570057 35%, #570057 65%, #570057 65%), radial-gradient(ellipse at center 100px, #800080 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(ellipse at center 60px, #800080 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(ellipse at center 18px, #800080 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(ellipse, #faf0e6 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(ellipse at center 28px, #faf0e6 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(ellipse, #654321 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(ellipse at center 18px, #570057 50%, rgba(0, 0, 0, 0) 50%), radial-gradient(ellipse at center 18px, #570057 50%, rgba(0, 0, 0, 0) 50%), linear-gradient(to right, #faf0e6, #faf0e6 47%, #e9bd91 47%, #e9bd91 50%, #faf0e6 50%); 
  background-repeat: no-repeat;
  background-size: 35px 10px, 35px 45px, 30px 35px, 30px 35px, 85px 15px, 150px 145px, 130px 190px, 150px 65px, 90px 220px, 220px 40px, 190px 270px, 80px 25px, 80px 25px, 75px 120px;
  background-position: center 115px, center 92px, 190px 55px, 280px 55px, center 221px, center 180px, center 130px, center 170px, 175px 102px, 190px 125px, center -42px, 181px 400px, 237px 400px, center 300px;   
}

.jess:after {
  content: '';
  position: absolute;
  width: 30px;
  height: 100px;
  left: 349px;
  top: 60px;
  border-radius: 100px;
  background-color: $skin-color;
  -webkit-transform-origin:0% 100%;
  transform-origin: 0% 100%;
  -webkit-animation:arm 2s linear infinite alternate;
  -moz-animation: arm 2s linear infinite alternate;
}

@-webkit-keyframes arm {
  from { 
    -webkit-transform: rotate(0deg); 
  }
  50% { 
    -webkit-transform: rotate(10.7deg);
  }
  to { 
    -webkit-transform: rotate(0deg); 
  }
}

@keyframes arm {
  from { 
    transform: rotate(0deg);
  }
  50% { 
    transform: rotate(10.7deg);
  }
  to { 
    transform: rotate(0deg); 
  }
}
</style>
