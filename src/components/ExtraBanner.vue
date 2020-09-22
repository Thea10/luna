<template>
    <div :class="{'alert item-text ': true, 'alert-success': status == 'success', 'alert-danger': status == 'fail', 'alert-warning': status == 'error'}">
      {{message}}
        
    </div>

</template>

<script>
export default {
    name: "Banner",
    props: ["status", "message"]
}
</script>
<style lang="scss">
  .alert{
         position: absolute;
    right: 2%;
    bottom: -2%;
    padding: 0.4rem;
    font-size: 0.7rem;
      
  }
    
</style>
