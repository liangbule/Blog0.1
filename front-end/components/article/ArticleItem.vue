<template>
  <v-card
    class="mx-auto mb-6 article-item"
    v-intersect="{
      handler: onIntersect,
      options: {
        threshold: [0, 0.5, 1.0],
      },
    }"
    :shaped="article.up == 1"
  >
    <!-- threshold: [0.5, 0.75, 1], -->
    <v-img
      :aspect-ratio="18 / 9"
      v-if="article.imgUrl"
      class="article-pic"
      :src="article.imgUrl | imageMogr2(800)"
      :lazy-src="article.imgUrl | imageMogr2(100)"
    />

    <v-card-title>
      <nuxt-link :to="`/article/${article._id}`" class="title_a">
        <span v-if="article.up == 1" class="body-2">[置顶]</span>
        <!-- {{ article.title }} -->
        从输入URL到页面渲染完成
      </nuxt-link>
    </v-card-title>
    <v-card-subtitle>
      <!-- <span>{{ article.createdAt | format }}</span> -->
      <span>2021-04-14 12:29:51</span>

    </v-card-subtitle>

    <v-card-text class="text--primary">
      <!-- <p>{{ article.summary }}</p> -->
      <p>从输入URL到页面渲染完成涉及网络、浏览器工作原理等知识。前序知识浏览器进程结构Browser进程 负责协调、主控，包括地址栏、书签、历史栈。GPU进程 负责整个浏览器界面的渲染网络进程 负责发起接收网络请求插件进程 控制网页中使用到的插件 如flash</p>
    </v-card-text>

    <v-card-actions class="d-flex align-center justify-space-between">
      <v-btn text color="error" nuxt :to="`/article/${article._id}`"
        >开始阅读</v-btn
      >
      <div>
        <v-btn text>
          <v-icon left>{{ $icons['mdi-eye'] }}</v-icon>
          <!-- {{ article.browseCount }} -->
          99
        </v-btn>
        <v-btn text :color="hasLike(article.likes) ? 'error' : ''">
          <v-icon
            left
            class="heart-icon"
            :color="hasLike(article.likes) ? 'error' : ''"
            >{{ $icons['mdi-cards-heart'] }}</v-icon
          >
          <!-- {{ article.likes ? article.likes.length : 0 }} -->
          100
        </v-btn>
        <v-btn text>
          <v-icon left>{{ $icons['mdi-message'] }}</v-icon>
          <!-- {{ article.commentCount }} -->
          99
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
import mixin from '@/utils/mixin';
export default {
  mixins: [mixin],
  components: {},
  props: {
    article: {
      type: Object,
      default () {
        return {
          _id: null,
          coverURL: null,
          createdAt: 0,
          summary: '',
          browseCount: 0,
          loveCount: 0,
          commentCount: 0,
          imgUrl:'https://image.notbucai.com/2020/06/21/f479ce16c221ac74d2fec3051f14f7a2.jpg?imageMogr2/thumbnail/700x',
        };
      }
    }
  },
  computed: {},
  data () {
    return {
      istransition: false,
    };
  },
  created () { },
  mounted () { },
  methods: {
    onIntersect (entries, observer) {
      if (entries[0].intersectionRatio >= 0.5) {
        this.istransition = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.article-item {
  transition: background-size 0.2s;
  overflow: hidden;
  .title_a {
    color: inherit;
    text-decoration: none;
  }
  a,
  span,
  i,
  p {
    /* transform: translateY(50%); */
    /* opacity: 0.4; */
    /* transition: transform 0.7s, opacity 1.2s; */
    /* transition-timing-function: ease-out; */
  }
  &.transition {
    a,
    span,
    i,
    p {
      @keyframes itemMove {
        0% {
          transform: translateY(50%);
          opacity: 0.5;
        }
        80% {
          opacity: 0.8;
          transform: translateY(10%);
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
      transform: translateY(50%);
      opacity: 0.5;
      animation: itemMove 1.2s forwards;
    }
  }
  ::v-deep {
    .v-image__image {
      transition: transform 0.5s;
    }
  }
  &:hover {
    .article-pic {
      ::v-deep {
        .v-image__image {
          transform: scale(1.2);
        }
      }
    }
    .heart-icon {
      @keyframes heartbeat {
        0% {
          transform: scale(1, 1);
          opacity: 1;
        }
        25% {
          transform: scale(1.3, 1.3);
          opacity: 0.8;
        }
        100% {
          transform: scale(1, 1);
          opacity: 1;
        }
      }
      animation: heartbeat 1s infinite;
    }
  }
}
</style>