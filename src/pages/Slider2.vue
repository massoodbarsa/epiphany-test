<template>
  <div>
    <SlideComponent>
      <section class="container">
        <!-- <div v-for="(rate, index) in 5" :key="index" class="rating">
          <span>
            <fa-icon
              :icon="['fas', 'star']"
              size="3x"
              @click="nextSlide"
              style="curser: pointer"
              class="rating__icon"
            />
          </span>
        </div> -->

        <!-- Old school way : if there is time i will come back to it late -->

        <div class="rating">
          <span @click="nextSlide">☆</span>
          <span @click="nextSlide">☆</span>
          <span @click="nextSlide">☆</span>
          <span @click="nextSlide">☆</span>
          <span @click="nextSlide">☆</span>
        </div>
        <div class="rating__description">
          <p>does not fit att all</p>
          <p>fits very well</p>
        </div>
      </section>
    </SlideComponent>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import SlideComponent from "../components/SlideContainer";
export default {
  data() {
    return {};
  },
  components: {
    SlideComponent,
  },

  methods: {
    ...mapActions(["nextSlide"]),
  },
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  flex-direction: column;
  background-color: cyan;
  margin: 0 auto;
  box-sizing: border-box;

  .rating {
    &__description {
      display: flex;
      justify-content: space-around;
      font-weight: 700;
    }
    unicode-bidi: bidi-override;
    direction: rtl;
    text-align: center;
    margin: 10px 0;
    span {
      display: inline-block;
      position: relative;
      width: 1.1rem;
      font-size: 30px;
      margin: 0 20px;
    }
  }
}
.rating > span:hover,
.rating > span:hover ~ span {
  color: transparent;
}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
  content: "\2605";
  position: absolute;
  color: rgb(221, 192, 29);
}
</style>