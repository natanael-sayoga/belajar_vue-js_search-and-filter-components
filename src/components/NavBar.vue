<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <RouterLink v-bind:active-class="'active'" v-bind:to="`/`" class="nav-link" href="#">Home</RouterLink>
            </li>
            <!-- <li class="nav-item">
                <RouterLink v-bind:active-class="'active'" v-bind:to="`/`" class="nav-link" href="#">Fetch</RouterLink>
            </li> -->
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
    </div>
</nav>
</template>

<script setup>

</script>

<style scoped>
.active{
    text-decoration: underline;
}
</style>