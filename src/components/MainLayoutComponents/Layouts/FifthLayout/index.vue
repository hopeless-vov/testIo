<template>
  <div
    class="fifth-block">
    <div class="global-setting content">
      <div class="content__item content__first">
        <div
          class="content__first__image">
          <h1>{{ text.come }}</h1>
          <v-btn>
            {{ text.button }}
          </v-btn>
        </div>
      </div>
      <div
        class="content__item content__second">
        <div
          class="image">
          <img
            src="@/assets/images/one.jpg"
            alt="man">
        </div>
        <h3>{{ text.title }}</h3>
        <span>{{ text.description }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FifthLayout',
  props: {
    text: {
      type: Object,
      default: null,
    },
  },
  data: () => {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" src="./fifth.scss">
</style>
