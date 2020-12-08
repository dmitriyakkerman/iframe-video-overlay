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
     
Create parent element with child parent element. Put iframe and image inside: 
          
      <div class="video">
          <div>
              <iframe src="https://www.youtube.com/embed/lM02vNMRRB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <img src="https://www.theuiaa.org/wp-content/uploads/2017/11/RTM19-banner-web.jpg" alt="">
          </div>
      </div>
         
**Initialization**
 
      document.addEventListener('DOMContentLoaded', function() {
          new IFrameOverlay({
              el: '.video',
              play: {
                  backgroundImage: 'play-button.jpg',
                  width: '10%',
                  height: '10%'
              }
          })
      });
