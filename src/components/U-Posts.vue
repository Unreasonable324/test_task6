<template>
  <div class="wrapper">
    <div class="search_section">
      <input
        type="text"
        v-model="search"
        @input="searcEdit"
        placeholder="filter by auther..."
      />
    </div>
    <masonry-wall
      :items="searcEdit()"
      :min-columns="1"
      :max-columns="3"
      :column-width="300"
      :gap="15"
    >
      <template #default="{ item }">
        <UPost :post="item"></UPost>
      </template>
    </masonry-wall>
  </div>
</template>

<script>
import UPost from "./U-Post";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    UPost,
  },
  name: "U-Posts",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters(["POSTS"]),
  },
  mounted() {
    this.GET_POSTS_FROM_API();
  },
  methods: {
    ...mapActions(["GET_POSTS_FROM_API"]),
    searcEdit() {
      if (this.search) {
        return this.POSTS.filter((item) => {
          return item.userName.toLowerCase().includes(this.search.toLowerCase());
        });
      }
      return this.POSTS;
    },
  },
};
</script>

<style>
.wrapper {
  max-width: 1300px;
  margin: 50px auto;
  padding: 0 15px;
}
.search_section {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
.posts_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
  gap: 15px;
}
</style>
