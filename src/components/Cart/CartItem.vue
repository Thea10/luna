<template>
<transition-group name="list-complete" tag="div"  class="row">
    <div v-for="item of items" class="col-12 list-complete-item item text-left p-2 mx-auto my-3" :key="item.id">
      <single-cart-item :item="item"></single-cart-item>
    </div>
 </transition-group>
  <!-- <div class="row">
    <div v-for="item of items" class="col-12 item text-left p-2 mx-auto my-3" :key="item.id">
      <single-cart-item :item="item"></single-cart-item>
    </div>
  </div> -->
</template>

<script>
import SingleCartItem from "./SingleCartItem";
export default {
  name: "CartItem",
  props: ["items"],
  components: {
    SingleCartItem
  }
};
</script>

<style lang="scss">

.list-complete-item {
  transition: all 0.3s !important;
}
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-complete-leave-active {
  position: relative;
}
  
</style>