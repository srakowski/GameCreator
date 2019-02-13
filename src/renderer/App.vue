<template>
  <div id="app">
    <list :items="students" @clear="students = []">
      Hi
      <div slot="header">
        <h1>Student List</h1>
      </div>
      <div slot="footer">
        (C) Shawn R
      </div>
    </list>

    <list :items="students" @clear="students = []">
      Hi
      <div slot="header">
        <h1>Student List</h1>
      </div>
      <div slot="footer">
        (C) Shawn R
      </div>
    </list>


    <!-- <span>{{name}}</span>
    <input v-model="name" type="text" />
    <button v-on:click="alertMe">TEST</button>
    <div v-if="name === 'Nicholas'">
      Nicholas's Stuff
    </div>
    <div v-else-if="name === 'Logan'">
      Logan's Stuff
    </div>
    <div v-else>
      Nobody's Stuff
    </div>
    <div v-show="name !== 'Show'">
      I am shown!
    </div>

    
    <!-- <div v-for="(s, index) in students" :key="index">
      {{s.firstName}}
      <hr />
      {{s.lastName}}
    </div> -->

    <!-- <hr />

    {{fullName}}

    <form @submit.prevent="onSubmit">
      <label>Name <input type="text" /></label>
      <button>Submit</button>
    </form> --> 

  </div>
</template>

<script>
  import List from './List.vue';

  export default {
    name: 'gamecreator',
    data() {
      return {
        name: 'Shawn',
        students: [
          { firstName: 'Logan', lastName: 'H' },
          { firstName: 'Nicholas', lastName: 'R' },
        ],
      };
    },
    computed: {
      fullName: {
        get() {
          return '';// `${this.students[0].firstName} ${this.students[0].lastName}`;
        },
        set(value) {
          /* eslint-disable */
          console.log(value);
        }
      },
    },
    watch: {
      name(newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
      }
    },
    methods: {
      alertMe() {
        this.name = 'ALERT';
      },
      onSubmit(e) {
        console.error(e);
      },
    },
    created() {
      // call some api
    },
    beforeDestroy() {
      // check save data
    },
    components: {
      List,
    },
  };
</script>

<style>
  /* CSS */
</style>
