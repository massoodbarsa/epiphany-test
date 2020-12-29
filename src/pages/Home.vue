<template>
  <div><img :src="image" class="image" /></div>
</template>

<script>
import logo from "../assets/logo.png";

export default {
  data() {
    return {
      image: logo,
    };
  },
};
</script>

<style scoped>
.image {
  width: 600px;
  margin: 50px auto;
}
</style>