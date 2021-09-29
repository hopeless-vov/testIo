<template>
  <div
    class="first-layout">
    <div class="first-layout__main">
      <div
        class="first-layout__main__wrapper">
        <p>
          {{ text.description }}
        </p>
        <v-btn
          outlined
          color="lightBlue">
          {{ text.button }}
        </v-btn>
      </div>
      <div
        class="first-layout__main__wrapper">
        <div
          class="title">
          <h1>{{ text.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FirstLayout',
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
<style lang="scss" src="./first.scss">
</style>
