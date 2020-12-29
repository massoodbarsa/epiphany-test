<template>
  <div class="main">
    <div class="container">
      <div class="slide">
        <div class="slide__container__title">
          <h4>{{ title }}</h4>
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
        <slot></slot>
      </div>
      <div class="next-container">
        <fa-icon
          :icon="['fas', 'arrow-right']"
          size="3x"
          @click="nextSlide"
          style="curser: pointer"
          class="save-icon"
        />
      </div>
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