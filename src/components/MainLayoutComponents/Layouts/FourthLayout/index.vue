<template>
  <div
    class="fourth-layout">
    <div
      class="content image-block">
      <div
        class="image" />
    </div>
    <div
      class="content text-block">
      <h2>{{ text.title }}</h2>
      <span>{{ text.description }}</span>
      <img
        src="../../../../assets/images/young-sporty-woman-exercising-gym_1303-27867.jpg"
        alt="woman">
    </div>
  </div>
</template>
<script>
export default {
  name: 'FourthLayout',
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
<style lang="scss" src="./fourth.scss">
</style>
