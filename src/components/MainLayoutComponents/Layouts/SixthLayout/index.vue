<template>
  <div
    class="sixth-block">
    <div
      class="global-setting sixth-block main-block">
      <div
        class="content text">
        <h2>{{ text.title }}</h2>
        <span>{{ text.description }}</span>
        <div
          class="content__icons">
          <span
            v-for="icon in text.icons"
            :key="icon.id">
            <v-icon
              color="#fff">
              {{ icon }}
            </v-icon>
          </span>
        </div>
      </div>
      <div
        class="content main">
        <p>{{ text.come }}</p>
        <v-btn
          color="secondary">
          {{ text.button }}
        </v-btn>
      </div>
      <div
        class="content image">
        <img
          src="@/assets/images/fxgtfh.jpg"
          alt="gym">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SixthLayout',
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
<style lang="scss" src="./sixth.scss">
</style>
