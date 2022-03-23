<template>
  <div class="store">
    <div class="card-wrapper" v-for="card in cards" :key="card.id">
      <Card :title="card.title" :price="card.price" :img="card.img" :link="`/${card.alias}`"/>
    </div>   
  </div>
</template>

<script>
import Card from '@/components/UI/Card.vue'
import cards from '@/seeders/cards.js'
export default {
  components:{Card},
  data() {
    return {
      cards: cards
    }
  }
}
</script>

<style>

</style>