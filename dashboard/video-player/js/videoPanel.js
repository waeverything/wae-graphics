const videos = nodecg.Replicant('assets:videos');
const playListRep = nodecg.Replicant('playList', "wae-videoplayer");
const videoListElement = document.querySelector('#videoList');
const playListElement = document.querySelector("#playList>ol");
const playAllButton = document.querySelector(".playAll");
const stopAllButton = document.querySelector(".stopAll");



let playList = [];

const videoListTemplate = (video, index, list) => {
	let el = createListItem("videoListItem", index);

	let videoTitle = createTitleElement(video);

	let videoButton = createButtonElement("Play", "playButton");

	let playListButton = createButtonElement("Add to playlist", "listButton");

	
	el.appendChild(videoTitle);
	el.appendChild(playListButton)
	el.appendChild(videoButton);
	videoListElement.appendChild(el);
};

const playListTemplate = (video, index, list) => {
	let listItem = document.createElement('li');
	listItem.setAttribute('class', 'playListItem');
	listItem.dataset.videoIndex = index;

	let videoTitle = createTitleElement(video);

	let removeButton = createButtonElement("Remove", "removeFromPlaylist", index)

	let gridDiv = document.createElement("div");

	gridDiv.appendChild(videoTitle);
	gridDiv.appendChild(removeButton);

	listItem.appendChild(gridDiv);
	playListElement.appendChild(listItem);
};

// Element creation functions
const createListItem = (divClass, dataSetIndex) => {
	let _listItemElement = document.createElement("div");
	_listItemElement.setAttribute('class', divClass);
	_listItemElement.dataset.videoIndex = dataSetIndex;

	return _listItemElement;
}

const createTitleElement = (video) => {
	let _videoTitleElement = document.createElement('span');
	_videoTitleElement.innerText = video.name;
	_videoTitleElement.setAttribute('class', 'videoTitle');

	return _videoTitleElement;
}

const createButtonElement = (innerText, className, videoIndex) => {
	let _buttonElement = document.createElement('button');
	_buttonElement.innerText = innerText;
	_buttonElement.setAttribute('class', className);
	
	if(videoIndex != undefined) {
		_buttonElement.dataset.videoIndex = videoIndex
	}

	return _buttonElement;
}

// Messages to scenescreen

const onPlayButtonClicked = (e) => {
	nodecg.sendMessage("playSingle", e.target.parentElement.dataset.videoIndex)
}

const startPlayList = () => {
	nodecg.sendMessage("playMulti", playListRep.value);
}

const stopPlayList = () => {
	nodecg.sendMessage("stopPlaylist", "");
}


// Playlist functions
const addToPlayList = (e) => {
	let videoIndex = e.target.parentElement.dataset.videoIndex;

	if (playListRep.value.includes(videoIndex)) return;

	playListRep.value.push(videoIndex)
	playListTemplate(videos.value[videoIndex], videoIndex, true)
}

const removeFromPlaylist = (e) => {
	let videoIndex = e.target.parentElement.parentElement.dataset.videoIndex

	playListRep.value.splice(playListRep.value.indexOf(videoIndex), 1);
}


// Event handlers

playListRep.on("change", () => {
	playListElement.innerHTML = "";
	if (playListRep.value.length == 0) return;


	for (let i in playListRep.value) {
		let videoIndex = playListRep.value[i];
		playListTemplate(videos.value[videoIndex], videoIndex, true)
	}

})

videos.on('change', () => {
	videoListElement.innerHTML = '';
	if (videos.value.length == 0) return;


	for (let i in videos.value) {
		let video = videos.value[i]
		videoListTemplate(video, i, true);
	}
});


playAllButton.onclick = startPlayList;
stopAllButton.onclick = stopPlayList;

playListElement.addEventListener("click", (e) => {
	if (e && e.target.matches(".removeFromPlaylist")) {
		removeFromPlaylist(e);
	}
})

videoListElement.addEventListener("click", (e) => {
	if (e && e.target.matches(".playButton")) {
		onPlayButtonClicked(e);
	}
})

videoListElement.addEventListener("click", (e) => {
	if (e && e.target.matches(".listButton")) {
		addToPlayList(e);
	}
})