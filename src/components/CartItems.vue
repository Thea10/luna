<template>
  <div class="row">
    <div v-for="item of items" class="col-8 item text-left p-2 mx-auto my-3" :key="item.id">
      <div class="d-flex flex-wrap justify-content-between align-items-center">
        <small>
          <span>Name:</span>
          {{item.name}}
        </small>

        <small>
          <span>Size:</span>
          {{item.size}} ML
        </small>
        <small>
          <span>Price:</span>
          ₦{{item.price}}
        </small>

        <i class="fa fa-trash" aria-hidden="true" title="Remove"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItems",
  props: ["items"]
};
</script>

