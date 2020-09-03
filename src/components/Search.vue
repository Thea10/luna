<template>
  <div class="d-flex">
    <input
      type="search"
      name="searchlist"
      placeholder="Search"
      id="search-list"
      class="form-control"
      v-model="searchtext"
    />
    <div class="btn-group" role="group">
      <button
        id="dropdownId"
        type="button"
        class="btn dropdown-toggle mb-2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Sort By</button>
      <div class="dropdown-menu" aria-labelledby="dropdownId">
        <a class="dropdown-item" href="#" @click="$emit('filteritem', 'price')">
          Price
          <i class="fa fa-shopping-cart" aria-hidden="true" v-if="filterBy === 'price' "></i>
        </a>
        <a class="dropdown-item" href="#" @click="$emit('filteritem', 'price')">
          Size
          <i class="fa fa-shopping-cart" aria-hidden="true" v-if="filterBy === 'size'"></i>
        </a>

        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#" @click="$emit('filterorder', 'asc')">
          Ascending
          <i class="fa fa-shopping-cart" aria-hidden="true" v-if="orderBy === 'asc'"></i>
        </a>
        <a class="dropdown-item" href="#" @click="$emit('filterorder', 'desc')">
          Descending
          <i class="fa fa-shopping-cart" aria-hidden="true" v-if="orderBy === 'desc'"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["filterBy", "orderBy"],
  data() {
    return {
      searchtext: ""
    };
  },
  watch: {
    searchtext: function() {
      this.$emit("searchproducts", this.searchtext);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/outerform.scss";
</style>