<template>
  <ul class="action-row">
    <li class="action-element" v-for="(item, i) in itemsList" :key="i">
      <a :href="item.href">
        <img src="../assets/img/buy-comics-digital-comics.png" alt="" />
        <h3>{{ item.text }}</h3></a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "ActionRow",
  data() {
    return {
      itemsList: [
        {
          imageName: "../assets/img/buy-comics-digital-comics.png",
          text: "digital comics",
          href: "#",
        },
        {
          imageName: "buy-comics-digital-comics.png",
          text: "dc merchandise",
          href: "#",
        },
        {
          imageName: "buy-comics-digital-comics.png",
          text: "subscription",
          href: "#",
        },
        {
          imageName: "buy-comics-digital-comics.png",
          text: "comic shop locator",
          href: "#",
        },
        {
          imageName: "buy-comics-digital-comics.png",
          text: "dc power visa",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.action-row {
  background-color: blue;
  padding: $padding-y * 5 $padding-x;
  display: flex;
  justify-content: center;

  .action-element {
    a {
      display: flex;
      align-items: center;
      padding: $padding-y $padding-x;

      img {
        max-width: 50px;
        margin-right: $padding-x;
      }
      h3 {
        text-transform: uppercase;
        color: white;
      }
    }
  }
}
</style>
