<template>
  <div>
    <!-- header -->
    <span>
      <button v-on:click="typeButtonClicked(tab)" class="typeButton" v-bind:key="tab" v-for="tab in propsTabs">
        <i class="fas fa-check-circle" :color="getTypeButtonColor(tab)"></i> {{tab}}
      </button>
    </span>
    <div>
      <table>
        <thead>
          <th ></th>
        </thead>
      </table>
    </div>
    <!-- body -->
    <span>
      <table>
        <thead>
          <th v-bind:key="head" v-for="head in propsTheads">{{head}}</th>
        </thead>
        <tbody>
<!-- iconName, ApplicationName, Developer, M1 optimized, Rosseta 2, M1 Supported version, Last update, Contribute -->

          <tr v-bind:key="item" v-for="item in propsList">
            <td><i :class="item.iconName"></i></td>
            <td>{{item.ApplicationName}}</td>
            <td>{{item.Developer}}</td>
            <td>{{item.M1Optimized}}</td>
            <td>{{item.Rosseta2}}</td>
            <td>{{item.M1SupportedVersion}}</td>
            <td>{{item.LastUpdate}}</td>
            <td><i class="fas fa-pencil-ruler"></i></td>
          </tr>
        </tbody>
      </table>
    </span>
  </div>
</template>

<script>
export default {
  props: [
    "propsTabs",
    "propsTheads",
    "propsList"
  ],
  methods: {
    typeButtonClicked: function(val) {
      console.log(val);
    },
    getTypeButtonColor: function(val) {
        if (val == 'NATIVE M1 SUPPORT') {
            return '#388e3c!important';
        } else if (val == 'ROSETTA 2 ONLY') {
            return '#fbc02d!important';
        } else if (val == 'NOT WORKING') {
            return '#d32f2f!important';
        } else {
            return '#d32f2f!important';
        }
    }
  },
  computed: {
    // getTypeButtonColor: function(val) {
    //     if (val == 'NATIVE M1 SUPPORT') {
    //         return '#388e3c!important';
    //     } else if (val == 'ROSETTA 2 ONLY') {
    //         return '#fbc02d!important';
    //     } else if (val == 'NOT WORKING') {
    //         return '#d32f2f!important';
    //     } else {
    //         return '#d32f2f!important';
    //     }
    // }
  }
}
</script>

<style scoped>
.typeButton {
  color: hsla(0,0%,100%,.6);

}
.typeButton-selected {
  color: #2196f3;
}
th {
  color: hsla(0,0%,100%,.6);
}
td {
  color: white;
  border: 3px 3px 3px 3px;
}
span {
  width: 100%;
  background-color: hsla(0,0%,100%,.6);
}
</style>