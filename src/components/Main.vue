<template>
  <main>
    <div class="main-block container">Content Goes Here</div>
    <ActionRow></ActionRow>
  </main>
</template>

<script>
import ActionRow from "./ActionRow.vue";
export default {
  name: "Main",
  components: { ActionRow },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
main {
  background-color: black;
}
.main-block {
  font-weight: bold;
  font-size: 30px;
  color: white;

  padding: $padding-y * 5 $padding-x;
  text-align: start;
}
</style>
