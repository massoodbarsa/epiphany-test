<template>
  <div class="main">
    <div class="container">
      <div class="slide">
        <div class="slide__container__title">
          <h4 v-if="slider">{{ title }}</h4>
          <h4 v-else>Thank you for participating</h4>
        </div>
        <section class="slide__container">
          <div v-for="(image, index) in images" :key="index">
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
        <slot v-if="slider"></slot>
      </div>
      <span class="next-container" @click="nextSlide">
        <fa-icon
          :icon="['fas', 'arrow-right']"
          size="3x"
          style="curser: pointer"
          :class="!slider ? 'next-disable' : 'save-icon'"
        />
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: "How do you feel about this quotes?",
      interval: "",
    };
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
    currentSlide() {
      return this.$store.state.currentSlide;
    },
    slider() {
      return this.$store.state.slider;
    },
  },

  methods: {
    ...mapActions(["nextSlide"]),
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
    display: flex;
    // flex-direction: column;
    align-content: center;
    justify-content: center;
    margin-top: 1rem;
    width: 200px;
    height: fit-content;

    .save-icon {
      cursor: pointer;
      border: 1px solid gray;
      padding: 0.4rem;
      border-radius: 50%;
      :hover {
        color: cyan;
      }
    }
  }

  .next-disable {
    display: none !important;
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
      position: relative;

      &__title {
        background-color: rgb(0, 195, 255);
        margin-bottom: 0.2rem;
        border-radius: 3px;
      }
      &__image {
        width: 300px;
        height: 200px;
        position: relative;
      }
    }
  }
}

.fade-enter-active{
   transition: all 1s ease-out;
}
.fade-leave-active {
  transition: all 1s ease-in;
}

.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>