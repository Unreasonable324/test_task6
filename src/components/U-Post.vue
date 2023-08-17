<template>
  <div class="post_wrapper">
    <div class="post-title">
      <p>{{ post.title }}</p>
    </div>
    <div class="post-body">
      <p>
        {{ post.body }}
      </p>
    </div>
    <div class="post-user_name">{{ post.userName }}</div>
  </div>
</template>

<script>
export default {
  name: "U-Post",
  components: {},
  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.post_wrapper {
  background: #fff;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 2px 2px 5px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 2px 2px 5px 0px rgba(34, 60, 80, 0.2);
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;

}
.post-title p {
  color: rgb(0, 123, 255);
  font-weight: bold;
  font-size: 22px;
}
.post-body {
}
p {
  line-height: 26px;
  font-size: 20px;
}
p::first-letter {
  text-transform: uppercase;
}
.post-user_name {
  color: rgb(190, 199, 208);
  height: 18px;
}
</style>
