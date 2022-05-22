<template>
  <header class="header">
    <img src="../assets/img/logo.svg" alt="" class="header__logo">
    <nav class="header__nav">
      <ul>
        <li v-for="link in linksHeader" :key="link.alias" class="nav-item">
          <router-link :to="link.url" class="nav-link">{{link.title}}</router-link>
        </li>
      </ul>
    </nav>
    <div class="header__lk">
      <button class="lk-autorisation" @click="modal = true">Войти</button>
      <a href="/" class="lk-basket"><img src="@/assets/img/icon/basket.png" alt=""><span>1</span></a>
    </div>
  </header>
  <!-- <Authorization v-if="modal" :modal="modal"/> -->
</template>

<script>
import Authorization from '@/components/UI/Authorization.vue'
export default({
  components:{Authorization},
  data() {
    return {
      modal: null,
      linksHeader: [
        {
          url: "/",
          title: "Главная"
        },
        {
          url: "/shop",
          title: "Магазин"
        },
        {
          url: "/reviews",
          title: "Отзывы"
        },
        {
          url: "/about",
          title: "О нас"
        },
      ]
    }
  }
})
</script>
