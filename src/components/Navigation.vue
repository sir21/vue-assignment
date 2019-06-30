<template>
  <div>
    <header>
      <nav>
        <ul>
          <li class="li-left"><router-link to="/">Home</router-link></li>
          <li class="li-left"><router-link to="/laptops">Laptops</router-link></li>
          <li class="li-left"><router-link to="/phones">Phones</router-link></li>
          <li class="li-right"><router-link to="/shopping">Shopping Cart</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 10px;
  padding: 15px;
  overflow: hidden;
  background-color: #fff;
}

li {
  font-size: 25px;
}

.li-left {
  float: left;
  padding-left: 15px;
}
.li-right {
  float: right;
  padding-right: 15px;
}
</style>

