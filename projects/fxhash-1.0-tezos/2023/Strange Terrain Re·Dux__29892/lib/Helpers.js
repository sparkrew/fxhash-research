import { FXInit, FXRandomBool, FXRandomIntBetween } from "@liamegan1/fxhash-helpers"
FXInit( $fx.rand() );

export function randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor($fx.rand() * (max - min) + min)
  }

  // pick one from array
export function randomPick(arr) {
    return arr[randomInt(0, arr.length)]
  }

export function mean(array) {
    var total = 0
    for (var i = 0; i < array.length; i++) {
      total += array[i]
    }
    return total / array.length
}

export function isBetween(x, a, b) {
    return a <= x && x <= b;
  }


//https://stackoverflow.com/a/2450976
export function shuffleArray(array) {
    var currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor($fx.rand() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  export function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (denominator == 0) {
        return null; // The lines are parallel or coincident
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    const u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / denominator;

    // If 0 <= t <= 1 and 0 <= u <= 1, the segments intersect
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
        const intersectionX = x1 + t * (x2 - x1);
        const intersectionY = y1 + t * (y2 - y1);
        return createVector(intersectionX, intersectionY);
    }

    return null; // The line segments do not intersect
}

// Incenter: The point where the angle bisectors of the triangle intersect.
// It is also the center of the incircle, the circle inscribed within the triangle.
export function findIncircle(context, x1, y1, x2, y2, x3, y3) {
    let a = context.dist(x2, y2, x3, y3);
    let b = context.dist(x1, y1, x3, y3);
    let c = context.dist(x1, y1, x2, y2);

    let s = (a + b + c) / 2; // Semiperimeter
    let A = context.sqrt(s * (s - a) * (s - b) * (s - c)); // Area using Heron's formula

    let inradius = A / s;

    let centerX = (a * x1 + b * x2 + c * x3) / (a + b + c);
    let centerY = (a * y1 + b * y2 + c * y3) / (a + b + c);

    return {
        center: context.createVector(centerX, centerY),
        radius: inradius
    };
}

export function flipACoin() {
    return FXRandomBool();
  }

export function rollADie(sides = 6) {
return FXRandomIntBetween(1, sides + 1)
}

/**
 *
 * @param img Image to be masked
 * @param mk Mask to be used on image
 * @returns {*}
 */
export function mask(img, mk) {
  let masked;
  ( masked = img.get() ).mask( mk.get() );

  return masked;
}
