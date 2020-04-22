let btnText = document.querySelector('#btnText')
let bgColor = document.querySelector('#bgColor')
let txtColor = document.querySelector('#txtColor')
let txtTransform = document.querySelector('#txtTransform')

//padding
let tPad = document.querySelector('#tPad')
let rPad = document.querySelector('#rPad')
let bPad = document.querySelector('#bPad')
let lPad = document.querySelector('#lPad')

//radius
let tlRad = document.querySelector('#tlRad')
let trRad = document.querySelector('#trRad')
let blRad = document.querySelector('#blRad')
let brRad = document.querySelector('#brRad')

let btn = document.querySelector('#btn')

//border
let border = document.getElementsByName('border')
let borderInp = document.querySelector('#border')

//generate code button
let generateCode = document.querySelector('#generateCode')

let html = document.querySelector('.html')
let css = document.querySelector('.css')

//code area
let htmlCode = document.querySelector('#html-code')
let csCode = document.querySelector('#css-code')



let cssCode = ""
let bColor = ""
let tColor = ""
let tTransform = ""
let tPadding = ""
let rPadding = ""
let bPadding = ""
let lPadding = ""
let tLeftRadius = ""
let tRightRadius = ""
let bLeftRadius = ""
let bRightRadius = ""
let borderProp = ""

btnText.addEventListener('input', () => {
    btn.innerText = btnText.value
    button = `<button>${btnText.value}</button>`
})

bgColor.addEventListener('input', () => {
    bColor = bgColor.value
    btn.style.backgroundColor = bgColor.value
})


txtColor.addEventListener('input', () => {
    tColor = txtColor.value
    btn.style.color = txtColor.value
})

txtTransform.addEventListener('input', () => {
    tTransform= txtTranform.value
    btn.style.textTransform = txtTransform.value
})

tPad.addEventListener('input', () => {
    tPadding = `${tPad.value}px`
    btn.style.paddingTop = `${tPad.value}px`
})

rPad.addEventListener('input', () => {
    rPadding = `${rPad.value}px`
    btn.style.paddingRight = `${rPad.value}px`
})

bPad.addEventListener('input', () => {
    bPadding = `${bPad.value}px`
    btn.style.paddingBottom = `${bPad.value}px`
})

lPad.addEventListener('input', () => {
    lPadding = `${lPad.value}px`
    btn.style.paddingLeft = `${lPad.value}px`
})

tlRad.addEventListener('input', () => {
    tLeftRadius = `${tlRad.value}px`
    btn.style.borderTopLeftRadius = `${tlRad.value}px`
})

trRad.addEventListener('input', () => {
    tRightRadius = `${trRad.value}px`
    btn.style.borderTopRightRadius = `${trRad.value}px`
})

blRad.addEventListener('input', () => {
    bLeftRadius = `${blRad.value}px`
    btn.style.borderBottomLeftRadius = `${blRad.value}px`
})

brRad.addEventListener('input', () => {
    bRightRadius = `${brRad.value}px`
    btn.style.borderBottomRightRadius = `${brRad.value}px`
})

border[0].addEventListener('click', () => {
    borderInp.style.opacity = 1
})

borderInp.addEventListener('input', () => {
    btn.style.border = borderInp.value
    borderProp = borderInp.value
})

border[1].addEventListener('click', () => {
    btn.style.border = "none"
    borderInp.style.opacity = 0
    borderProp = "none"
})

const filterProp = (props, value) => {
    return value === "" ? "" : value === "px" ? "" : `${props}: ${value} \n`
}

generateCode.addEventListener('click', () => {
    cssCode = "background-color: " + bColor + "\n" +
    "color: " + `${tColor !== "" ? tColor : "#000"} \n` +
    filterProp("text-transform", tTransform) +
    filterProp("padding-top", tPadding) +
    filterProp("padding-right", rPadding) +
    filterProp("padding-bottom", bPadding) +
    filterProp("padding-left", lPadding) +
    filterProp("border-top-left-radius", tLeftRadius) +
    filterProp("border-top-right-radius", tRightRadius) +
    filterProp("border-bottom-left-radius", bLeftRadius) +
    filterProp("border-bottom-right-radius", bRightRadius) +
    filterProp("border", borderProp)

    cssCode = `button {
        ${cssCode}}`
        html.style.opacity = 1
        css.style.opacity = 1
        htmlCode.innerText = button
        csCode.innerText = cssCode

    
})







