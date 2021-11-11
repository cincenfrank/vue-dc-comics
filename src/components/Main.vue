<template>
  <main>
    <div class="main-block">Content Goes Here</div>
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

.main-block {
  font-weight: bold;
  font-size: 30px;
  color: white;
  background-color: black;
  padding: $padding-y * 5 $padding-x;
  text-align: start;
}
</style>
