<template>
  <div class="store">
    <Card :title="card.title" :price="card.price" :img="card.img" :alias="card.alias"/>
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