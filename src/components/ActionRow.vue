<template>
  <div class="action-row-block">
    <ul class="action-row container">
      <li class="action-element" v-for="(item, i) in itemsList" :key="i">
        <a :href="item.href">
          <img
            :src="require(`../assets/img/${item.imageName}`)"
            :alt="`${item.text} image`"
          />
          <h3>{{ item.text }}</h3></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ActionRow",
  data() {
    return {
      itemsList: [
        {
          imageName: "buy-comics-digital-comics.png",
          text: "digital comics",
          href: "#",
        },
        {
          imageName: "buy-comics-merchandise.png",
          text: "dc merchandise",
          href: "#",
        },
        {
          imageName: "buy-comics-subscriptions.png",
          text: "subscription",
          href: "#",
        },
        {
          imageName: "buy-comics-shop-locator.png",
          text: "comic shop locator",
          href: "#",
        },
        {
          imageName: "buy-dc-power-visa.svg",
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
.action-row-block {
  background-color: $text-accent-color;
  .action-row {
    padding: $padding-y * 5 $padding-x;
    display: flex;
    justify-content: center;
    align-items: center;

    .action-element {
      flex-basis: auto;
      flex-shrink: 0;
      a {
        display: flex;
        align-items: center;
        padding: $padding-y $padding-x;

        img {
          max-width: 50px;
          max-height: 50px;
          margin-right: $padding-x;
        }
        h3 {
          flex-shrink: 0;
          text-transform: uppercase;
          color: white;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
