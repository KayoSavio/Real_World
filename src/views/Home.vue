<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a
                  class="nav-link"
                  v-if="username"
                  @click="setFeed('user')"
                  :class="{ active: activeFeed === 'user' }"
                >
                  Your Feed
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click="setFeed('global')"
                  :class="{ active: activeFeed === 'global' }"
                >
                  Global Feed
                </a>
              </li>
            </ul>
          </div>
          <ArticlePreview
            v-for="(article, index) in globalArticles"
            :key="article.slug + index"
            :article="article"
          />
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a href="" class="tag-pill tag-default">programming</a>
              <a href="" class="tag-pill tag-default">javascript</a>
              <a href="" class="tag-pill tag-default">emberjs</a>
              <a href="" class="tag-pill tag-default">angularjs</a>
              <a href="" class="tag-pill tag-default">react</a>
              <a href="" class="tag-pill tag-default">mean</a>
              <a href="" class="tag-pill tag-default">node</a>
              <a href="" class="tag-pill tag-default">rails</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlePreview from "../components/ArticlePreview.vue";

export default {
  components: {
    ArticlePreview,
  },
  methods: {
    setFeed(feedType) {
      if (feedType === "global") {
        this.activeFeed = "global";
        this.$store.dispatch("articles/getGlobalFeed");
      } else if (feedType === "user") {
        this.activeFeed = "user";
        this.$store.dispatch("articles/getUserFeed");
      }
    },
  },
  created() {
    this.setFeed("global");
  },
  computed: {
    globalArticles() {
      return this.$store.state.articles.feed || [];
    },
    username() {
      return this.$store.getters["users/username"];
    },
  },
  data() {
    return {
      articles: [
        {
          slug: "how-to-train-your-dragon",
          title: "How to train your dragon",
          description: "Ever wonder how?",
          body: "It takes a Jacobian",
          tagList: ["dragons", "training"],
          createdAt: "2019-02-18T03:22:56.637Z",
          updatedAt: "2016-02-18T03:48:35.824Z",
          favorited: false,
          favoritesCount: 0,
          author: {
            username: "Jake",
            bio: "I work at statefarm",
            image: "https://i.stack.imgur.com/xHWG8.jpg",
            following: false,
          },
        },
        {
          slug: "how-to-train-your-dragon-2",
          title: "How to train your dragon 2",
          description: "So toothless",
          body: "It a dragon",
          tagList: ["dragons", "training"],
          createdAt: "2016-02-18T03:22:56.637Z",
          updatedAt: "2016-02-18T03:48:35.824Z",
          favorited: false,
          favoritesCount: 0,
          author: {
            username: "Jake",
            bio: "I work at statefarm",
            image: "https://i.stack.imgur.com/xHWG8.jpg",
            following: false,
          },
        },
      ],
    };
  },
};
</script>
