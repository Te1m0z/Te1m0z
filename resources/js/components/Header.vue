<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-center">
      <ul class="uk-navbar-nav">
        <li v-for="link in links" v-bind:key="link">
          <a :href="link.href">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
        links: [
            {
                title: 'Главная',
                href: '/',
                key: 1
            },
            {
                title: 'Блог',
                href: '/blog',
                key: 2
            }
        ]
    };
  },
};
</script>

<style scoped>
</style>
