$(function(){


  
    // RESPONSIVE
    const mobile = window.matchMedia("(max-width: 800px)");
  
    function handleTabletChange(e) {
      if (e.matches) {
        console.log('Apka na fony!')
        animation();
      }
    }
    mobile.addListener(handleTabletChange)
    handleTabletChange(mobile)

    // RESPONSIVE-END
    
    function animation() {

    lax.init()
  
    $(window).on('scroll', ()=> {
  
      lax.addDriver('scrollY', function () {
        return window.scrollY
      }
      );
  
      // SCROLL DOWN
      lax.addElements('#start', {
        scrollY: {
          opacity: [
            [0, 50],
            [1, 0]
          ],
        }
  
      })
  
      // LUKASZ BIERNACKI
      lax.addElements('.name', {
        scrollY: {
          opacity: [
            [50, 150, 180 , 230],
            [0, 1, 1 ,0]
          ]
        }
  
      })
  
  
      // PORTFOLIO 2021
      lax.addElements('#flow', {
        scrollY: {
          opacity: [
            [50, 200, 180, 250],
            [0, 1, 1, 0]
          ],
        }
      })
  
      //Glowa 3d
      lax.addElements('.header_picture', {
        scrollY: {
          opacity: [
            ['elInY + (screenHeight*0.5)', 'elInY + (screenHeight*0.95)', 'elInY + (screenHeight*1.3)', 'elInY + (screenHeight*1.5)'],
            [0, 1, 1, 0]
          ],
        }
      })
  
      //BUTTON
      lax.addElements('.actual_work', {
        scrollY: {
          opacity: [
            ['elInY + (screenHeight*0.1)' , 'elInY + (screenHeight*0.2)'],
            [0, 1]
          ],
        }
      })


    })

    
    }



  })
  