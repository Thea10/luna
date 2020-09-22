<template>
  <nav class="nav navbar-expand-md navbar-light bg-white d-flex flex-column h-100">
    <div class="d-flex justify-content-md-center">
      <button
        class="navbar-toggler collapsebtn1 d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div class="animated-icon1">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <router-link to="/" class="navbar-brand p-0">
        <img src="@/assets/logo.jpg" alt="logo" />
      </router-link>
    </div>

    <ul
      class="navbar-nav collapse navbar-collapse flex-column align-items-baseline align-items-md-center"
      id="collapsibleNavId"
    >
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <i class="fas fa-home"></i>
          <h6>Home</h6>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/buy" class="nav-link">
          <i class="fas fa-shopping-basket"></i>
          <h6>Store</h6>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/cart" class="nav-link">
          <i class="fas fa-shopping-cart"></i>
          <h6>Cart</h6>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link to="/login" class="nav-link">
          <i class="far fa-user"></i>
          <h6>Log In</h6>
        </router-link>
      </li>

      <li class="blobone">
        <div class="waves"></div>
      </li>

      <!--<img src="@/assets/blob1.svg" class="blobone" alt="blob" >-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" >
@import "@/assets/variables.scss";
@import "@/assets/keyframes.scss";

.nav {
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  .collapsebtn1 {
    padding: 5px;
    margin-right: 10px;
    border: none;
    height: 90px;

    .animated-icon1 {
      width: 20px;
      height: 20px;
      position: relative;
      margin: 0px;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      cursor: pointer;

      span {
        display: block;
        position: absolute;
        opacity: 1;
        border-radius: 5px;
        left: 0;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        height: 2px;
        width: 100%;
        background: $primary;
        transform-origin: left center;
      }

      span:nth-child(1) {
        top: 4px;
      }

      span:nth-child(2) {
        top: 10px;
        width: 100%;
      }

      span:nth-child(3) {
        top: 15px;
      }
    }

    .animated-icon1.open {
      span:nth-child(1) {
        top: 4px;
        left: 4px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
        width: 0%;
      }

      span:nth-child(3) {
        top: 18px;
        left: 4px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
  }

  .collapsebtn1:focus {
    outline: none;
  }

  .navbar-brand {
    margin-left: 0;

    img {
      height: 100px;

      @include md-min {
        height: 160px;
      }
    }
  }

  .navbar-nav {
    .nav-item {
      margin: 0.2rem;
      transition: all 0.8s;
      font-size: 0.7rem;

      .nav-link {
        color: $grey;
        display: flex;
        align-items: baseline;

        .fa,
        .fas,
        .far {
          border-radius: 50%;
          padding: 1rem;
          border: 1px solid $inactive;
          color: $inactive;
          transition: all 0.8s;
          -webkit-text-stroke: medium;
          -webkit-text-fill-color: white;
        }
        h6 {
          width: 50px;
          font-size: inherit;
          transition: all 0.8s;
        }
        &:hover,
        &.router-link-exact-active.router-link-active {
          color: $primary;
          .fa,
          .fas,
          .far {
            border: none;
            background: $primary;
            color: $white;
            -webkit-text-stroke: medium;
            -webkit-text-fill-color: #ffffff00;
          }

          h6 {
            color: $primary;
          }
        }
      }
    }

    @include md-min {
      margin-top: 5rem;
    }
  }

  .blobone {
    height: 100px;
    /* background: red; */
    width: 100px;
    border-radius: 50%;
    padding: 1rem;
    background: rgba(215, 168, 30, 0.74);
    box-shadow: inset 4px 4px 4px 4px #d7a81e;

    .waves {
      width: 100%;
      position: relative;
      height: 100%;
      background: #e1bf58;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: inset 4px 4px 4px 4px #d7a81e;

      &::before {
        border-radius: 46%;
        background-color: rgba(0, 0, 0, 0.75);
      }

      &::after {
        border-radius: 39%;
        background-color: rgba(0, 0, 0, 0.5);
      }

      &::before,
      &::after {
        background: #ffffff;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: -40%;
        transform: translate(0%, -50%);
        -webkit-animation: slowslosh 15s linear infinite;
        animation: slowslosh 15s linear infinite;
        position: absolute;
      }

      &:hover{
          &::before,
        &::after {
          -webkit-animation: slowslosh 8s linear infinite;
          animation: slowslosh 8s linear infinite;
        }

      }
    }

   
  }

  @include md-max {
    .navbar-nav {
      position: absolute;
      top: 14%;
      left: 2%;
      z-index: 1030;
      //background: #dba52152;
      //   background: #dba521d4;
      background: $white;
      width: 90%;
      border-radius: 10px;

      .nav-item {
        margin: 0.2rem;
        transition: all 0.8s;
        font-size: 0.7rem;

        .nav-link {
          .fa,
          .fas,
          .far {
            border-radius: 50%;
            padding: 1rem;
            // border: 0.5px solid $white;
            // color: $white;
            -webkit-text-fill-color: #ffffff00;
          }
          h6 {
            width: 50px;
            font-size: inherit;
            transition: all 0.8s;
          }
          &:hover,
          &.router-link-exact-active.router-link-active {
            color: $primary;
            .fa,
            .fas,
            .far {
              border: none;
              background: $primary;
              color: $white;
            }

            h6 {
              color: $primary;
            }
          }
        }
      }
    }

    .blobone {
      width: 70px;
      height: 70px;
    }
  }
}

.navbar-light {
  .navbar-nav {
    .nav-link {
      color: rgba(72, 72, 72, 0.9);
    }

    .active {
      .nav-link {
        color: $primary;
      }
    }

    .active-link {
      color: $primary;
    }
  }

  @include md-min {
    position: absolute;
    width: 16%;
  }
}


</style>
