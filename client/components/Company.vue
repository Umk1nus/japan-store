<script setup lang="ts"> 

</script>

<template>
  <div class="company">
      <div class="up-company">
        <div class="company-blocks">
          <!-- <div class="company-blocks__block" :class="company.class" v-for="company in getCompany" :key="company.id">
            <img :src="company.img" alt="" class="company-blocks__block-img">
            <p class="company-blocks__block-title">
              {{company.title}}
            </p>
          </div> -->
        </div>
        <div class="company-info">
          <h2 class="company-info__title gray-text">
            Мы рады приветствовать Вас в интернет-магазине нашей компании!
          </h2>
          <p class="company-info__content gray-text">
            Наша  компания была основана в 2021 году,
            занимается импортом и реализацией продуктов культуры из Японии
          </p>
          <router-link to="/about" class="company-info__btn red-text">Подробнее</router-link>
        </div>
      </div>
      <div class="down-company">
          
      </div>
    </div>
</template>