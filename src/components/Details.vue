<template>
  <div>
    <h1>{{title}}</h1>
    <img :src="laptopImg" />
  </div>
</template>

<script>
import laptopImg from "../assets/images/laptop.jpg";

export default {
  data: function() {
    return {
      laptopImg: laptopImg,
      title: 'Details'
    };
  }
};
</script>

