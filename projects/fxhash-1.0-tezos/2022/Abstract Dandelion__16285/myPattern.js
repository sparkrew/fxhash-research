// Abstract Dandelion - by ArtLife
// ArtLife on fxhash: https://www.fxhash.xyz/u/ArtLife
// instagram: https://www.instagram.com/generativeartlife/
// ArtLife Twitter: https://twitter.com/iamPraveenIN
// Credit to p5js: https://p5js.org/
// Credit to p5.pattern: https://github.com/SYM380/p5.pattern
// Credit to kgolid chromotome: https://github.com/kgolid/chromotome

// num = cells
function myLineOne(numW_ = 3, numH_ = 3, strokeW_ = 2, gap_ = 0, single = 1, p = 1) {
  function checkSize(w_, h_) {
    const c = patternColors();
    const numW = numW_;
    const numH = numH_;
    const gap = gap_;
    const strokeW = strokeW_;
    const p_ = single;
    const check = max(w_, h_)

    rectMode(CORNER);
    ellipseMode(CENTER);

    fill(c[0]);
    // noFill();
    rect(0, 0, check, check);

    stroke(c[1]);
    strokeWeight(strokeW_);

    c.shift();

    for (let i = 0; i <= numW; i++) {
      for (let j = 0; j <= numH; j++) {

        const sW_ = check / numW;
        // const sH_ = h_ / numH;
        const x_ = i * sW_;
        const y_ = j * sW_;
        const prob = p;

        if (p_ < 1 / 12) {
          line(x_, y_ - sW_, x_ - sW_, y_);
        } else if (p_ < 2 / 12) {
          line(x_ - sW_, y_ - sW_, x_, y_);
        } else if (p_ < 3 / 12) {
          line(x_, y_ - sW_, x_ - sW_, y_);
          line(x_ - sW_, y_ - sW_, x_, y_);
        } else if (p_ < 4 / 12) {
          if (i % 2 == 0) {
            push()
            noFill()
            strokeWeight(strokeW_);
            arc(x_, y_, sW_, sW_, PI, TAU);
            pop()
          } else {
            push()
            noFill()
            strokeWeight(strokeW_);
            arc(x_, y_, sW_, sW_, 0, PI);
            pop()
          }
        } else if (p_ < 5 / 12) {
          line(x_ - gap / 2, y_ - sW_ + gap / 2, x_ - sW_ + gap / 2, y_ - gap / 2);
          line(x_ - sW_ + gap / 2, y_ - sW_ + gap / 2, x_ - gap / 2, y_ - gap / 2);
        } else if (p_ < 6 / 12) {
          line(x_ - gap / 2, y_ - sW_ + gap / 2, x_ - sW_ + gap / 2, y_ - gap / 2);
        } else if (p_ < 7 / 12) {
          line(x_ - sW_ + gap / 2, y_ - sW_ + gap / 2, x_ - gap / 2, y_ - gap / 2);
        } else if (p_ < 8 / 12) {
          circle(x_, y_, sW_ / 2)
        } else if (p_ < 9 / 12) {
          if (prob < 1 / 4) {
            arc(x_, y_, sW_, sW_, HALF_PI, PI + HALF_PI);
            arc(x_, y_, sW_, sW_, PI, TAU);
          } else if (prob < 2 / 4) {
            arc(x_, y_, sW_, sW_, PI + HALF_PI, HALF_PI);
            arc(x_, y_, sW_, sW_, 0, PI);
          } else if (prob < 3 / 4) {
            arc(x_, y_, sW_, sW_, PI, TAU);
            arc(x_, y_, sW_, sW_, PI + HALF_PI, HALF_PI);
          } else {
            arc(x_, y_, sW_, sW_, 0, PI);
            arc(x_, y_, sW_, sW_, HALF_PI, PI + HALF_PI);
          }
        } else if (p_ < 10 / 12) {
          push()
          noFill()
          arc(x_, y_, sW_, sW_, 0, PI);
          pop()
        } else if (p_ < 11 / 12) {
          push()
          noFill()
          arc(x_, y_, sW_, sW_, PI, TWO_PI);
          pop()
        } else {
          if ((i + j) % 2 == 0) circle(x_, y_, sW_ / 1.25);
          else circle(x_, y_, sW_ / 2.5)
        }
      }
    }
  }
  return checkSize;
}



