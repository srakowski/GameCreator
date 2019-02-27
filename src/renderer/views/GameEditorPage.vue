<template>
    <div class="editor">
        <header>
            Editor
            <router-link to="/new-game">Landing</router-link>
            <router-link :to="{name: 'code-editor'}">Code</router-link>
            <router-link :to="{name: 'sfx-editor'}">SFX</router-link>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
};
</script>

<style>
header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 64px;
}
main {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
