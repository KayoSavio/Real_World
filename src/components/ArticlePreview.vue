<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href=""><img :src="article.author.image" /></a>
      <div class="info">
        <a class="author">{{ article.author.username }}</a>
        <span class="date">{{ formatDate(article.createdAt) }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i>{{ article.favoritesCount }}
      </button>
    </div>
    <router-link :to="`/article/${article.slug}`" class="preview-link">
      <h1 v-text="article.title" />
      <p v-text="article.description" />
      <span>Read more...</span>
      <TagList :tags="article.tagList" />
    </router-link>
  </div>
</template>

<script>
import TagList from "../views/TagList";
import moment from "moment";
export default {
  name: "ArticlePreview",
  components: {
    TagList,
  },
  props: ["article"],
  methods: {
    formatDate(dateString) {
      console.log("article");
      return moment(dateString).format("MMMM Do, YYYY");
    },
  },
  computed: {
    articleLink() {
      return {
        name: "article",
        params: {
          slug: this.article.slug,
        },
      };
    },
  },
};
</script>
