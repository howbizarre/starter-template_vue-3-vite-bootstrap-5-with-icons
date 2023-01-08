<template>
    <Nav />

    <header class="container">
        <Heads>What is the point of all?</Heads>
    </header>

    <main class="container flex-shrink-0 mb-4">
        <router-view />
    </main>

    <footer class="container footer mb-2 mt-auto">
        <div class="border-top py-3">
            &copy; How
            <Refs />
        </div>
    </footer>
</template>

<script setup>
    import Nav from "../components/Nav.vue";
    import Refs from "../components/Refs.vue";
    import Heads from "../components/Heads.vue";
</script>
