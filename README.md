Simple embed responsive video(YouTube, Vimeo) overlay module. 

<img src="docs-images/image1.png">

<img src="docs-images/image2.png">

**Example**

https://codepen.io/mickyholbrook/pen/yLYvNEr

**Styles:**
  
  Put the required stylesheet link in HEAD tag:
  
    <link rel="stylesheet" href="./dist/css/iframe-overlay.min.css">
    
**Javascript**   
    
Put the script at the bottom of your markup: 

    <script src="./dist/js/iframe-overlay.min.js"></script>    
   
Or use import/require in your Javascript file:
    
    const IFrameOverlay = require('./dist/js/iframe-overlay.min.js');
    
    or
    
    import IFrameOverlay from './dist/js/iframe-overlay.min.js';
 
**Usage**
     
Create root element, specify video ID inside "data-id" attribute. 

_Youtube video ID_
<img src="docs-images/image3.png">

_Vimeo video ID_
<img src="docs-images/image4.png">
          
    <div class="video" data-id="lM02vNMRRB0"></div>
         
**Initialization**

1.Specify root selector (string or DOM node) in "el" option.

2.Specify video hosting name("youtube" or "vimeo") in "type" option. You can pass this param in case using youtube video(param "type" has "youtube" value by default).

3.Specify "imageSrc" if you want to overlay iframe with image when module is initialized.

4.Specify "iconSrc", "width" and "height" options inside "playButton" option for play button customization. 
 
      document.addEventListener('DOMContentLoaded', function() {
          new IFrameOverlay({
              el: '.video',
              type: 'youtube', //or 'vimeo'
              imageSrc: 'video-image.jpg',
              playButton: {
                  iconSrc: 'play-button.png',
                  width: '10%',
                  height: '10%'
              }
          })
      });
