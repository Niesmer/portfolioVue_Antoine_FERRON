<template>
    <div class="view-404">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <router-link to="/">Go back to Home</router-link>
    </div>
</template>

<script>
export default {
    name: 'View404'
}
</script>

<style scoped>
.view-404 {
    text-align: center;
    margin-top: 50px;
}

.view-404 h1 {
    font-size: 3em;
    margin-bottom: 20px;
}

.view-404 p {
    font-size: 1.5em;
    margin-bottom: 20px;
}

.view-404 a {
    font-size: 1.2em;
    color: #42b983;
    text-decoration: none;
}
</style>