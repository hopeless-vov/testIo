<template>
  <div class="navBar">
    <v-app-bar
      color="secondary">
      <div
        class="navBar__content global-setting">
        <h2>Logotype</h2>
        <div
          class="navBar__content__menu">
          <div
            :class="burger ? 'changeBurger' : 'burger'"
            class="burgerMenu"
            @click="burger = !burger">
            <div
              class="bar1" />
            <div
              class="bar2" />
            <div
              class="bar3" />
          </div>
          <div
            class="navBar__content__menu__items">
            <ul
              :class="burger ? 'active' : ''">
              <li>
                <span>
                  My Page
                </span>
              </li>
              <li>
                <span>
                  SportZal
                </span>
              </li>
              <li>
                <span>
                  Information
                </span>
              </li>
              <li>
                <span>
                  <v-icon
                    color="#fff">
                    mdi-logout
                  </v-icon>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'MainNavbar',
  data: () => {
    return {
      burger: false,
    };
  },
  methods: {
  },
};
</script>
<style lang="scss">
.navBar {
  top: 0;
  position: sticky;
  z-index: 999;
  &__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    &__menu {
      .burgerMenu {
        display: none;
      }
       .burger {
          display: none;
          cursor: pointer;
        }
        .bar1, .bar2, .bar3 {
          width: 20px;
          height: 3px;
          background-color: #fff;
          margin: 3px 0;
          transition: 0.4s;
        }
        .changeBurger {
          cursor: pointer;
          .bar1 {
            transform: rotate(-45deg) translate(-4px, 5px);
          }
          .bar2 {
            opacity: 0;
          }
          .bar3 {
            transform: rotate(45deg) translate(-4px, -5px);
          }
        }
      &__items {
        ul {
          list-style: none;
          display: flex;
          gap: 50px;
          padding: 0px!important;
          transform: translateX(0px);
          li {
            cursor: pointer;
          }
        }
      }
      @media (max-width: 767px) {
        .burgerMenu {
          display: inline-block;
        }
        &__items {
          ul {
            display: grid;
            position: absolute;
            background-color: var(--v-secondary-base);
            width: 100%;
            left: 0;
            right: 0;
            top: 48px;
            gap: 0px;
            height: 100vh;
            align-content: start;
            transform: translateX(-1000px);
            transition: 0.6s;
            li {
              border-bottom: 1px solid rgb(255, 255, 255, 0.5);
              padding: 10px 0px 10px 30px;
              transition: 0.7s;
            }
            li:last-child {
              border: none;
            }
            li:hover {
             transition: 0.7s;
            }
          }
          .active {
            transform: translateX(0px);
            transition: 0.6s;
          }
        }
      }
    }
  }
  .v-app-bar {
    color: #fff!important;
    height: auto!important;
  }
  .v-toolbar {
    box-shadow: none!important;
    &__content {
      height: auto!important;
    }
  }
  .v-sheet {
    backdrop-filter: blur(10px);
  }
}
</style>
