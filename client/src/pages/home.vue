<template>
  <div class="home">
    <div class="company">
      <div class="up-company">
        <div class="company-blocks">
          <div class="company-blocks__block blue-bg">
            <img src="@/assets/img/icon/cardCompany.svg" alt="" class="company-blocks__block-img">
            <p class="company-blocks__block-title">
              Оплата картой и наличными
            </p>
          </div>
          <div class="company-blocks__block red-bg">
            <img src="@/assets/img/icon/storeCompany.svg" alt="" class="company-blocks__block-img">
            <p class="company-blocks__block-title">
              Мы работаем круглосуточно
            </p>
          </div>
          <div class="company-blocks__block green-bg">
            <img src="@/assets/img/icon/mapCompany.svg" alt="" class="company-blocks__block-img">
            <p class="company-blocks__block-title">
              Отслеживайте ваш заказ
            </p>
          </div>
          <div class="company-blocks__block red-bg">
            <img src="@/assets/img/icon/packageCompany.svg" alt="" class="company-blocks__block-img">
            <p class="company-blocks__block-title">
              У нас быстрая доставка
            </p>
          </div>
          <div class="company-blocks__block green-bg">
            <img src="@/assets/img/icon/reviewCompany.svg" alt="" class="company-blocks__block-img">
            <p class="company-blocks__block-title">
              Оставляйте свои отзывы
            </p>
          </div>
          <div class="company-blocks__block blue-bg">
            <img src="@/assets/img/icon/boxCompany.svg" alt="" class="company-blocks__block-img">
            <p class="company-blocks__block-title">
              Вам доступны акции
            </p>
          </div>
        </div>
        <div class="company-info">
          <h2 class="company-info__title">
            Мы ради приветствовать Вас в интернет-Магазине нашей компании!
          </h2>
          <p class="company-info__content">
            Наша  компания была основана в 2021 году,
            занимается импортом и реализацией продуктов культуры из Японии
          </p>
          <button class="company-info__btn">Подробнее</button>
        </div>
        <div class="down-company">
          
        </div>
      </div>
    </div>
    <Store/>
  </div>
</template>

<script>

import Store from "@/components/Store.vue"

export default{
  components: {Store},
  data() {
    return {
      
    }
  }
}
</script>

