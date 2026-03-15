const canvas = document.querySelector('canvas')
const div2 = canvas.parentElement
const div1 = div2.parentElement

canvas.style.backgroundColor = 'black'

canvas.addEventListener('pointerenter', e => {
    console.log('canvas pointerenter')
    // canvas.setPointerCapture(e.pointerId)
}, true)

canvas.addEventListener('pointerdown', e => {
    console.log('canvas pointerdown')
    canvas.setPointerCapture(e.pointerId)
}, true)

canvas.addEventListener('pointermove', e => {
    console.log('canvas pointermove', e.currentTarget)
    // canvas.setPointerCapture(e.pointerId)
}, true)

canvas.addEventListener('pointerup', e => {
    console.log('canvas pointerup')
    // canvas.releasePointerCapture(e.pointerId)
}, true)

canvas.addEventListener('pointerleave', e => {
    console.log('canvas pointerleave')
}, true)

canvas.addEventListener('gotpointercapture', e => {
    console.log('canvas gotpointercapture')
}, true)

div1.addEventListener('pointerenter', e => {
    console.log('div1 pointerenter')
}, true)

div1.addEventListener('pointerdown', e => {
    console.log('div1 pointerdown')
}, true)

div1.addEventListener('pointermove', e => {
    console.log('div1 pointermove', e.currentTarget)
}, true)

div1.addEventListener('pointerup', e => {
    console.log('div1 pointerup')
}, true)

div1.addEventListener('pointerleave', e => {
    console.log('div1 pointerleave')
}, true)

div2.addEventListener('pointerenter', e => {
    console.log('div2 pointerenter')
}, true)

div2.addEventListener('pointerdown', e => {
    console.log('div2 pointerdown')
}, true)

div2.addEventListener('pointermove', e => {
    console.log('div2 pointermove', e.currentTarget)
}, true)

div2.addEventListener('pointerup', e => {
    console.log('div2 pointerup')
}, true)

div2.addEventListener('pointerleave', e => {
    console.log('div2 pointerleave')
}, true)

document.documentElement.addEventListener('pointermove', e => {
    document.documentElement.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}, { capture: true, passive: false })

document.documentElement.addEventListener('touchstart', e => {
    e.preventDefault()
}, { capture: true, passive: false })

document.documentElement.addEventListener('touchmove', e => {
    e.preventDefault()
}, { capture: true, passive: false })