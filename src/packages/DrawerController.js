export let instanceAssemble = []
export let drawerId = 1
export const DrawerController = {
  zNumber: 0,
  registerInstance (assemble) {
    if (instanceAssemble.length === 0) {
      instanceAssemble.push(assemble)
      this.increaseZ()
    } else {
      !instanceAssemble.some(ins => ins.instance.id === assemble.id) && instanceAssemble.push(assemble)
      this.increaseZ()
    }
    return this
  },
  unregisterInstance (id) {
    instanceAssemble = instanceAssemble.filter(ins => ins.id !== id)
    this.minusZ()
  },
  getCurrentTopInstance () {
    return instanceAssemble[instanceAssemble.length - 1]
  },
  shouldToggleBlur (id) {
    return instanceAssemble.indexOf(instanceAssemble.find(ins => ins.id === id)) === 0
  },
  getInstanceAssemble () {
    return instanceAssemble
  },
  getCurrentDrawerId () {
    return drawerId
  },
  increaseZ () {
    ++this.zNumber
  },
  minusZ () {
    --this.zNumber
  },
  getCurrentZ () {
    return this.zNumber
  }
}
export const DrawerMixin = {
  data () {
    return {
      id: `ch-drawer-${drawerId}`
    }
  },
  beforeMount () {
    drawerId++
  },
  mounted () {
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        const topIns = DrawerController.getCurrentTopInstance()
        topIns && topIns.instance.escapeOnPress && topIns.instance.closeDrawer()
      }
    })
  },
  methods: {
    open () {
      this.rendered = true
      this.isClosed = false
      this.$emit('open')
      DrawerController.registerInstance({ id: this.id, instance: this })
      this.$el.style.zIndex = this.$chDrawerZIndex + DrawerController.getCurrentZ()
      if (DrawerController.shouldToggleBlur(this.id)) {
        this.blur && this.$root.$el.classList.add('drawer--blur')
      }
    },
    close () {
      this.blur && DrawerController.shouldToggleBlur(this.id) && this.$root.$el.classList.remove('drawer--blur')
      DrawerController.unregisterInstance(this.id)
      this.destroyOnClose && (this.rendered = false)
      this.$emit('update:visible', false)
      this.$emit('close')
    }
  }
}
