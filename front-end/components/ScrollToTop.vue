<!--
 * @Descripttion: 
 * @version: 
 * @Author: liangbule
 * @Date: 2021-08-25 20:24:34
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-25 20:29:16
-->
<template>
  <div class="ScrollToTop" v-show="isShow" v-scroll="onScroll">
    <v-btn color="error" small fab @click="handleTo">
      <!-- <v-icon dark>{{$icons['mdi-chevron-up']}}</v-icon> -->
    </v-btn>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  computed: {},
  data () {
    return {
      isShow: false
    };
  },
  mounted () {
  },
  methods: {
    onScroll (e) {
      this.isShow = document.documentElement.scrollTop > window.outerHeight / 3 * 2
    },
    handleTo(){
      this.$vuetify.goTo(0);
    }
  }
}
</script>
<style lang="scss" scoped>
.ScrollToTop {
  position: fixed;
  z-index: 99;
  right: 100px;
  bottom: 160px;
  @media (max-width: 600px) {
    right: 30px;
  }
}
</style>