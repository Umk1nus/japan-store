<template>
  <div class="store">
    <div class="wrapper-container">
      <div class="card-wrapper" v-for="card in getCards" :key="card.id">
        <Card :title="card.title" :price="card.price" :img="card.img" :link="`/${card.alias}`">
          <div class="card__subblock-add">+</div>
        </Card>
      </div> 
    </div> 
  </div>
</template>

<script>
import Card from '@/components/UI/CardStore.vue'
export default {
  components:{Card},
  data() {
    return {
    }
  },
  computed: {
    getCards() {
      return this.$store.getters.getCards
    }
  }
}
</script>

<style>

</style>