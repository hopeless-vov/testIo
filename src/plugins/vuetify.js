import Vue from 'vue';
import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
Vue.use(Vuetify);
export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#51C4D3',
        secondary: '#132C33',
        darkBlue: '#82B1FF',
        lightBlue: '#D8E3E7',
        error: '#FF5252',
      },
    },
  },
});
