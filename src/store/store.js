import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import photo1 from "../assets/img_statement_1.png";
import photo2 from "../assets/img_statement_2.png";
import photo3 from "../assets/img_statement_3.png";
import photo4 from "../assets/img_statement_4.png";
import photo5 from "../assets/img_statement_5.png";
import photo6 from "../assets/img_statement_6.png";
import last from "../assets/img_control_tool_finish.svg";

export default new Vuex.Store({
  state: {
    currentSlide: 0,
    currentQuestion:0,
    slider: true,
    result: [

    ],

    images: [{
        image: photo1,
        alt: "photo_1"
      },
      {
        image: photo2,
        alt: "photo_2"
      },
      {
        image: photo3,
        alt: "photo_3"
      },
      {
        image: photo4,
        alt: "photo_4"
      },
      {
        image: photo5,
        alt: "photo_5"
      },
      {
        image: photo6,
        alt: "photo_6"
      },
      {
        image: last,
        alt: "last"
      },
    ],

  },

  mutations: {
    nextSlide: (state) => {
      state.currentSlide += 1
      if (state.currentSlide === 6) {
        state.currentSlide = 6
        state.slider = false

      }
    }
  },
  actions: {
    nextSlide: (context) => {
      context.commit("nextSlide")
    }
  }

})