// num = cells
function waveCPattern(num_ = 3, strokeW_ = 1, singleColor = false) {
  function checkSize(w_, h_) {
    const c = patternColors();
    const num = num_;
    const strokeW = strokeW_;
    const p_ = fxrand();
    const check = max(w_, h_)

    rectMode(CORNER);
    ellipseMode(CENTER);

    fill(c[0]);
    // noFill();
    rect(0, 0, check, check);

    stroke(c[1]);
    strokeWeight(strokeW_);

    c.shift();

    for (let j = 0; j <= num; j++) {
      for (let i = 0; i <= num + 1; i++) {

        const s_ = check / num;
        const x_ = i * s_;
        const y_ = j * s_;

        ellipse(x_ - s_, y_, s_);
        ellipse(x_ - s_, y_, s_ / 1.34);
        ellipse(x_ - s_, y_, s_ / 2);
        ellipse(x_ - s_, y_, s_ / 4);

        ellipse(x_ + s_ / 2, y_ - s_ + s_ / 2, s_);
        ellipse(x_ + s_ / 2, y_ - s_ + s_ / 2, s_ / 1.34);
        ellipse(x_ + s_ / 2, y_ - s_ + s_ / 2, s_ / 2);
        ellipse(x_ + s_ / 2, y_ - s_ + s_ / 2, s_ / 4);
      }
    }
  }
  return checkSize;
}




// num = cells
function circleShape(num_ = 3, strokeW_ = 1) {
  function checkSize(w_, h_) {
    const c = patternColors();
    const num = num_;
    const strokeW = strokeW_;
    const p_ = fxrand();
    const check = max(w_, h_)

    rectMode(CORNER);
    ellipseMode(CENTER);

    fill(c[0]);
    // noFill();

    rect(0, 0, check, check);

    stroke(c[1]);
    strokeWeight(strokeW_);

    c.shift();

    for (let i = 0; i <= num; i++) {
      for (let j = 0; j <= num + 1; j++) {

        const s_ = check / num;
        const x_ = i * s_;
        const y_ = j * s_;

        if (i % 2 == 1) {
          circle(x_, y_, s_);
          circle(x_, y_, s_ / 1.5);
          circle(x_, y_, s_ / 3);
        }

        if (i % 2 == 0) {
          circle(x_, y_ + s_ / 2, s_);
          circle(x_, y_ + s_ / 2, s_ / 1.5);
          circle(x_, y_ + s_ / 2, s_ / 3);
        }
      }
    }
  }
  return checkSize;
}


// num = cells
function myLineWave(num_ = 3, strokeW_ = 1, gap_ = 1) {
  function checkSize(w_, h_) {
    const c = patternColors();
    const num = num_;
    const gap = gap_;
    const strokeW = strokeW_;
    const p_ = fxrand();

    rectMode(CORNER);
    ellipseMode(CENTER);

    fill(c[0]);
    // noFill();
    rect(0, 0, w_, h_);

    stroke(c[1]);
    strokeWeight(strokeW_);

    c.shift();

    for (let i = 0; i <= num; i++) {
      for (let j = 0; j <= num + 1; j++) {

        const s_ = w_ / num;
        const x_ = i * s_;
        const y_ = j * s_;

        line(x_ + s_ / 2, y_, x_, y_ + s_ - gap);
        line(x_ + s_ / 2, y_, x_ + s_, y_ + s_ - gap);
      }
    }
  }
  return checkSize;
}