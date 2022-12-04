<template>
  <div>
    <header class="header">
      <nav class="nav">
        <h1 class="link">
            BANNAIDIN Book Shop
        </h1>
      </nav>
    </header>
    <Shoppingcart />
  </div>
</template>

<script>
// @ is an alias to /src
import Shoppingcart from "@/components/Shoppingcart.vue";

export default {
  name: "Home",
  components: {
    Shoppingcart,
  },
};
</script>


<style scoped>
  .header {
    width: 100%;
    height: 70px;
    background-color: #333333;
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    width: 600px;
  }

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .link {
    list-style: none;
    
    color: #fff;
    font-size: 30px;
  }

  .link a {
    color: #fff;
    text-decoration: none;
  }
</style>