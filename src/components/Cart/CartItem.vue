<template>
     <div class="row">
      <div v-for="item of items" class="col-12 item text-left p-2 mx-auto my-3" :key="item.id">
        <single-cart-item :item="item"></single-cart-item>
        
      </div>
    </div>
</template>

<script>
import SingleCartItem from './SingleCartItem';
export default {
    name: "CartItem",
    props: ["items"],
    components: {
      SingleCartItem
    }
}
</script>