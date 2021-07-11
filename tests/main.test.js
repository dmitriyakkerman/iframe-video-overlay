/**
 * @jest-environment jsdom
 */

const IFrameVideoOverlay = require('../src/js/iframe-video-overlay');
const IFrameButtonClick = require('./mocks/IFrameButtonClick');

describe('IFrameVideoOverlay class defining', () => {

    test('IFrameVideoOverlay defining', () => {
        expect(IFrameVideoOverlay).toBeDefined();
    });

    document.body.innerHTML = `<div class="video" data-id="lM02vNMRRB0"></div>`;

    let iframeVideoOverlay = new IFrameVideoOverlay({
        el: '.video',
        type: 'youtube',
        imageSrc: 'https://images.indianexpress.com/2017/04/nature-tree_759.jpg',
        playButton: {
            iconSrc: 'https://erweb.ru/wp-content/uploads/2017/09/youtube-play.png',
            width: '15%',
            height: '15%',
        }
    });

    test('IFrameVideoOverlay markup testing', () => {
        let iframeRootElement = document.querySelector('.video');
        expect(iframeRootElement.classList.contains('iframe-video-overlay')).toBeTruthy();
        expect(iframeRootElement.childElementCount).toEqual(1);

        //Container testing
        let iframeContainer = iframeRootElement.firstElementChild;
        expect(iframeContainer.classList.contains('iframe-video-overlay__container')).toBeTruthy();
        expect(iframeContainer.childElementCount).toEqual(3);

        //Background image testing
        let iframeImage = iframeContainer.firstElementChild;
        expect(iframeImage).toBeInstanceOf(HTMLImageElement);
        expect(iframeImage.getAttribute('src')).not.toBeUndefined();
        expect(iframeImage.getAttribute('src')).not.toBeFalsy();
        expect(iframeImage.classList.contains('iframe-video-overlay__image')).toBeTruthy();

        //IFrame testing
        let iframeItself = iframeContainer.firstElementChild.nextElementSibling;
        expect(iframeItself).toBeInstanceOf(HTMLIFrameElement);
        expect(iframeItself.getAttribute('src')).not.toBeUndefined();
        expect(iframeImage.getAttribute('src')).not.toBeFalsy();

        //Button testing
        let iframeButton = iframeContainer.lastElementChild;
        expect(iframeButton).toBeInstanceOf(HTMLButtonElement);
        expect(iframeButton.classList.contains('iframe-video-overlay__play')).toBeTruthy();

        let data = IFrameButtonClick();
        iframeButton.click();
        expect(data).toEqual({
            'click.Classes': ["iframe-video-overlay__container", "opened"]
        });
    });
});