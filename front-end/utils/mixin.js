/*
 * @Author: liangbule
 * @Date: 2021-08-27 23:55:55
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-27 23:56:38
 * @Description: 
 */

export default {
  methods: {
    hasLike (likes) {
      if (!Array.isArray(likes)) return false;
      const user = this.$store.state.user;
      if (!user) return false;
      const id = user._id;
      return !!likes.find(item => item == id);
    },
    changeLike (likes = []) {
      const user = this.$store.state.user;
      likes = Object.assign([], likes);

      if (!user) {
        this.$store.commit('SET_LOGIN_OR_REGISTER_DIALOG');
        throw new Error('未登陆');
        return likes;
      }
      const id = user._id;
      const index = likes.findIndex(item => item == id);
      console.log('index', index);

      if (index < 0) {
        likes.push(id);
      } else {
        likes.splice(index, 1);
      }
      return likes;
    },
  },
}