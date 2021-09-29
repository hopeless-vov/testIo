<template>
  <div
    class="info-block">
    <div
      class="global-setting content">
      <h1>{{ text.title }}</h1>
      <span>{{ text.description }}</span>
      <v-btn
        color="darkBlue">
        {{ text.button }}
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoBlock',
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
<style lang="scss">
.info-block {
  background-color: var(--v-lightBlue-base);
  padding: 40px 10px;
  .content {
    text-align: center;
    display: grid;
    gap: 10px;
    justify-items: center;
    h1 {
      font-size: 58px;
    }
  }
}
@media only screen and (max-width: 834px) {
  .info-block {
  .content {
    h1 {
      font-size: 28px;
    }
  }
}
}
</style>
