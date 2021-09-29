<template>
  <div
    class="second-layout">
    <hr>
    <div
      class="global-setting content">
      <div class="content__header-item">
        <h2>{{ text.title }}</h2>
        <p>{{ text.secondTitle }}</p>
        <hr>
        <span>{{ text.description }}</span>
      </div>
      <div class="content__main-item">
        <img
          src="@/assets/images/athlete-runner-prepare-run-from-crouch-start.jpg"
          alt="sport">
        <img
          src="@/assets/images/calm-young-muscular-woman-practicing-gym-with-weights.jpg"
          alt="sport">
        <img
          src="@/assets/images/muscular-man-looking-dumbbell.jpg"
          alt="sport">
      </div>
      <v-btn
        outlined
        color="darkBlue">
        {{ text.button }}
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SecondLayout',
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
<style lang="scss" src="./second.scss">
</style>
