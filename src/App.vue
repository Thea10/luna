<template>
  <div id="app">
    <div class="main-loader bg-white" v-if="loading">
      <img
        src="@/assets/mainloader.svg"
        alt="loading"
        height="250px"
        width="250px"
      />
    </div>
    <div v-else>
      <Nav></Nav>
     
      <router-view />
       <ContactBar></ContactBar>
    </div>

    <img src="@/assets/blob2.svg" class="blobtwo" alt />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import ContactBar from "./components/ContactBar";
export default {
  name: "App",
  components: {
    Nav,
    ContactBar
  },
  data: function() {
    return {
      loading: false
    };
  },

  mounted() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
     }, 3000);
  }
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/keyframes.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-image: url("./assets/luna.jpg");

  // background-size: auto;
  // background-repeat: no-repeat;
  // background-position: center;
  // background-attachment: fixed;
  background:#f5f5f500;
}

.main-loader {
  height: 100vh;
  margin: 7rem auto 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.blobtwo {
  position: absolute;

  right: 0;
  bottom: 30%;
  height: 70px;
  width: 60px;
}
// .item-text {
//   animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
//   -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
// }

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 5px !important;
  height: 5px !important;
}
::-webkit-scrollbar-thumb {
  border-radius: 7px !important;
  background-color: $primary;
  box-shadow: $primaryLight;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>
