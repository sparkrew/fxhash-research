var _ = require('lodash')

export function cell(
  col = 0,
  row = 0,
  x = 0,
  y = 0,
  w = 25,
  h = 25,
  used = false,
  cellIndex = 0
) {
  return {
    index: cellIndex,
    row: row,
    col: col,
    x: x,
    y: y,
    w: w,
    h: h,
    cX: x + w / 2,
    cY: y + h / 2,
    used: used,
  }
}

export function cells(cols = 10, rows = 10, cW = 25, cH = 25) {
  return {
    cols: cols,
    rows: rows,
    cW: cW,
    cH: cH,
    width: cols * cW,
    height: rows * cH,

    populateCells: function (
      genExtraLarge = false,
      extraLargeChance = 25,
      extraLargeMultiplier = 5
    ) {
      let e
      // extra large multiple
      let eM = 1
      let newCells = []
      let newExtraLargeCells = []
      let extraLargeHit
      let cellIndex = 0
      let largeCellIndex = 0
      for (let c = 0; c < this.cols; c++) {
        for (let r = 0; r < this.rows; r++) {
          let newCell = cell(
            c,
            r,
            c * this.cW,
            r * this.cH,
            this.cW,
            this.cH,
            false,
            cellIndex
          )
          cellIndex++

          // extra large multiple
          extraLargeHit = Math.ceil(fxrand() * extraLargeChance)
          eM = Math.ceil(fxrand() * extraLargeMultiplier)
          newCells.push(newCell)

          if (
            genExtraLarge &&
            extraLargeHit === extraLargeChance &&
            newCell.x + newCell.w + this.cW * eM < this.width &&
            newCell.y + newCell.h + this.cH * eM < this.height
          ) {
            let extraLargeCell = cell(
              c,
              r,
              c * this.cW,
              r * this.cH,
              newCell.w + this.cW * eM,
              newCell.h + this.cH * eM,
              false,
              largeCellIndex
            )

            extraLargeCell.colStart = extraLargeCell.col
            extraLargeCell.colEnd =
              extraLargeCell.col + extraLargeCell.w / this.cW - 1

            extraLargeCell.rowStart = extraLargeCell.row
            extraLargeCell.rowEnd =
              extraLargeCell.row + extraLargeCell.h / this.cH - 1

            largeCellIndex++
            newExtraLargeCells.push(extraLargeCell)
          }
        }
      }

      // check for large cells that overlap others down the line
      for (let i = 0; i < newExtraLargeCells.length; i++) {
        for (e = i + 1; e < newExtraLargeCells.length; e++) {
          if (this.intersection(newExtraLargeCells[i], newExtraLargeCells[e])) {
            newExtraLargeCells[e].used = true
          }
        }
      }

      // filter out overlapping
      _.remove(newExtraLargeCells, function (o) {
        return o.used
      })

      // check for normal cells that are overlapped by the large cells
      for (const element of newCells) {
        for (e = 0; e < newExtraLargeCells.length; e++) {
          if (this.intersection(element, newExtraLargeCells[e])) {
            element.used = true
          }
        }
      }

      // filter out overlapping
      _.remove(newCells, function (o) {
        return o.used
      })

      // find adjacent cells to large Cells
      for (const element of newExtraLargeCells) {
        element.adjacentCells = _.filter(newCells, function (e) {
          return (
            e.col >= element.colStart - 1 &&
            e.col <= element.colEnd + 1 &&
            e.row >= element.rowStart - 1 &&
            e.row <= element.rowEnd + 1
          )
        })
      }

      return [newCells, newExtraLargeCells]
    },

    // https://editor.p5js.org/eric/sketches/HkW2DRKnl
    intersection: function (rect1, rect2) {
      let x1 = rect2.x
      let y1 = rect2.y
      let x2 = x1 + rect2.w
      let y2 = y1 + rect2.h
      if (rect1.x > x1) {
        x1 = rect1.x
      }

      if (rect1.y > y1) {
        y1 = rect1.y
      }

      if (rect1.x + rect1.w < x2) {
        x2 = rect1.x + rect1.w
      }

      if (rect1.y + rect1.h < y2) {
        y2 = rect1.y + rect1.h
      }

      return x2 <= x1 || y2 <= y1
        ? false
        : { x: x1, y: y1, w: x2 - x1, h: y2 - y1 }
    },
  }
}
