class minimalasciiart {
  constructor(ascini) {
    this.ascini = ascini;
    this.chars = '[]{}—=+*^?#!<>-_\\/________GREY_TEKiN';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.ascini.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(fxrand() * 100);
      const end = start + Math.floor(fxrand() * 100);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 1;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || fxrand() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}<br></span>`;
      } else {
        output += from;
      }
    }
    this.ascini.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(fxrand(1,100) * this.chars.length)];
  }}


// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
'─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼─<br>│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼',
'─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼─│<br>┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼',
'─│┌┐└┘├┤┬┴┼─│┌┐└┘<br>├┤┬┴┼─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼',
'─│┌┐└┘├┤<br>┬┴┼─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼',
'─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤<br>┬┴┼─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼',
'─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼─│<br>┌┐└┘├┤┬┴┼',
'─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼─│┌┐└┘├<br>┤┬┴┼─│┌┐└┘├┤┬┴┼',
'├┤┬┴┼─│┌┐└┘├┤┬┴┼─│┌┐<br>┬┴┼─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴',
'├┤┬┴┼─│┌┐└┘├┤┬<br>├┤┬┴┼─│┌┐└┘├┤┬┴┼─├┤┬┴┼─│┌┐└┘├┤',
'├┤┬┴┼─<br>└┘├┤┬┴┼─┌┐└┘├┤┬┴┼┤┬┴┼─│┤┬┴┼─│┤┬┴┼─│┤┬┴',
'┤┬┴┼─│┬┴┼─│┌┐└<br>┬┴┼─│┌┐└┘├┤┬┴┼─│┌┐└┘├┤┬┴┼─│┌┐└',
'├┤┬┴┼─<br>└┘├┤┬┴┼─┌┐└┘├┤┬┴┼┤┬┴┼─│┤┬┴┼─│┤┬┴┼─│┤┬┴',
'├┤┬┴┼─│┌┐└┘├┤┬┴┼─┌┐└┘├┤┬┴┼<br>┼─│┤┬┴┼─│┤┬┴┼─│┤┬┴',
'├┤┬┴┼─│┌┐└┘├┤┬┴┼─┌┐└┘├┤┬┴┼┤┬┴┼─│┤<br>─│┤┬┴┼─│┤┬┴',
'├┤┬┴┼─│┌┐└┘├┤┬┴┼─┌┐└┘├┤┬┴┼┤┬┴┼─│┤┬┴┼─│<br>┼─│┤┬┴',];


const ascini = document.querySelector('.text');
const fx = new minimalasciiart(ascini);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    //setTimeout(next, 1000);
  });
  counter = (counter + 1) % phrases.length;
};

next();
