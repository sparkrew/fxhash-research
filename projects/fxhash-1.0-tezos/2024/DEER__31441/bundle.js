// const JSON_DATA_LAYERS = JSON.parse(
//     '{"00-Background":["1-Background_1.png","1-Background_2.png"],"01-SHA":["1-SHA_1.png","1-SHA_2.png","1-SHA_3.png"],"02-DEER":["1-DEER_1.png","1-DEER_2.png"]}'
// )

String.replacei = String.prototype.replacei = function (e, t) {
    var n = this.toLowerCase().indexOf(e.toLowerCase())
    return -1 == n ? this : this.substr(0, n) + t + this.substr(n + e.length)
}

const t = document.createElement('canvas')
const r = new (function (e) {
        ;(this.layers = []),
            (this.addLayer = function (e) {
                return (
                    (layer = (function (e, t) {
                        var n,
                            r = {}
                        for (n in e)
                            Object.prototype.hasOwnProperty.call(e, n) &&
                                (r[n] = e[n])
                        for (n in t)
                            Object.prototype.hasOwnProperty.call(t, n) &&
                                (r[n] = t[n])
                        return r
                    })(
                        {
                            id: Math.random().toString(36).substr(2, 5),
                            show: !0,
                            render: function (e, t) {},
                        },
                        e
                    )),
                    !1 !== this.getLayer(layer.id)
                        ? (console.log('Layer already exists'),
                          console.log(e),
                          !1)
                        : (this.layers.push(layer), this)
                )
            }),
            (this.getLayer = function (e) {
                for (var t = this.layers.length, n = 0; n < t; n++)
                    if (this.layers[n].id === e) return this.layers[n]
                return !1
            }),
            (this.removeLayer = function (e) {
                for (var t = this.layers.length, n = 0; n < t; n++)
                    if (this.layers[n].id === e)
                        return (
                            (removed = this.layers[n]),
                            this.layers.splice(n, 1),
                            removed
                        )
                return !1
            }),
            (this.render = function () {
                var e = this.canvas,
                    t = this.ctx2d
                this.layers.forEach(function (n, r, i) {
                    n.show && n.render(e, t)
                })
            }),
            (this.canvas = e),
            (this.ctx2d = this.canvas.getContext('2d'))
    })(t),
    i = document.getElementById('theCanvas'),
    s = i.getContext('2d'),
    o = document.getElementById('download')
i.addEventListener('click', e => {
    o.classList.toggle('visible')
}),
    o.addEventListener('click', e => {
        !(function () {
            const e = document.createElement('a')
            ;(e.download = 'fxhash-download.png'),
                (e.href = t.toDataURL()),
                e.click()
        })()
    })
let a = null
function l() {
    s.drawImage(t, 0, 0, i.width, i.height)
}
;(window.$fxhashFeatures = {}),
    window.addEventListener(
        'resize',
        function () {
            let e = (function (e, t, n, r) {
                var i = Math.min(n / e, r / t)
                return { width: e * i, height: t * i }
            })(t.width, t.height, window.innerWidth, window.innerHeight)
            ;(i.width = e.width), (i.height = e.height), l()
        },
        !1
    )
let h = 0
const d = /\d+(-\([\w-]+\))?-(.+)/
Object.keys(JSON_DATA_LAYERS)
    .filter(t => JSON_DATA_LAYERS[t].length)
    .sort((e, t) => parseInt(e.split('-')[0]) - parseInt(t.split('-')[0]))
    .forEach(n => {
        h++
        let i = []
        JSON_DATA_LAYERS[n].forEach(e => {
            i.push([e, parseInt(e.split('-')[0])])
        })
        let s = (function (e) {
            let t = []
            for (let n in e) t = t.concat(new Array(e[n][1]).fill(e[n][0]))
            return (n = t)[($fx.rand() * n.length) | 0]
            var n
        })(i)
        const o = {},
            c = d.exec(n)
        let u = c[1]
        const p = c[2]
        if (u) {
            ;(u = u.substring(2, u.length - 1)), (optionArray = u.split('_'))
            for (const e of optionArray) {
                let t,
                    n = e.split('-'),
                    r = n.shift()
                n.length && (t = n.join('-')), (o[r] = t || !0)
            }
        }
        o.hide ||
            (window.$fxhashFeatures[p] = s
                .split('-')
                .splice(1)
                .join('-')
                .replacei('.png', '')
                .replaceAll('_', ' '))
        let f = new Image()
        f.addEventListener(
            'load',
            function () {
                a ||
                    ((a = !0),
                    (t.width = f.width),
                    (t.height = f.height),
                    window.dispatchEvent(new Event('resize'))),
                    r.render(),
                    l(),
                    h--,
                    0 == h && $fx.preview()
            },
            !1
        ),
            (f.src = './layers/' + n + '/' + s)
        let g = {
            id: n,
            show: !0,
            render: function (e, t) {
                o.blend
                    ? (t.globalCompositeOperation = o.blend)
                    : (t.globalCompositeOperation = 'source-over'),
                    t.drawImage(f, 0, 0, e.width, e.height)
            },
        }
        r.addLayer(g)
    }),
    $fx.features(window.$fxhashFeatures),
    console.log(window.$fxhashFeatures)
