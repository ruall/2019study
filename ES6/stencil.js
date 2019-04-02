let name = 'abc'
console.log(`你好${name}`)

function stencil(formats, ...args) {
    console.log(formats)
    console.log(args)
}

stencil`你好，${name}！再见。${name}`