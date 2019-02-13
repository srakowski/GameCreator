<template>
    <div>Editor
        <div>
            <router-link to="/new-game">Landing</router-link>
            <router-link :to="{name: 'code-editor'}">Code</router-link>
            <router-link :to="{name: 'sfx-editor'}">SFX</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
};
</script>

<style>

</style>
