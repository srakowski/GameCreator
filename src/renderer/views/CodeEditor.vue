<template>
  <div id="ace"></div>
</template>

<script>
import ace from 'ace-builds/src-noconflict/ace';

export default {
  props: {
    id: String,
  },
  mounted() {
    var editor = ace.edit("ace");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
  },
};
</script>

<style>
#ace {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
