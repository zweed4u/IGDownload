function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}
var my_strs = ''
try{
    if ($("[property='og:video']")){
        alert($("[property='og:video']").content);
    }
    else {
        alert($("[property='og:image']").content);
    }
    // TODO: Get carousel working
    while (document.getElementsByClassName('_8kphn _by8kl coreSpriteRightChevron').length !=0){
        document.getElementsByClassName('_8kphn _by8kl coreSpriteRightChevron')[0].click();
        sleepFor(1000);
        if (document.getElementsByClassName('_l6uaz').length){
            my_strs+=document.getElementsByClassName('_l6uaz')[0].src+'\n';
            //alert(document.getElementsByClassName('_l6uaz')[0].src);
        }
        else {
            my_strs+=document.getElementsByClassName('_4rbun')[0].children[0].src+'\n';
            //alert(document.getElementsByClassName('_4rbun')[0].children[0].src);
        }
        sleepFor(1000);
    }
    alert(my_strs);
}
catch(err){
    //alert(err.message);
    console.log('Meta og:image/video selector not found!');
    null;
}
