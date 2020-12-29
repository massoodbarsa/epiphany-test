<template>
  <div>
    <SlideComponent>
      <section class="container">
        <div v-for="(cat, index) in cats" :key="index" class="cats">
          <span>
            <img
              :src="cat.cat"
              :alt="cat.alt"
              class="cats__image"
              @click="nextSlide"
            />
          </span>
          <p>{{ cat.title }}</p>
        </div>
      </section>
    </SlideComponent>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import cat1 from "../assets/img_cat_happy.png";
import cat2 from "../assets/img_cat_neutral.png";
import cat3 from "../assets/img_cat_supersad.png";

import SlideComponent from "../components/SlideContainer";
export default {
  data() {
    return {
      cats: [
        { cat: cat1, title: "Prrr" },
        { cat: cat2, title: "Meow" },
        { cat: cat3, title: "Hiss" },
      ],
    };
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
  justify-content: center;
  background-color: cyan;
  margin: 0 auto;
  box-sizing: border-box;

  .cats {
    padding: 1rem;
    span {
      :hover {
        opacity: 0.5;
      }
    }

    &__image {
      display: flex;
      flex-direction: row;
      width: 50px;
    }
  }
}
</style>