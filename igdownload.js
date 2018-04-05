//chrome.tabs.executeScript(null, {file: "jquery.js"});
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}
var my_strs = ''
try{
    var video_url = null;
    var image_url = null;
    for (var i=0; i<document.getElementsByTagName('meta').length; i++){
        if ('og:video' == document.getElementsByTagName('meta')[i].getAttribute('property')){
            video_url = document.getElementsByTagName('meta')[i].content;
        }
    }
    for (var i=0; i<document.getElementsByTagName('meta').length; i++){
        if ('og:image' == document.getElementsByTagName('meta')[i].getAttribute('property')){
            image_url = document.getElementsByTagName('meta')[i].content;
        }
    }
    if (video_url){
        alert(video_url);
    }
    else {
        alert(image_url);
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
    //alert(my_strs);
}
catch(err){
    //alert(err.message);
    console.log('Meta og:image/video selector not found!');
    null;
}
