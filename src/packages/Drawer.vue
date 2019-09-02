<template>
  <transition name='ch-drawer'
              @after-enter='afterEnter'
              @after-leave='afterLeave'>
    <div class='ch-drawer__wrapper'
         v-show='visible'>
      <div class='ch-drawer__mask'
           :class='{"ch-drawer__mask--default":mask}'></div>
      <div class='ch-drawer__container'
           :class='isDrawerOpen'
           @click.self='handleContainerClick'>
        <div class='ch-drawer'
             :class='[`ch-drawer--${location}`,customClass]'
             :style='isVertical? {width:area} : {height:area}'>
          <header class='ch-drawer__header'>
            <slot name='header'>
              <span>{{title}}</span>
            </slot>
            <div class='ch-drawer__close-btn'
                 v-if='closeVisible'
                 @click='closeDrawer'></div>
          </header>
          <section class='ch-drawer__content'
                   v-if='rendered'>
            <slot></slot>
          </section>
          <footer v-if='hasFooter'
                  class='ch-drawer__footer'>
            <slot name='footer'></slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import './style.styl'
import { DrawerMixin } from './DrawerController'
export default {
  name: 'ChDrawer',
  mixins: [DrawerMixin],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    escapeOnPress: {
      type: Boolean,
      default: true
    },
    escapeOnClick: {
      type: Boolean,
      default: true
    },
    area: {
      type: [String, Number],
      default: '25%'
    },
    customClass: String,
    title: String,
    closeVisible: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: true
    },
    blur: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    location: {
      type: String,
      default: 'left',
      validator: value => ['left', 'right', 'top', 'bottom'].includes(value)
    },
    beforeClose: {
      type: Function
    }
  },
  data () {
    return {
      rendered: false,
      isClosed: true
    }
  },
  computed: {
    isVertical () {
      return this.location === 'left' || this.location === 'right'
    },
    isDrawerOpen () {
      return this.visible && 'ch-drawer--open'
    },
    hasFooter () {
      return !!(this.rendered && this.$slots.footer)
    }
  },
  watch: {
    visible (flag) {
      if (flag) {
        this.doAppendToBody()
        this.open()
      } else {
        this.closeDrawer()
      }
    }
  },
  destroyed () {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  methods: {
    afterEnter () {
      this.$emit('opened')
    },
    afterLeave () {
      this.$emit('closed')
    },
    doAppendToBody () {
      document.body.append(this.$el)
    },
    handleContainerClick () {
      this.escapeOnClick && this.closeDrawer()
    },
    closeDrawer () {
      if (this.isClosed) return
      this.isClosed = true
      this.beforeClose && typeof this.beforeClose === 'function'
        ? this.beforeClose(this.close)
        : this.close()
    }
  }
}
</script>
