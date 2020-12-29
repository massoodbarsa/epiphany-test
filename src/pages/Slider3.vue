<template>
  <div>
    <SlideComponent>
      <section class="container">
        <div class="select">
          <p>Who is this guy?</p>
          <select v-model="character">
            <option v-for="(character, index) in characters" :key="index">
              {{ character }}
            </option>
          </select>
        </div>

        <div class="select">
          <p>Where does he lives?</p>
          <select v-model="city">
            <option v-for="(city, index) in cities" :key="index">
              {{ city }}
            </option>
          </select>
        </div>
        <div class="select">
          <p>How do you think about him?</p>
          <select v-model="score">
            <option v-for="(score, index) in scores" :key="index">
              {{ score }}
            </option>
          </select>
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

      characters: ["Dumbledore", "Dr Who", "bad", "Samuel", "snape"],

      cities: ["Amsterdam", "Utrecht", "Arnehem"],

      scores: ["Perfect", "Normal", "Bad"],

      character: "",
      city: "",
      score: "",
    };
  },
  components: {
    SlideComponent,
  },
  computed: {
    result() {
      return this.$store.state.result;
    },
    currentQuestion() {
      return this.$store.state.currentQuestion;
    },
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
  justify-content: center;
  background-color: cyan;
  margin: 0 auto;
  box-sizing: border-box;

  .select {
    width: 200px;
    background-color: cyan;
    height: 50px;
    width: 600px;
    p {
      margin-right: 20px;
      display: inline-block;
    }
  }
}
</style>