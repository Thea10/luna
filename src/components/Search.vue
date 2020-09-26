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
        class="btn dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false" 
      > <i class="fa fa-filter" aria-hidden="true"></i> </button>
      <div class="dropdown-menu" aria-labelledby="dropdownId">
        <a :class="{'dropdown-item': true, 'selected': filterBy === 'price'}" href="#" @click="$emit('filteritem', 'price')">
          Price 
          <i class="fa fa-filter" aria-hidden="true" v-if="filterBy === 'price' "></i>
        </a>
        <a :class="{'dropdown-item': true, 'selected': filterBy === 'size'}" href="#" @click="$emit('filteritem', 'size')">
          Size
          <i class="fa fa-filter" aria-hidden="true" v-if="filterBy === 'size'"></i>
        </a>

        <div class="dropdown-divider"></div>
        <a :class="{'dropdown-item': true, 'selected': orderBy === 'asc'}" href="#" @click="$emit('filterorder', 'asc')">
          Low to High
          <i class="fa fa-filter" aria-hidden="true" v-if="orderBy === 'asc'"></i>
        </a>
        <a :class="{'dropdown-item': true, 'selected': orderBy === 'desc'}" href="#" @click="$emit('filterorder', 'desc')">
          High to Low
          <i class="fa fa-filter" aria-hidden="true" v-if="orderBy === 'desc'"></i>
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

<style lang="scss">
@import "@/assets/outerform.scss";
@import "@/assets/keyframes.scss";
</style>