export let instanceAssemble = []
export let drawerId = 1
export const DrawerController = {
  registerInstance (assemble) {
    instanceAssemble.push(assemble)
    return this
  },
  unregisterInstance (id) {
    instanceAssemble = instanceAssemble.filter(ins => ins.id !== id)
  },
  getCurrentTopInstance () {
    return instanceAssemble[instanceAssemble.length - 1]
  },
  shouldToggleBlur (id) {
    return instanceAssemble.indexOf(instanceAssemble.find(ins => ins.instance.id === id)) === 0
  },
  getInstanceAssemble () {
    return instanceAssemble
  },
  getCurrentDrawerId () {
    return drawerId
  }
}
// 第一个打开渲染遮罩和模糊，以后的不渲染
// 从第二个开始，每一个打开不渲染遮罩和模糊，但是模糊除自己之外的抽屉
export const DrawerMixin = {
  data () {
    return {
      isClosed: true,
      id: `ch-drawer-${drawerId}`
    }
  },
  methods: {
    open () {
      this.rendered = true
      this.isClosed = false
      this.$emit('open')
      DrawerController.registerInstance({ id: this.id, instance: this })
      if (DrawerController.shouldToggleBlur(this.id)) {
        this.blur && this.$root.$el.classList.add('drawer--blur')
        drawerId++
      }
    },
    close () {
      if (this.isClosed) return
      this.isClosed = true
      this.blur && DrawerController.shouldToggleBlur(this.id) && this.$root.$el.classList.remove('drawer--blur')
      DrawerController.unregisterInstance(this.id)
      this.destroyOnClose && (this.rendered = false)
      this.$emit('update:visible', false)
      this.$emit('close')
    }
  }
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    const topIns = DrawerController.getCurrentTopInstance()
    topIns && topIns.instance.escapeOnPress && topIns.instance.closeDrawer()
  }
})
