var indexCurrent = 1;      // Chỉ số hình đầu tiên hiển thị ở slide
var loop = true;  // Bật lặp slide 
var duration = 4000;   // Thời gian chờ chuyển hình (tính theo đơn vị milisecond)

var images = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
var lstBtn = document.getElementsByClassName("slider")[0].getElementsByTagName("button");
var call = true;
console.log(images);
function initSlider(){
    images[indexCurrent].style.opacity = 1;
    if(loop){
        setInterval(getForwardImage, duration);
    }

}

function setImage(indexOld)
{
    
     for(i = 0; i < images.length; i++)
    {
         if(i != indexOld)
            images[i].style.opacity = 0;
    }
    var opacity = 0;
    var opacityImageOld = 1;
    var setOpacity =  setInterval(function (){
            
            images[indexCurrent].style.opacity = opacity;
            images[indexOld].style.opacity = opacityImageOld;
            if(opacity >= 1 && opacityImageOld <= 0)
            {
                call = true;
                clearInterval(setOpacity);
                return;
            }
            opacity += 0.02;
            opacityImageOld -= 0.02;
            
    }, duration / 100);
    
}

function getForwardImage(status='loop'){

    if(call == false){
        return;
    }
    if(indexCurrent == images.length - 1)
    {
        indexCurrent = 0;
        setImage( images.length - 1);
    }
    else {
        if(status==='next'){
            console.log('next');
            indexCurrent++;
            setImage(indexCurrent - 1);
        }else if(status==='prev'){
            console.log('prev');
            indexCurrent--;
            setImage(indexCurrent + 1);
        }else{
            indexCurrent++;
            setImage(indexCurrent - 1);
        }
        
    }
    call = false;
}

// function getNextImage(str='loop'){
 
// }

// function getPrevImage(){
//     if(call == false){
//         return;
//     }
//     if(indexCurrent == 0)
//     {
//         indexCurrent = images.length - 1;
//         setImage( 0);
//     }
//     else {
//          indexCurrent--;
//          setImage(indexCurrent + 1);
//     }
//     call = false;
// }
initSlider();


