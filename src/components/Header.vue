<template>
  <header class="container">
    <nav class="navbar">
      <img src="../assets/img/dc-logo.png" alt="logo" />
      <ul class="navbar-list">
        <li
          v-for="(item, i) in navbarItems"
          :key="i"
          class="navbar-item"
          :class="activeIndex === i ? 'active' : ''"
        >
          <a :href="item.href" @click="activeIndex = i">{{ item.text }} </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      imageAsset: "./../assets/img/dc-logo.png",
      activeIndex: 1,
      navbarItems: [
        {
          text: "characters",
          href: "#",
        },
        {
          text: "comics",
          href: "#",
        },
        {
          text: "movies",
          href: "#",
        },
        {
          text: "tv",
          href: "#",
        },
        {
          text: "games",
          href: "#",
        },
        {
          text: "collectibles",
          href: "#",
        },
        {
          text: "videos",
          href: "#",
        },
        {
          text: "fans",
          href: "#",
        },
        {
          text: "news",
          href: "#",
        },
        {
          text: "shop",
          href: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  //   padding: 10px 0px;
  img {
    padding: 10px;
    height: 80px;
  }
  .navbar-list {
    list-style: none;
    display: flex;
    align-items: stretch;
    margin: 0;
    .navbar-item {
      display: flex;
      align-items: center;
      border-bottom: $nav-border-thickness solid transparent;

      &.active {
        border-bottom: $nav-border-thickness solid $text-accent-color;

        a {
          color: $text-accent-color;
        }
      }
      //   height: 10%;
      a {
        display: inline-block;
        text-decoration: none;
        padding: $padding-y $padding-x;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;
        color: $text-primary-color;
        // height: 100%;
      }
    }
  }
}
</style>
