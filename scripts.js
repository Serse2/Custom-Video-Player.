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
    video[this.name] = this.value
    console.log(video)
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100
    progressField.style.flexBasis = `${percent}%`
}

function scrub(e){
    const scrub = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrub
}

//full screen function

//listener eventi
video.addEventListener('click', togglePlay)
video.addEventListener('play', changeButton)
video.addEventListener('pause', changeButton)
video.addEventListener('timeupdate', handleProgress)

playPause.addEventListener('click', togglePlay)

progress.addEventListener('click', scrub)
let mousedown = false
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedow', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

skipButton.forEach(button => button.addEventListener('click', skip))

range.forEach(range => range.addEventListener('change', handleUpdateRange))
range.forEach(range => range.addEventListener('mousemove', handleUpdateRange))