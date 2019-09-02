<template>
  <div class='location'>
    <div class='location-radio__container'>
      <input type='radio'
             id='left'
             value='left'
             v-model="locationPick"
             class='location-radio'></input>
      <label for='left'>左侧弹出</label>
      <input type='radio'
             class='location-radio'
             id='right'
             value='right'
             v-model="locationPick"></input>
      <label for='right'>右侧弹出</label>
      <input type='radio'
             class='location-radio'
             id='top'
             value='top'
             v-model="locationPick"></input>
      <label for='top'>顶部弹出</label>
      <input type='radio'
             class='location-radio'
             id='bottom'
             value='bottom'
             v-model="locationPick"></input>
      <label for='bottom'>底部弹出</label>
    </div>
    <div class='location-button__wrapper'>
      <button class='location-button'
              @click='visible=true'> Try Me</button>
    </div>
    <ch-drawer :location='locationPick'
               :visible.sync='visible'
               :before-close='handleBeforeClose'>
      我在这里
    </ch-drawer>
  </div>
</template>
<script>
export default {
  name: "ExamplesLocation",
  data() {
    return {
      locationPick: "left",
      visible: false
    };
  },
  methods: {
    handleBeforeClose(next) {
      alert("prepare to close");
      next();
    }
  }
};
</script>

