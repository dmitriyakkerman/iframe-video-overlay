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

    if(!options.el) {
      throw new Error('No IFrameOverlay selector')
    }

    if(!options.playButton) {
      throw new Error('No IFrameOverlay play button options')
    }

    this.mergeOptionsAndDefaults();

    this.el = typeof options.el === 'string' ? document.querySelectorAll(options.el) : options.el;
    this.type = options.type ? this.types[options.type.toLowerCase()] : this.types.youtube;
    this.imageSrc = options.imageSrc;
    this.playButton = options.playButton;
    this.speed = 700;

    this.init();
  }

  mergeOptionsAndDefaults() {
    let types = {
      youtube: 'https://www.youtube.com/embed/',
      vimeo: 'https://player.vimeo.com/video/'
    };

    this.types = {...types};
  }

  init() {
    let that = this;

    this.el.forEach(function (item) {
      that.initHTML(item);
      that.openIFrame(item);
    });
  }

  initHTML(item) {
    item.classList.add('iframe-overlay');

    let videoContainer = document.createElement('div');
    videoContainer.classList.add('iframe-overlay__container');

    let iframe = document.createElement('iframe');
    let videoID = item.dataset.id;
    iframe.src = this.type + videoID;
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute("allow", "autoplay; encrypted-media");

    let playButton = document.createElement('button');
    playButton.classList.add('iframe-overlay__play');
    playButton.style.width = this.playButton.width;
    playButton.style.height = this.playButton.height;
    playButton.style.backgroundImage = `url(${ this.playButton.iconSrc})`;

    if(this.imageSrc) {
      let backgroundImage = document.createElement('img');
      backgroundImage.classList.add('iframe-overlay__image');
      backgroundImage.src = this.imageSrc;
      videoContainer.appendChild(backgroundImage);
    }

    videoContainer.appendChild(iframe);
    videoContainer.appendChild(playButton);
    item.appendChild(videoContainer);
  }

  openIFrame(item) {
    let that = this;

    let playButton = item.querySelector('.iframe-overlay__play');
    playButton.addEventListener('click', function(e) {
      this.parentElement.classList.add('opened');

      setTimeout(() => {
        this.parentElement.classList.add('hidden');
      }, that.speed);
    });
  }
}

window.IFrameOverlay = IFrameOverlay;

return IFrameOverlay;

}));