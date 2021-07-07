const btnShare = document.querySelector('#btn-share');
btnShare.addEventListener('click', ()=>{
    const body = document.querySelector('body')
    const shareContainer = document.querySelector('#share-container');
    const imgBg = document.querySelector('#btn-share div');
    if(body.clientWidth < 768){
        shareContainer.classList.add('card-bottom-share-container-active');
    }else if(!btnShare.classList.contains('card-bottom-user-share-active')){
        imgBg.classList.add('card-bottom-user-share-img');
        btnShare.classList.add('card-bottom-user-share-active')
        shareContainer.classList.add('card-bottom-share-container-active');
    }else{
        imgBg.classList.remove('card-bottom-user-share-img');
        btnShare.classList.remove('card-bottom-user-share-active')
        shareContainer.classList.remove('card-bottom-share-container-active');
    }

});

const btnShare2 = document.querySelector('#btn-share2');

btnShare2.addEventListener('click', ()=>{
    const shareContainer = document.querySelector('#share-container');
    shareContainer.classList.remove('card-bottom-share-container-active');
});



