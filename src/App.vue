<template>
  <div id="app">
    <HeaderComponents v-bind:propsLikes="likes"></HeaderComponents>
    <SearchBodyComponent></SearchBodyComponent>
    <ListComponent v-bind:propsTabs="tabs" v-bind:propsList="list"></ListComponent>
  </div>
</template>

<script>
import HeaderComponents from "./components/HeaderComponent.vue";
import ListComponent from "./components/ListComponent.vue";
import SearchBodyComponent from "./components/SearchBodyComponent.vue";

export default {
  data() {
    return {
      // iconName, ApplicationName, Developer, M1Optimized, Rosseta2, M1SupportedVersion, LastUpdate, Contribute
      list: [
        {'iconName': 'fas fa-rocket', 'ApplicationName': 'Newton', 'Developer': 'CloudMagic,inc.', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '', 'LastUpdate': 'Feb 9,2021', 'Contribute': ''},
        {'iconName': 'fas fa-chevron-right', 'ApplicationName': 'FFmpeg', 'Developer': 'FFmpeg Developers', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '4.3.1', 'LastUpdate': 'Feb 8,2021', 'Contribute': ''},
        {'iconName': 'fas fa-desktop', 'ApplicationName': 'iTerm', 'Developer': 'George Nachman', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '3.4.3+', 'LastUpdate': 'Feb 8,2021', 'Contribute': ''},
        {'iconName': '', 'ApplicationName': 'Screenflick', 'Developer': 'Araelium Group', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '2.7.57', 'LastUpdate': 'Feb 8,2021', 'Contribute': ''},
        {'iconName': 'fas fa-chevron-right', 'ApplicationName': 'TextMate', 'Developer': 'Macromates', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '2.0.16', 'LastUpdate': 'Feb 8,2021', 'Contribute': ''},
        {'iconName': 'fab fa-ideal', 'ApplicationName': 'IntelliJ IDEA', 'Developer': 'JetBrains', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '2020.3.2', 'LastUpdate': 'Feb 8,2021', 'Contribute': ''},
        {'iconName': 'fas fa-chevron-right', 'ApplicationName': '爱奇艺', 'Developer': 'iQIYI', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '11.11.5', 'LastUpdate': 'Feb 8,2021', 'Contribute': ''},
        {'iconName': '', 'ApplicationName': 'IINA', 'Developer': 'IINA Developers', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '1.2.0', 'LastUpdate': 'Feb 6,2021', 'Contribute': ''},
        {'iconName': 'fas fa-beer', 'ApplicationName': 'Homebrew', 'Developer': 'Homebrew', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '3.0.0', 'LastUpdate': 'Feb 6,2021', 'Contribute': ''},
        {'iconName': 'fas fa-chevron-right', 'ApplicationName': 'Parallels access', 'Developer': 'Parallels International GmbH.', 'M1Optimized': true, 'Rosseta2': false, 'M1SupportedVersion': '6.1.0', 'LastUpdate': 'Feb 5,2021', 'Contribute': ''},
        {'iconName': '', 'ApplicationName': 'Skeebus', 'Developer': '13Cubed', 'M1Optimized': true, 'Rosseta2': false, 'M1SupportedVersion': '2.3', 'LastUpdate': 'Feb 5,2021', 'Contribute': ''},
        {'iconName': 'fas fa-hard-hat', 'ApplicationName': 'VLC', 'Developer': 'VideoLAN', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '3.0.12.1', 'LastUpdate': 'Feb 5,2021', 'Contribute': ''},
        {'iconName': 'fas fa-video', 'ApplicationName': 'Zoom', 'Developer': 'zoom', 'M1Optimized': true, 'Rosseta2': null, 'M1SupportedVersion': '5.5.0', 'LastUpdate': 'Feb 3,2021', 'Contribute': ''},
        {'iconName': 'fas fa-project-diagram', 'ApplicationName': 'Scapple', 'Developer': 'Literature & Latte', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '1.4+', 'LastUpdate': 'Feb 3,2021', 'Contribute': ''},
        {'iconName': 'fas fa-trash-restore', 'ApplicationName': 'AppCleaner', 'Developer': 'FreeMacSoft', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '3.6.0 (4070)', 'LastUpdate': 'Feb 3,2021', 'Contribute': ''},
        {'iconName': 'fab fa-edge', 'ApplicationName': 'Microsoft Edge', 'Developer': 'Microsoft', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '88.0.705.50 [Universal]', 'LastUpdate': 'Feb 3,2021', 'Contribute': ''},
        {'iconName': 'fas fa-wrench', 'ApplicationName': 'KeePassXC', 'Developer': 'KeePassXC team', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '2.6.4', 'LastUpdate': 'Feb 1,2021', 'Contribute': ''},
        {'iconName': 'fab fa-watchman-monitoring', 'ApplicationName': 'MenuMeters', 'Developer': 'Yuji Tech', 'M1Optimized': true, 'Rosseta2': false, 'M1SupportedVersion': '2.1.3', 'LastUpdate': 'Jan 31,2021', 'Contribute': ''},
        {'iconName': 'fab fa-microsoft', 'ApplicationName': 'Office 365', 'Developer': 'Microsoft', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '16.45', 'LastUpdate': 'Jan 31,2021', 'Contribute': ''},
        {'iconName': 'fas fa-chevron-right', 'ApplicationName': 'iResize4', 'Developer': 'daniele.ch', 'M1Optimized': true, 'Rosseta2': '-', 'M1SupportedVersion': '4.5.1', 'LastUpdate': 'Jan 31,2021', 'Contribute': ''},
        {'iconName': 'fas fa-space-shuttle', 'ApplicationName': 'Road Trip Planner', 'Developer': 'Modesitt Software', 'M1Optimized': true, 'Rosseta2': '-', 'M1SupportedVersion': '4.6', 'LastUpdate': 'Jan 31,2021', 'Contribute': ''},
        {'iconName': 'fas fa-project-diagram', 'ApplicationName': 'eqMac', 'Developer': 'Bitgapp', 'M1Optimized': true, 'Rosseta2': '-', 'M1SupportedVersion': '0.3.7', 'LastUpdate': 'Jan 31,2021', 'Contribute': ''},
        {'iconName': 'fas fa-termianl', 'ApplicationName': 'Terminus', 'Developer': 'Crystalnix', 'M1Optimized': true, 'Rosseta2': '-', 'M1SupportedVersion': '7.4.1', 'LastUpdate': 'Jan 31,2021', 'Contribute': ''},
        {'iconName': 'fas fa-cogs', 'ApplicationName': 'SwitchResX', 'Developer': 'Stepahne Madrau', 'M1Optimized': true, 'Rosseta2': '-', 'M1SupportedVersion': '4.11', 'LastUpdate': 'Jan 31,2021', 'Contribute': ''},
        {'iconName': 'fas fa-chevron-right', 'ApplicationName': 'Phocus', 'Developer': 'hasselblad', 'M1Optimized': true, 'Rosseta2': true, 'M1SupportedVersion': '3.5.6', 'LastUpdate': 'Jan 30,2021', 'Contribute': ''}
      ],
      likes: 220,
      tabs: ['NATIVE M1 SUPPORT', 'ROSETTA 2 ONLY', 'NOT WORKING', 'NOT TESTED YET']
    }
  },
  components: {
    'HeaderComponents': HeaderComponents,
    'ListComponent': ListComponent,
    'SearchBodyComponent': SearchBodyComponent
  }
}
</script>

<style>
#app {
  background-color: black;
}
.facebookStyleButton {
  height: 30px;
  padding: 2px 2px 2px 2px;
  color: white;
  background-color: #4267b2;
}
.snsStyleButton {
  height: 50px;
  padding: 2px 2.5px 2.5px 2px;
  color: white;
  background-color: #272727;
}
button {
  border: none;
  border-radius: 2px;
  margin: 2px 2px 2px 2px;
  box-sizing: inherit;
}
</style>