(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.IFrameOverlay = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

class IFrameVideoOverlay {
  constructor(options = {}) {

    if(!options.el) {
      throw new Error('Specify "el" option')
    }

    if(!options.playButton) {
      throw new Error('Specify "playButton" option')
    }

    if(!options.playButton.iconSrc) {
      throw new Error('Specify "playButton.iconSrc" option')
    }

    this.mergeOptionsAndDefaults();

    this.el = typeof options.el === 'string' ? document.querySelectorAll(options.el) : options.el;
    this.type = options.type ? this.defaults.types[IFrameVideoOverlay.validatedType(options.type)] : this.defaults.types.youtube;
    this.imageSrc = options.imageSrc;
    this.playButton = options.playButton;
    this.speed = 700;

    this.init();
  }

  mergeOptionsAndDefaults() {
    let defaults = {
      types: {
        youtube: 'https://www.youtube.com/embed/',
        vimeo: 'https://player.vimeo.com/video/',
        dailymotion: 'https://www.dailymotion.com/embed/video/',
        coub: 'https://www.coub.com/embed/'
      }
    };

    this.defaults = {...defaults};
  }

  static validatedType(type) {
    return type.replace(/\s/g, "").toLowerCase();
  }

  init() {
    let that = this;

    this.el.forEach(function (item) {
      that.initHTML(item);
      that.openIFrame(item);
    });
  }

  initHTML(item) {
    item.classList.add('iframe-video-overlay');

    let videoContainer = document.createElement('div');
    videoContainer.classList.add('iframe-video-overlay__container');

    let iframe = document.createElement('iframe');
    let videoID = item.dataset.id;
    iframe.src = this.type + videoID;
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "autoplay; encrypted-media");

    let playButton = document.createElement('button');
    playButton.classList.add('iframe-video-overlay__play');
    let rootComputedWidth = window.getComputedStyle(item, null).getPropertyValue("width");
    playButton.style.width = this.playButton.width || (rootComputedWidth.substring(0, rootComputedWidth.length - 2) * ((this.playButton.percentage || 10) / 100)) + 'px';
    playButton.style.height = this.playButton.height || (rootComputedWidth.substring(0, rootComputedWidth.length - 2) * ((this.playButton.percentage || 10) / 100)) + 'px';
    playButton.style.backgroundImage = `url(${ this.playButton.iconSrc})`;

    if(this.imageSrc) {
      let backgroundImage = document.createElement('img');
      backgroundImage.classList.add('iframe-video-overlay__image');
      backgroundImage.src = this.imageSrc;
      videoContainer.appendChild(backgroundImage);
    }

    videoContainer.appendChild(iframe);
    videoContainer.appendChild(playButton);
    item.appendChild(videoContainer);
  }

  openIFrame(item) {
    let that = this;

    let playButton = item.querySelector('.iframe-video-overlay__play');
    playButton.addEventListener('click', function(e) {
      this.parentElement.classList.add('opened');
      this.previousElementSibling.src += "?autoplay=1";

      setTimeout(() => {
        this.parentElement.classList.add('hidden');
      }, that.speed);
    });
  }
}

window.IFrameVideoOverlay = IFrameVideoOverlay;

return IFrameVideoOverlay;

}));