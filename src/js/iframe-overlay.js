(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.IFrameOverlay = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

class IFrameOverlay {
  constructor(options = {}) {
    this.el = options.el;
    this.buttonOptions = options.play;
    this.init();
  }

  init() {
    this.initPlayButton();
    this.initClasses();
    this.openIFrame();
  }

  initPlayButton() {
    let playButton = document.createElement('a');
    playButton.href = '#';
    playButton.classList.add('overlay__play');
    playButton.style.width = this.buttonOptions.width;
    playButton.style.height = this.buttonOptions.height;
    playButton.style.backgroundImage = `url(${ this.buttonOptions.backgroundImage})`;
    this.el.firstElementChild.append(playButton);
  }

  initClasses() {
    this.el.classList.add('overlay');
    this.el.firstElementChild.classList.add('overlay__container');
    this.el.firstElementChild.querySelector('img').classList.add('overlay__image');
  }


  openIFrame() {
    let playButton = this.el.querySelector('.overlay__play');
    playButton.addEventListener('click', function(e) {
      e.preventDefault();

      this.parentElement.classList.add('opened');

      setTimeout(() => {
        this.parentElement.classList.add('hidden');
      }, 1000)
    })
  }
}

window.IFrameOverlay = IFrameOverlay;

return IFrameOverlay;

}));