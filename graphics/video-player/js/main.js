const playListRep = nodecg.Replicant('playList', "wae-videoplayer");
const videos = nodecg.Replicant('assets:videos');

let multi = false;
let playList = [];

const videoPlayer = document.querySelector("#videoPlayer");
const source = document.querySelector('source');


nodecg.listenFor('playSingle', index => {

    setVideoSource(videos.value[index].url);

    videoPlayer.play();
})

nodecg.listenFor("playMulti", (list) => {
    multi = true;
    playList = list;

    playNextFromPlayList();
})

nodecg.listenFor("stopPlaylist", () => {
    setVideoSource(""); 
})

videoPlayer.onended = () => {
    if(!multi) return;
    playNextFromPlayList();
}


const playNextFromPlayList = () => {
    
    if (playList.length == 0) {
        multi = false;
        setVideoSource("");    
        return
    };

    let nextVideo = playList.shift();
    
    setVideoSource(videos.value[nextVideo].url);
    videoPlayer.play();

}

const setVideoSource = (src) => {

    videoPlayer.load();
    videoPlayer.pause();
    source.setAttribute("src", src);
    videoPlayer.load();
}

