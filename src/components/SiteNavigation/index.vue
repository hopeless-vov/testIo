<template>
  <div
    v-scroll="onScroll"
    class="site-navigation">
    <ul
      class="navigation">
      <li
        v-for="item in items"
        :key="item.id"
        @click="toTop(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SiteNavigation',
  data: () => {
    return {
      activeElement: '',
      items: [
        'Sport Club',
        'About',
        'Learn More',
        'Motivation',
        'Our club',
        'Join us',
        'Benefits',
        'Contact Us',
      ],
    };
  },
  methods: {
    toTop(itemForScroll, e) {
      console.log('eeee', e);
      let item = document.getElementById(itemForScroll);
      this.$emit('toTop', item.offsetTop);
    },
    onScroll() {
      this.items.forEach(el => {
        let item = document.getElementById(el);
        if (item.offsetTop === window.pageYOffset) {
          console.log(item);
          this.activeElement = el;
        }
      });
      console.log(this.activeElement);
    },
  },
};
</script>
<style lang="scss" src="./index.scss">
</style>
