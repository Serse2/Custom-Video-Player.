//selezionare gli elementi dal dom
const player = document.querySelector('.player')
const video = player.querySelector('.viewer') //player al posto di document
const progress = player.querySelector('.progress')
const progressField = player.querySelector('.progress__filled')
const playPause = player.querySelector('.toggle')
const range = player.querySelectorAll('.player__slider')
const skipButton = player.querySelectorAll('[data-skip]')

//function
function togglePlay(){
    //video.paused è una proprietà che indica se l'elemento multimediale è in pausa.
    const method = video.paused ? 'play' : 'pause'
    video[method]()
}
function changeButton(){
    const icon = this.paused ? '►' : '■'
    playPause.textContent = icon
}
function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleUpdateRange(){
    console.log(this.value)
}

//listener eventi
video.addEventListener('click', togglePlay)
video.addEventListener('play', changeButton)
video.addEventListener('pause', changeButton)

playPause.addEventListener('click', togglePlay)

skipButton.forEach(button => button.addEventListener('click', skip))

range.forEach(range => range.addEventListener('change', handleUpdateRange))
range.forEach(range => range.addEventListener('mousemove', handleUpdateRange))