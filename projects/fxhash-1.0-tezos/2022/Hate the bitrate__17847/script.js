
const creator = new URLSearchParams(window.location.search).get('creator')
const viewer = new URLSearchParams(window.location.search).get('viewer')

console.log('OBJKT created by', creator)
console.log('OBJKT viewed by', viewer)
