<template>
  <div class='nested'>
    <div class='nested-button__wrapper'>
      <button class='location-button'
              @click='visible=true'>Try Me</button>
    </div>
    <ch-drawer :visible.sync='visible'
               area='35%'>
      <div slot='header'
           style="padding:0 1em">
        Ch-Drawer
      </div>
      <div style='padding:1em'>
        <div style='margin-bottom:2em'>
          我是外层的抽屉
        </div>
        <button class='location-button'
                @click='visibleInside=true'>Open Inside</button>
        <ch-drawer :visible.sync='visibleInside'>
          <div>
            <span>I'm inside</span>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatum minima tempora totam voluptatem suscipit pariatur, sequi magni cumque ex at inventore voluptate sit alias aperiam eveniet asperiores facere sed.</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatum minima tempora totam voluptatem suscipit pariatur, sequi magni cumque ex at inventore voluptate sit alias aperiam eveniet asperiores facere sed.</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatum minima tempora totam voluptatem suscipit pariatur, sequi magni cumque ex at inventore voluptate sit alias aperiam eveniet asperiores facere sed.</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatum minima tempora totam voluptatem suscipit pariatur, sequi magni cumque ex at inventore voluptate sit alias aperiam eveniet asperiores facere sed.</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatum minima tempora totam voluptatem suscipit pariatur, sequi magni cumque ex at inventore voluptate sit alias aperiam eveniet asperiores facere sed.</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatum minima tempora totam voluptatem suscipit pariatur, sequi magni cumque ex at inventore voluptate sit alias aperiam eveniet asperiores facere sed.</div>

          </div>
          <div slot='footer'>
            <button class='location-button'
                    @click='visibleInside=false'>关闭</button>
          </div>
        </ch-drawer>
      </div>

    </ch-drawer>
  </div>
</template>
<script>
export default {
  name: "ExamplesLocation",
  data() {
    return {
      visibleInside: false,
      visible: false
    };
  }
};
</script>

