// took help from https://github.com/Simonwep/pickr

const colorButton = document.querySelector('.color-btn');


const switchViewButton = document.querySelector('.view-button');

const topMenuBar = document.querySelector('.header-one');
topMenuBar.classList.remove('active');

const sideMenuBar = document.querySelector('.header-two');



let count=0;

let color=localStorage.getItem("color");
topMenuBar.style.backgroundColor=color;
sideMenuBar.style.backgroundColor=color;

switchViewButton.addEventListener('click' , (e)=>{

    count++;

    if(count%2!==0){

        topMenuBar.classList.add('active');
        sideMenuBar.classList.remove('active');
    }
    else if(count % 2 ===0){

        topMenuBar.classList.remove('active');
        sideMenuBar.classList.add('active');
    }
})


// Simple example, see optional options for more configuration.

colorButton.addEventListener('click',()=>{

    const pickr = Pickr.create({
        el: '.color-picker',
        theme: 'classic', // or 'monolith', or 'nano'
    
        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)'
        ],
    
        components: {
    
            // Main components
            preview: true,
            opacity: true,
            hue: true,
    
            // Input / output Options
            interaction: {
                hex: true,
                rgba: true,
                hsla: true,
                hsva: true,
                cmyk: true,
                input: true,
                clear: true,
                save: true
            }
        }
    });

    pickr.on('change', (color, source, instance) => {
        // console.log('Event: "change"', color, source, instance);

        // console.log(color);

        // console.log(color.toRGBA());

        //converting the rgba to string to avoid complicacy -->

        // console.log(color.toRGBA().toString());

        var rgba= color.toRGBA().toString();
        console.log(rgba);

        topMenuBar.style.backgroundColor=rgba;
        sideMenuBar.style.backgroundColor=rgba;
        updateLocalStorage();

        function updateLocalStorage(){

            localStorage.setItem("color", rgba)
        }
    });

})


