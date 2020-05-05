class VideoOverlay {

  constructor(options = {}) {
    this.el = options.el;
    this.el.classList.add('video');
    this.el.firstElementChild.classList.add('video__container');
    this.el.firstElementChild.querySelector('img').classList.add('video__image');

    this.initPlayButton();
    this.openVideo();
  }

  initPlayButton() {

    let playButton = document.createElement('a');
    playButton.href = '#';
    playButton.classList.add('video__play');
    this.el.firstElementChild.append(playButton);
  }

  openVideo() {

    let playButton = this.el.querySelector('.video__play');
    playButton.addEventListener('click', function(e) {
      e.preventDefault();

      this.parentElement.classList.add('opened');

      setTimeout(() => {
        this.parentElement.classList.add('hidden');
      }, 1000)
    })
  }
}