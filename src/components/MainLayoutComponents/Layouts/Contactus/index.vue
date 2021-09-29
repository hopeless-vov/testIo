<template>
  <div
    class="contact-us">
    <div
      class="global-setting block-with-form">
      <div
        class="block-with-form__form">
        <h1
          class="mb-4">
          Contact Us
        </h1>
        <div
          class="block-with-form__form__items">
          <div class="item">
            <v-text-field
              v-model="address"
              label="Address"
              placeholder="Address"
              color="darkBlue"
              outlined
              dense
              clearable />
            <v-text-field
              v-model="phoneNumber"
              label="Phone Number"
              placeholder="Phone Number"
              color="darkBlue"
              dense
              outlined
              clearable />
          </div>
          <div
            class="item">
            <v-text-field
              v-model="name"
              label="Name"
              placeholder="Name"
              color="darkBlue"
              dense
              outlined
              clearable />
            <v-row>
              <v-col>
                <v-menu
                  v-model="calendar"
                  :close-on-content-click="false"
                  :nudge-bottom="100"
                  transition="scale-transition"
                  offset-y
                  min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Choose Date"
                      prepend-icon="mdi-calendar"
                      color="darkBlue"
                      readonly
                      v-bind="attrs"
                      v-on="on" />
                  </template>
                  <v-date-picker
                    v-model="date"
                    color="darkBlue"
                    @input="calendar = false" />
                </v-menu>
              </v-col>
            </v-row>
          </div>
        </div>
        <v-textarea
          v-model="message"
          outlined
          color="darkBlue"
          label="Message" />
        <v-btn
          color="darkBlue"
          outlined>
          Send
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contactus',
  data: () => {
    return {
      address: '',
      phoneNumber: '',
      name: '',
      date: '',
      calendar: false,
      message: '',
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" src="./contactUs.scss">
</style>
