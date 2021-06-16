<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        conduit
      </router-link>
      <span class="attribution">
        Challenge made by Kayo Savio hope you like it
        <a
          rel="noopener noreferrer"
          target="blank"
          href="https://www.instagram.com/kayosavio/"
          >Kayo Savio</a
        >
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
