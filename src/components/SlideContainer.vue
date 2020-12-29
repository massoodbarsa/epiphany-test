<template>
  <div class="main">
    <div class="container">
      <div class="slide">
        <div class="slide__container__title">
          <h4>{{ title }}</h4>
        </div>
        <section class="slide__container">
          <div v-for="(image, index) in images" :key="image">
            <transition name="fade">
              <img
                v-if="currentSlide === index"
                :src="image.image"
                :alt="image.alt"
                class="slide__container__image"
              />
            </transition>
          </div>
        </section>
      </div>
      <div class="next-container">
        <fa-icon
          :icon="['fas', 'arrow-right']"
          size="3x"
          @click="next"
          style="curser: pointer"
          class="save-icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import photo1 from "../assets/img_statement_1.png";
import photo2 from "../assets/img_statement_2.png";
import photo3 from "../assets/img_statement_3.png";
import photo4 from "../assets/img_statement_4.png";
import photo5 from "../assets/img_statement_5.png";
import photo6 from "../assets/img_statement_6.png";
import last from "../assets/img_control_tool_finish.svg";

export default {
  data() {
    return {
      title: "How do you feel about this quotes?",
      currentSlide: 0,
      interval: "",
      images: [
        { image: photo1, alt: "photo_1" },
        { image: photo2, alt: "photo_2" },
        { image: photo3, alt: "photo_3" },
        { image: photo4, alt: "photo_4" },
        { image: photo5, alt: "photo_5" },
        { image: photo6, alt: "photo_6" },
        { image: last, alt: "last" },
      ],
    };
  },

  methods: {
    next() {
      this.currentSlide += 1;
    },
  },
  mounted() {
    // this.interval = setInterval(() => {
    //   if (this.currentSlide === 5) {
    //     this.currentSlide = 0;
    //   } else {
    //     this.currentSlide++;
    //   }
    // }, 2000);
  },
  beforeUnmount() {
    // clearInterval(this.interval);
  },
};
</script>

<style  lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
}
.container {
  display: flex;
  justify-content: center;
  width: 600px;

  .next-container {
    margin-left: 0.3rem;
    // height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin-top: 4rem;

    .save-icon {
      cursor: pointer;
      :hover {
        color: cyan;
      }
    }
  }

  .slide {
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-top: 4rem;

    &__container {
      background-color: aqua;
      padding: 2rem;
      border-radius: 3px;

      &__title {
        background-color: rgb(0, 195, 255);
        margin-bottom: 0.2rem;
        border-radius: 3px;
      }
      &__image {
        width: 300px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-50%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>