<template>
  <UPosts />
</template>

<script>
import UPosts from "./components/U-Posts.vue";

export default {
  name: "App",
  components: {
    UPosts,
  },
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
body {
  background: #e1ebed;
}
</style>
