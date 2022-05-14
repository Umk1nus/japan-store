<template>
  <div class="store">
    <div class="wrapper-container">
      <div class="card-wrapper" v-for="card in cards" :key="card.id">
        <Card :title="card.title" :price="card.price" :img="card.img" :link="`/${card.alias}`">
          <div class="card__subblock-add">+</div>
        </Card>
      </div> 
    </div> 
  </div>
</template>

<script>
import Card from '@/components/UI/CardStore.vue'
import cards from '@/seeders/cardsStore.js'
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