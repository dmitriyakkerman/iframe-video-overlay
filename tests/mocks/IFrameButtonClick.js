function IFrameButtonClick() {
    const data = {};

    document.addEventListener('click', function clicked(e) {
        data['click.Classes'] = e.target.parentElement.className.split(' ');
    });

    return data;
}

module.exports = IFrameButtonClick;