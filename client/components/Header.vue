<script setup lang="ts">
const linksHeader = ref()
</script>

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
      <!-- <button class="lk-autorisation" @click="modal = true">Войти</button> -->
      <a href="/" class="lk-basket"><img src="../assets/img/basket.png" alt=""><span>1</span></a>
    </div>
  </header>
</template>