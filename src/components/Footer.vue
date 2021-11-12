<template>
  <footer cla>
    <nav class="logo-bg container">
      <ul class="footer-list">
        <li v-for="(item, i) in itemsList" :key="i" class="footer-list-item">
          <h3 class="nav-title">{{ item.groupName }}</h3>
          <ul class="nav-list">
            <li
              v-for="(link, k) in item.itemsList"
              :key="`${i}-${k}`"
              class="nav-item"
            >
              <a href="#">{{ link.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="action-block">
      <div class="action-row container">
        <a href="#" class="sign-up-button">SIGN-UP NOW!</a>
        <div class="social-section">
          <h3>FOLLOW US</h3>
          <ul class="social-list">
            <li v-for="(social, i) in socialList" :key="i">
              <a :href="social.href"
                ><img
                  :src="require(`../assets/img/${social.image}`)"
                  :alt="social.title + ' logo'"
              /></a>
            </li>
          </ul>
        </div>
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
            { title: "comics", href: "#" },
            { title: "movies", href: "#" },
            { title: "tv", href: "#" },
            { title: "games", href: "#" },
            { title: "video", href: "#" },
            { title: "news", href: "#" },
          ],
        },
        {
          groupName: "shop",
          itemsList: [
            { title: "shop DC", href: "#" },
            { title: "shop DC Collectibles", href: "#" },
          ],
        },
        {
          groupName: "dc",
          itemsList: [
            { title: "term of use", href: "#" },
            { title: "privacy policy (new)", href: "#" },
            { title: "ad choices", href: "#" },
            { title: "advertising", href: "#" },
            { title: "jobs", href: "#" },
            { title: "subscriptions", href: "#" },
            { title: "talent workshop", href: "#" },
            { title: "CPSC Certificates", href: "#" },
            { title: "Rattings", href: "#" },
            { title: "shop help", href: "#" },
            { title: "contact us", href: "#" },
          ],
        },
        {
          groupName: "sites",
          itemsList: [
            { title: "DC", href: "#" },
            { title: "MAD magazine", href: "#" },
            { title: "DC Kids", href: "#" },
            { title: "DC Universe", href: "#" },
            { title: "DC Power Visa", href: "#" },
          ],
        },
      ],
      socialList: [
        {
          name: "facebook",
          href: "#",
          image: "footer-facebook.png",
        },
        {
          name: "twitter",
          href: "#",
          image: "footer-twitter.png",
        },
        {
          name: "youtube",
          href: "#",
          image: "footer-youtube.png",
        },
        {
          name: "pinterest",
          href: "#",
          image: "footer-pinterest.png",
        },
        {
          name: "periscope",
          href: "#",
          image: "footer-periscope.png",
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
    background-size: 500px;
    background-position-y: center;
    text-align: left;

    overflow: hidden;

    .footer-list {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      flex-direction: column;
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
      width: 200px;
      max-height: 300px;
    }
    .nav-item {
      a {
        color: $text-grey-color;
        text-transform: capitalize;
        text-decoration: none;
      }
    }
  }
  .action-block {
    background-color: $grey-bg-color;
    .action-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: $padding-y * 2 $padding-x;

      .sign-up-button {
        color: white;
        border: 2px solid $text-accent-color;
        text-decoration: none;
        padding: $padding-y $padding-x;
        font-weight: bold;
      }
      .social-section {
        display: flex;
        align-content: center;
        align-items: center;

        h3 {
          color: $text-accent-color;
        }
        .social-list {
          list-style: none;
          display: flex;

          li {
            padding: $padding-y $padding-x/2;
          }
        }
      }
    }
  }
}
</style>
