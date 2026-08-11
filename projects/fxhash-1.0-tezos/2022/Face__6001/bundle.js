(() => {
  function t(t) {
    return Math.floor(fxrand() * t)
  }
  !function () {
    const e = document.getElementById("Gender")
      , o = document.getElementById("Eyes")
      , w = document.getElementById("Mouth")
      , s = document.getElementById("Nose")
      , d = t(2)
      , u = t(9)
      , c = t(9)
      , g = t(9)
      e.src = `./Gender/${d}.png`,
      o.src = `./Eyes/${u}.png`,
      w.src = `./Mouth/${c}.png`,
      s.src = `./Nose/${g}.png`,
      GenderStyle = ["0", "1"],
      EyesStyle = ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      Mouthtyle = ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      Nosetyle = ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
      

      window.$fxhashFeatures = {
        Gender: GenderStyle[d],
        Eyes: EyesStyle[u],
        Mouth: MouthStyle[c],
        Nose: NoseStyle[g],

      }
  }()
}
)();

