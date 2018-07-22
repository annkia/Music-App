const songs = [
    
    "bensound-acousticbreeze.mp3",
    "bensound-goinghigher.mp3",
    "bensound-happyrock.mp3",
    "bensound-jazzyfrenchy.mp3",
    "bensound-littleidea.mp3",
    "bensound-ukulele.mp3"
    
]

//funkcja, która stworzy listę piosenek

const createSongList = () =>{
    const list=document.createElement('ol')//Create a <ol> node
    
    for(let i = 0; i<songs.length; i++){
        const item=document.createElement('li') //Create a <li> node
        item.appendChild(document.createTextNode(songs[i])) //Append the text to <li>
        
        list.appendChild(item)
    }
    
    return list
}

document.getElementById('songList').appendChild(createSongList())

//create event handler on click

songList.onclick=(e)=>{
    const clickedItem=e.target
    const source=document.getElementById('source')
    source.src='songs/' + clickedItem.innerText

    document.getElementById('currentlyPlayingSong').innerText="Currently playing: "
   document.getElementById('currentSong').innerText=clickedItem.innerText
    
    player.load()
    player.play()
}
//funkcja do odtwarzania muzyki za pomocą buttona play
const playAudio= () => {
    if(player.readyState){
        player.play()
    }
}
const pauseAudio=()=>{
    player.pause()
}

//Slider
const slider=document.getElementById('volumeSlider')
slider.oninput=(e)=>{
    const volume=e.target.value
    player.volume=volume
}

//Update progress
const updateProgress=()=>{
    if(player.currentTime>0){
        const progressBar=document.getElementById('progress')
        progressBar.value=(player.currentTime/player.duration)*100

    } 
}