<template>
  <div
    class="third-layout">
    <div
      class="global-setting cards">
      <v-card
        v-for="item in text"
        :key="item.id"
        max-width="100%">
        <v-card-text>
          <div>{{ item.title }}</div>
          <p>
            {{ item.secondTitle }}
            <v-icon
              color="#fff">
              {{ item.icon }}
            </v-icon>
          </p>
          <div>
            {{ item.description }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="white accent-4">
            {{ item.button }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ThirdLayout',
  props: {
    text: {
      type: Array,
      default: () => [],
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
<style lang="scss" src="./third.scss">
</style>
