<template>
   <div v-if="card" class="card__open">
    <h1 class="card__open-title">{{card.title}}</h1>
    <div class="card__open-main">
      <div class="block__img">
        <img :src="card.img" alt="" class="img-main">
      </div>
      <router-link to="/shop" style="margin-left:50px; padding:15px; background: #fff; border-radius: 12px;">Назад</router-link>
    </div>
  </div>
</template>

<script>
import cards from '@/seeders/cards.js'
export default {
  data() {
    return {
      card: null
    }
  },
  created() {
    const alias = this.$route.params.cardPage;
    const card = cards.find(el => el.alias === alias)
    this.card = card
  }
} 
</script>

<style>

</style>