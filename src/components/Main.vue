<template>
  <main>
    <Jumbotron></Jumbotron>
    <Shell></Shell>
    <ActionRow></ActionRow>
  </main>
</template>

<script>
import ActionRow from "./ActionRow.vue";
import Jumbotron from "./Jumbotron.vue";
import Shell from "./Shell.vue";
export default {
  name: "Main",
  components: { ActionRow, Jumbotron, Shell },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
main {
  background-color: $dark-bg-color;
}
</style>
