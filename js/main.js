$(document).ready(function() {

    // Hide image captions when page loads
    $('.caption').hide();

    // When mouse hovers over this captions parent find the 'p' tag, then show and hide it
    $('.caption').parent().hover(function () {
            $(this).find("p").show(300)
        },
        function () {
            $(this).find("p").hide(300)
        });
});

window.onload = pageReady;
function pageReady(){
    var galleryArray = ["img/jewllery1.jpg", "img/jewllery2.jpg", "img/jewllery3.jpg", "img/jewllery4.jpg"];
    var textArray = ["Bamboo necklace" ,"Cocktail earings" ,"Cocktail ring" ,"Knot ring" ];

    var imgIndex = 0; //ARRAY INDEX COUNTER
    var mainImg = document.getElementById("mainImg");
    var btnPrev = document.getElementById("btnPrev");
    var btnNext = document.getElementById("btnNext");
    var txt = document.getElementById("capTxt");
    btnNext.onclick = Next;
    function Next(){
        if (imgIndex == 3 ){
            imgIndex = 0;
            mainImg.src = galleryArray[imgIndex];
            txt.innerHTML = textArray[imgIndex];

        }else {
            imgIndex = imgIndex + 1 ;
            mainImg.src = galleryArray[imgIndex];
            txt.innerHTML = textArray[imgIndex];
        }
    }

    btnPrev.onclick = Previous;
    function Previous(){
        if (imgIndex == 0 ){
            imgIndex = 3;
            mainImg.src = galleryArray[imgIndex];
            txt.innerHTML = textArray[imgIndex];
        }else {
            imgIndex = imgIndex - 1 ;
            mainImg.src = galleryArray[imgIndex];
            txt.innerHTML = textArray[imgIndex];
        }
    }

}
