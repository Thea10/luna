<template>
  <div>
    <div class="row justify-content-center w-100 m-2 mx-md-5 py-md-0 px-md-3">
      <div
        v-for="product of products"
        class="col-10 col-sm-8 col-md-4 col-lg-3 item text-left p-2 m-3 mx-sm-auto my-sm-2 m-md-3"
        :key="product.id"
      >
        <div class="img text-center p-3">
          <img class="h-75" :src="product.img" alt="l" />
        </div>
        <div class="d-flex flex-column justify-content-between details">
          <h6>{{product.name}}</h6>

          <small>
            <span>Size:</span>
            {{product.size}} ML
          </small>
          <small>
            <span>Price:</span>
            ₦{{product.price}}
          </small>

          <div class="d-flex justify-content-between align-items-center mt-2">
            <button class="btn" title="Add to Cart">Buy</button>
            <i class="fa fa-star" title="Add to WishList"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: ["products"]
};
</script>