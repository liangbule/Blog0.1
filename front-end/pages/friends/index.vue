<!--
 * @Author: liangbule
 * @Date: 2021-08-29 16:33:52
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-30 20:32:20
 * @Description: 
-->

<template>
  <v-container class="friends">
    <v-card elevation="0" class="rounded">
      <div class="firend-box">
        <v-lazy
          transition="scale-transition"
          v-for="item in list"
          :key="item._id"
        >
          <v-card class="rounded-lg" :href="'/user/' + item._id" elevation="0">
            <div class="friend-item">
              <v-avatar color="primary" size="48">
                <img :src="item.avatarURL | imageMogr2(60)" />
              </v-avatar>
              <v-card-title primary-title class="friend-name">{{
                item.username
              }}</v-card-title>
              <v-card-subtitle class="friend-logintime">{{
                item.loginAt | fromNowDate
              }}</v-card-subtitle>
            </div>
          </v-card>
        </v-lazy>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: '圈子'
    }
  },
  async asyncData ({ $axios }) {
    // const data = await $axios.get('/api/users/list/show')
    const data = ''

    return { list: data };
  },
  data () {
    return {
      list: []
    };
  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.friends {
  max-width: 860px;
  .firend-box {
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    padding: 24px 12px;
  }
  .friend-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
    padding-top: 8px;
    .friend-name {
      font-size: 14px;
      padding: 6px;
    }
    .friend-logintime {
      font-size: 12px;
      margin-top: 6px;
    }
  }
}
</style>