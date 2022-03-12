<template>
  <div class="container">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {Header},
    data() {
    return {
      // site: site.home,
      // title: title,
      // links: links
    }
  }
}
</script>

<style>

</style>
