<template>
  <a :href="imageLink" class="comic-card">
    <img :src="imageSrc" :alt="imageAlt" />
    <h5>{{ title }}</h5>
  </a>
</template>

<script>
export default {
  name: "ComicCard",
  props: {
    imageSrc: String,
    imageAlt: String,
    title: String,
    imageLink: {
      default: "#",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.comic-card {
  display: inline-block;
  img {
    width: 100%;
  }
  h5 {
    color: white;
    text-transform: uppercase;
    padding-top: $padding-y;
  }
}
</style>
