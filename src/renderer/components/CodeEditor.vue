<template>
    <div>
      Code {{id}}
      <iframe style="width: 500px; height: 500px;" src="http://www.facebook.com"></iframe>
      <webview src="http://facebook.com"></webview>
    </div>
</template>

<script>
export default {
  props: {
    id: String,
  },
};
</script>

<style>

</style>
