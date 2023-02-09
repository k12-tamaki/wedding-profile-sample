<template lang="pug">
  div.content--box
    div.bg--image(:class="isDispImage ? 'disp--image' : ''")
    div.big-font.top--text We are Marriage
    div.scroll
      div(@click="onClickScroll")
      a(@click="onClickScroll")
        span
      span(@click="onClickScroll") Scroll
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      isDispImage: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (window.scrollY > 1500) {
        this.isDispImage = false
      } else {
        this.isDispImage = true
      }
    },
    onClickScroll() {
      const options = {
        duration: 1000,
        offset: -100,
        easing: 'easeInOutCubic'
      }
      this.$vuetify.goTo('#Message', options)
    }
  }
}
</script>

<style scoped>
.bg--image {
  background-image: none !important;
  height: 100vh;
}
.bg--image::before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-transform: translate3d(0, 0, -1px);
  transform: translate3d(0, 0, -1px);
  width: 100%;
  min-height: 100vh;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  z-index: 0;
}
.disp--image::before {
  background-image: url('~@/static/top/main.jpg');
}

.top--text {
  font-size: 6rem;
  text-shadow: 1px 1px 0 #fff;
  height: 100px;
  color: #000;

  position: absolute;
  top: 20vh;
  right: 0;
  left: 0;
  z-index: 1;
  color: white;
  text-shadow: 6px 6px 0 black;
}
@media (max-width: 767px) {
  .top--text {
    font-size: 2rem;
  }
  .bg--image::before {
    background-position: 30%;
  }
}

div.scroll {
  position: absolute;
  top: 65vh;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 1;
  color: white;
  height: 150px;
  width: 150px;
}
div.scroll div {
  position: absolute;
  bottom: -15px;
  right: 0;
  left: 0;
  margin: auto;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
}
div.scroll a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb 1.5s infinite;
  animation: sdb 1.5s infinite;
  box-sizing: border-box;
}
div.scroll span {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 1.1rem;
}
@-webkit-keyframes sdb {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
div.scroll {
  vertical-align: bottom;
}

@media (max-width: 767px) {
  .top--text {
    font-size: 2rem;
  }
  .bg--image::before {
    background-position: 30%;
  }
  div.scroll {
    top: 50vh;
  }
}
</style>
