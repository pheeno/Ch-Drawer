import { mount } from '@vue/test-utils'
import Drawer from '@/packages/Drawer.vue'
import { DrawerController, instanceAssemble } from '@/packages/DrawerController.js'
describe('controller', () => {
  const assemble = { id: '1', instance: 'instance' }
  test('correct register', () => {
    DrawerController.registerInstance(assemble)
    expect(instanceAssemble[0]).toEqual(assemble)
  })
  test('correct unregisterInstance', () => {
    DrawerController.unregisterInstance('1')
    expect(instanceAssemble.length).toBeFalsy()
  })
})
const factory = ({ data = {}, propsData = {}, slots = {}, attachToDocument = false, mocks = {} } = {}) =>
  mount(Drawer, {
    data () {
      return { ...data }
    },
    attachToDocument,
    propsData,
    slots,
    mocks
  })

const header = '测试标题'
const content = '测试内容'
const footer = '测试底部'
describe('drawer render', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })
  test('correct display drawer', () => {
    const propsData = { visible: true }
    wrapper = factory({ propsData })
    expect(wrapper.isVisible()).toBeTruthy()
  })
  test('correct conceal drawer', () => {
    const propsData = { visible: true }
    wrapper = factory({ propsData })
    wrapper.setProps({ visible: false })
    expect(wrapper.isVisible()).toBeFalsy()
  })
  test('correct append to body', () => {
    const propsData = { visible: true }
    wrapper = factory({ propsData, attachToDocument: true })
    expect(wrapper.vm.$el.parentNode).toEqual(document.body)
  })

  test('render correct width', () => {
    const area = '35%'
    const propsData = location => ({ visible: false, area, location })
    const location = ['left', 'right', 'top', 'bottom']
    location.forEach(loc => {
      switch (loc) {
        case 'left':
          wrapper = factory({ propsData: propsData(loc) })
          wrapper.setProps({ visible: true })
          expect(wrapper.vm.isVertical).toBe(true)
          expect(wrapper.vm.$el.querySelector('.ch-drawer').style.width).toBe(area)
          expect(wrapper.contains('.ch-drawer--left')).toBeTruthy()
          wrapper.destroy()
          break
        case 'right':
          wrapper = factory({ propsData: propsData(loc) })
          wrapper.setProps({ visible: true })
          expect(wrapper.vm.isVertical).toBe(true)
          expect(wrapper.vm.$el.querySelector('.ch-drawer').style.width).toBe(area)
          expect(wrapper.contains('.ch-drawer--right')).toBeTruthy()
          wrapper.destroy()
          break
        case 'top':
          wrapper = factory({ propsData: propsData(loc) })
          wrapper.setProps({ visible: true })
          expect(wrapper.vm.isVertical).toBe(false)
          expect(wrapper.vm.$el.querySelector('.ch-drawer').style.height).toBe(area)
          expect(wrapper.contains('.ch-drawer--top')).toBeTruthy()
          wrapper.destroy()
          break
        case 'bottom':
          wrapper = factory({ propsData: propsData(loc) })
          wrapper.setProps({ visible: true })
          expect(wrapper.vm.isVertical).toBe(false)
          expect(wrapper.vm.$el.querySelector('.ch-drawer').style.height).toBe(area)
          expect(wrapper.contains('.ch-drawer--bottom')).toBeTruthy()
          wrapper.destroy()
          break
        default:
          break
      }
    })
    wrapper = factory({ propsData })
    wrapper.setProps({ visible: true })
  })
  test('correct display mask', () => {
    const propsData = { visible: true }
    wrapper = factory({ propsData, attachToDocument: true })
    expect(wrapper.contains('.ch-drawer__mask--default')).toBeTruthy()
  })
  test('correct conceal mask', () => {
    const propsData = { visible: true, mask: false }
    wrapper = factory({ propsData, attachToDocument: true })
    expect(wrapper.contains('.ch-drawer__mask--default')).toBeFalsy()
  })
  test('correct display blur', () => {
    wrapper = factory({ attachToDocument: true })
    const spy = jest.spyOn(wrapper.vm, 'open')
    wrapper.setProps({ visible: true })
    expect(spy).toHaveBeenCalled()
  })
  test('correct render header slot', () => {
    const propsData = { visible: true }
    const slots = { header }
    wrapper = factory({ propsData, slots })
    expect(wrapper.find('.ch-drawer__header').text()).toBe(header)
  })
  test('correct render content slot', () => {
    const propsData = { visible: false }
    const slots = { default: content }
    wrapper = factory({ propsData, slots, attachToDocument: true })
    wrapper.setProps({ visible: true })
    expect(wrapper.vm.rendered).toBe(true)
    expect(wrapper.find('.ch-drawer__content').text()).toBe(content)
  })
  test('correct render footer slot', () => {
    const propsData = { visible: false }
    const slots = { footer }
    wrapper = factory({ propsData, slots, attachToDocument: true })
    wrapper.setProps({ visible: true })
    expect(wrapper.find('.ch-drawer__footer').text()).toBe(footer)
  })
  test('correct display close button', () => {
    const propsData = { visible: true }
    wrapper = factory({ propsData, attachToDocument: true })
    expect(wrapper.find('.ch-drawer__close-btn').exists()).toBeTruthy()
  })
  test('correct conceal close button', () => {
    const propsData = { visible: true }
    wrapper = factory({ propsData, attachToDocument: true })
    wrapper.setProps({ closeVisible: false })
    expect(wrapper.find('.ch-drawer__close-btn').exists()).toBeFalsy()
  })
  test('correct inject custom class', () => {
    const customClass = 'custom-class'
    const propsData = { visible: true, customClass }
    wrapper = factory({ propsData, attachToDocument: true })
    expect(wrapper.contains('.custom-class')).toBeTruthy()
  })
})
describe('destroy on close', () => {
  test('correct destroy content when set the props equal true', () => {
    let wrapper = factory({ attachToDocument: true })
    wrapper.setProps({ visible: true, destroyOnClose: false })
    expect(wrapper.find('.ch-drawer__content').exists()).toBeTruthy()
    wrapper.setProps({ visible: false })
    expect(wrapper.find('.ch-drawer__content').exists()).toBeTruthy()
    wrapper.destroy()
    wrapper = factory({ attachToDocument: true })
    wrapper.setProps({ visible: true, destroyOnClose: true })
    expect(wrapper.find('.ch-drawer__content').exists()).toBeTruthy()
    wrapper.setProps({ visible: false })
    expect(wrapper.find('.ch-drawer__content').exists()).toBeFalsy()
  })
})
describe('popup location', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })
  test('location left', () => {
    wrapper = factory()
    expect(wrapper.find('.ch-drawer--left').exists()).toBeTruthy()
  })
  test('location right', () => {
    const propsData = { location: 'right' }
    wrapper = factory({ propsData })
    expect(wrapper.find('.ch-drawer--right').exists()).toBeTruthy()
  })
  test('location top', () => {
    const propsData = { location: 'top' }
    wrapper = factory({ propsData })
    expect(wrapper.find('.ch-drawer--top').exists()).toBeTruthy()
  })
  test('location bottom', () => {
    const propsData = { location: 'bottom' }
    wrapper = factory({ propsData })
    expect(wrapper.find('.ch-drawer--bottom').exists()).toBeTruthy()
  })
})
describe('events', () => {
  const wrapper = factory({ visible: false })
  const open = jest.fn()
  const close = jest.fn()
  wrapper.vm.$on('open', open)
  wrapper.vm.$on('close', close)
  test('correct throw hook', () => {
    wrapper.setProps({ visible: true })
    expect(open).toHaveBeenCalled()
    wrapper.setProps({ visible: false })
    expect(close).toHaveBeenCalled()
  })
})
describe('before close', () => {
  const beforeClose = jest.fn()
  const wrapper = factory({ propsData: { visible: false, beforeClose }, attachToDocument: true })
  test('correct excute before close hook on', () => {
    wrapper.setProps({ visible: true })
    expect(beforeClose).not.toHaveBeenCalled()
    wrapper.setProps({ visible: false })
    expect(beforeClose).toHaveBeenCalled()
  })
  test('correct excute before close hook on trigger close button', () => {
    wrapper.setProps({ visible: true })
    wrapper.find('.ch-drawer__close-btn').trigger('click')
    expect(beforeClose).toHaveBeenCalled()
  })
})
