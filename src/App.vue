<template>
  <div id="app">
    <button @click='handlePopupDrawer({type:"left"})'>点我左侧划出</button>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente sint autem ad, atque minima voluptatum temporibus nobis mollitia quas? Cumque doloremque sequi ea temporibus, vitae rerum laudantium incidunt eaque?</div>
    <ch-drawer :visible.sync="visible"
               :location="location"
               :destroyOnClose='true'
               @opened='handleOpend'
               @close='handleClose'>
      <div>
        <button @click='visibleInside=true'>点我画中画</button>
        <ch-drawer :visible.sync='visibleInside'
                   :destroyOnClose='true'
                   area='25%'>
          <div slot='header'>
            我是标题1
          </div>
          <div>
            内容1
          </div>
        </ch-drawer>
      </div>
      <div slot='footer'>
        我是底部
        <button @click='visible=false'>点我关闭</button>
      </div>
    </ch-drawer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      visible: false,
      visibleInside: false,
      location: 'left'
    }
  },
  methods: {
    handlePopupDrawer ({ type }) {
      this.location = type
      this.visible = true
    }
  }
}
</script>
<style lang="stylus">
html {
  height 100%
  width 100%
  body {
    height 100%
    width 100%
    margin 0
    padding 0
    font-size 14px
    #app {
      height 100%
      width 100%
    }
  }
}
</style>
