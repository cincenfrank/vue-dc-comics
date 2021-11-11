<template>
  <footer>
    <nav class="logo-bg">
      <ul class="footer-list">
        <li v-for="(item, i) in itemsList" :key="i" class="footer-list-item">
          <h3 class="nav-title">{{ item.groupName }}</h3>
          <ul class="nav-list">
            <li
              v-for="(link, k) in item.itemsList"
              :key="`${i}-${k}`"
              class="nav-item"
            >
              <a href="#">link</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="action-row">
      <a href="#" class="sign-up-button">SIGN-UP NOW!</a>
      <div class="social-section">
        <h3>FOLLOW US</h3>
        <ul>
          <li>
            <a href="#"><img src="link" alt="link" /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      itemsList: [
        {
          groupName: "dc comics",
          itemsList: [
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
          ],
        },
        {
          groupName: "shop",
          itemsList: [
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
          ],
        },
        {
          groupName: "dc",
          itemsList: [
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
          ],
        },
        {
          groupName: "sites",
          itemsList: [
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
            { title: "characters", href: "#" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

footer {
  background-image: url("../assets/img/footer-bg.jpg");
  overflow: hidden;
  //   height: 500px;
  nav {
    padding: $padding-y * 5 $padding-x;
    height: 100%;
    background-image: url("../assets/img/dc-logo-bg.png");
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: 700px;
    background-position-y: center;
    text-align: left;

    .footer-list {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .footer-list-item {
      padding: $padding-y $padding-x;
    }
    ul {
      display: inline-block;
      padding: 0;
      list-style: none;
      color: white;
      text-transform: uppercase;
    }
    .nav-item {
      a {
        color: grey;
        text-transform: capitalize;
      }
    }
  }
  .action-row {
    background-color: grey;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: $padding-y * 3 $padding-x;

    .sign-up-button {
      color: white;
      border: 2px solid blue;
      text-decoration: none;
      padding: $padding-y $padding-x;
    }
    .social-section {
      display: flex;
      align-content: center;
      h3 {
        color: blue;
      }
    }
  }
}
</style>
