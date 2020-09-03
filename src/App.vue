<template>
  <div id="app">
    <Nav></Nav>
    <ContactBar></ContactBar>
    <router-view />

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
  }
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/luna.jpg");

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
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
