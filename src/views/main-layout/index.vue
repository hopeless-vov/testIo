<template>
  <div class="main-layout">
    <Nav />
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop(0)">
      <v-icon>keyboard_arrow_up</v-icon>
    </v-btn>
    <FirstLayout
      id="Sport Club"
      :text="json.firstBlock" />
    <SecondLayout
      id="About"
      :text="json.secondBlock" />
    <ThirdLayout
      id="Learn More"
      :text="json.thirdBlock" />
    <FourthLayout
      id="Motivation"
      :text="json.fourthBlock" />
    <InfoBlock
      id="Our club"
      :text="json.infoBlock" />
    <FifthLayout
      id="Join us"
      :text="json.fifthhBlock" />
    <SixthLayout
      id="Benefits"
      :text="json.sixthBlock" />
    <Contactus
      id="Contact Us"/>
    <SiteNavigation
      @toTop="toTop"/>
  </div>
</template>
<script>
import Nav from '@/components/MainLayoutComponents/MainNavbar';
import FirstLayout from '@/components/MainLayoutComponents/Layouts/FirstLayout';
import SecondLayout from '@/components/MainLayoutComponents/Layouts/SecondLayout';
import ThirdLayout from '@/components/MainLayoutComponents/Layouts/ThirdLayout';
import FourthLayout from '@/components/MainLayoutComponents/Layouts/FourthLayout';
import InfoBlock from '@/components/MainLayoutComponents/Layouts/InfoBlock';
import FifthLayout from '@/components/MainLayoutComponents/Layouts/FifthLayout';
import SixthLayout from '@/components/MainLayoutComponents/Layouts/SixthLayout';
import Contactus from '@/components/MainLayoutComponents/Layouts/Contactus';
import SiteNavigation from '@/components/SiteNavigation';
import json from '@/assets/text';
export default {
  name: 'MainLayout',
  components: {
    Nav,
    FirstLayout,
    SecondLayout,
    ThirdLayout,
    FourthLayout,
    InfoBlock,
    FifthLayout,
    SixthLayout,
    Contactus,
    SiteNavigation,
  },
  data: () => {
    return {
      json,
      fab: false,
    };
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop(heightOfItem) {
      this.$vuetify.goTo(heightOfItem);
    },
  },
};
</script>
<style lang="scss">
</style>
