<template>
  <div class="container">
    <div class="label">current series</div>
    <div class="scaffold">
      <ComicCard
        v-for="(comic, i) in comicsList"
        :key="i"
        :title="comic.series"
        :imageSrc="comic.thumb"
        :imageAlt="comic.series + ' thumb'"
      ></ComicCard>
    </div>
  </div>
</template>

<script>
import jsonArray from "@/assets/dc-comics.json";
import ComicCard from "./ComicCard.vue";
export default {
  name: "Shell",
  components: { ComicCard },
  data() {
    return {
      comicsList: jsonArray,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.container {
  text-align: left;
}
.label {
  color: white;
  padding: $padding-y $padding-x;
  background-color: $text-accent-color;
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  transform: translateY(-50%);
}
.scaffold {
  padding: $padding-y $padding-x;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  .comic-card {
    flex-basis: calc(100% / 6 - (20px * 6) / 5);
    padding-bottom: $padding-y * 2;
  }
}
</style>
