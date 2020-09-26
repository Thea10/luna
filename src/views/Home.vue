/* eslint-disable prettier/prettier */
<template>
  <div class="container pt-3">
    <div class="home">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="img">
              <img src="@/assets/two.jpeg" alt="item" />
              <img src="@/assets/honey-300.jpg" alt="item" />
              <img src="@/assets/coco-50.jpeg" alt="item" />
            </div>
          </div>
          <div class="carousel-item two">
            <h3>
              Your One Stop Shop For Premium Honey, Shea Butter and Coconut Oil
            </h3>
          </div>
          <div class="carousel-item three">
            <h3>START SHOPPING</h3>
          </div>
        </div>

        <router-link to="/buy" class="btn shop-btn" style="margin-top: 1rem; border-radius: 10px 0">
          START SHOPPING</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/keyframes.scss";

.container {
  .carousel {
    .carousel-inner {
      overflow: unset;
    }
    .carousel-indicators {
      bottom: 4%;
      li {
        width: 12px;
        height: 13px;
        border-top: none;
        border-bottom: none;
        border-radius: 100px;
        background-color: $primaryLight;

        &.active,
        &:hover {
          background-color: $primary;
        }
      }
      @include md-max {
        bottom: 5%;
      }
    }

    .carousel-item {
      position: unset;
      height: 400px;
      animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) 1s
        both;
      -webkit-animation: tracking-in-expand 0.7s
        cubic-bezier(0.215, 0.61, 0.355, 1) 1s both;

      // padding: 4rem;

      .img {
        margin: 1rem auto;
        width: 400px;
        transform: rotate(-19deg);
        img {
          border-radius: 50%;
          border: 1px solid $primary;
          width: 200px;
          height: 200px;

          &:first-child {
            transform: rotate(23deg);
            height: 180px;
          }

          &:nth-child(2) {
            transform: rotate(24deg);
          }

          &:last-child {
            transform: rotate(21deg);
          }

          @include xsm-max {
            width: 150px;
            height: 150px !important;
          }
        }

        @include xsm-max{
              width: 340px;
        }
      }

      &.two,
      &.three {
        // height: 200px;
        //  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background: #ffffffe0;
        padding: 2rem;

        @include md-min {
          width: 65%;
          margin: 3rem 9rem 1rem;
        }

        @include lg-min {
          width: 75%;
          margin: 3rem 8rem 1rem;
        }
      }

      h3 {
        // color: $primary;
        font-weight: bold;
        font-size: 40px;
        background: -webkit-linear-gradient(#d19d04, #4d3a03);
        background: linear-gradient(#d19d04, #4d3a03);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: 2rem;

        @include xsm-max {
          font-size: 24px;
        }
      }

      @include xsm-max {
        height: 300px;
      }

      @include md-min {
        margin: 3rem auto 1.5rem;
      }
    }

    @include xsm-max {
      .shop-btn {
        margin-top: 4.5rem !important;
      }
    }
  }

  .btn {
    background: $primary;
    transition: all 0.8s ease;
    border-radius: 30px;
    color: $white;
    font-size: 12px;
    padding: 0.375rem 2rem;

    &:hover,
    &:focus {
      background: linear-gradient(#d19d04, #bf910ca1);
      background: -webkit-linear-gradient(#d19d04, #bf910ca1);
      box-shadow: none;

      color: $white;
    }

    &.float-right {
      border-radius: 10px;
    }
  }
}
</style>
