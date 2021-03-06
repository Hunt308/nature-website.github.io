let sliderImages = document.querySelectorAll('.slide-h'),
            arrowLeft = document.querySelector('#arrow-left'),
            arrowRight = document.querySelector('#arrow-right'),
            current = 0;

        // clear all images
        function reset(){
            for(let i = 0; i < sliderImages.length; i++){
                sliderImages[i].style.display = 'none';
            }

        }

        // Init slider 

        function startSlide(){
            reset();
            sliderImages[0].style.display = 'block';
        }

        // show previous 
        function slideLeft(){
            reset();
            sliderImages[current - 1].style.display = 'block';
            current--;

        }

        // show next 

        function slideRight(){
            reset();
            sliderImages[current + 1].style.display = 'block';
            current++;
        }

        // Left arrow click 
        arrowLeft.addEventListener('click', function(){
            if(current === 0){
                current = sliderImages.length;
            }
            slideLeft();
        });

         // Right arrow click 
         arrowRight.addEventListener('click', function(){
            if(current === sliderImages.length - 1){
                current = -1;
            }
            slideRight();
        });

        startSlide();
        /* querySelectorAll  is if there is more than one. 
        And return html collection  and select each arrow like an index 
        current represents what image we are which is 0 by default */




