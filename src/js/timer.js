let date = new Date('Jul 26 2022 00:00');

function counts() {
    let now = new Date();
    let gap = date - now;

    if (gap < 0) {
        document.querySelector('.timer').style.display = 'none';
    }

    let days = Math.floor(gap / 1000 / 60 / 60 / 24)
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24
    let minutes = Math.floor(gap / 1000 / 60) % 60
    let seconds = Math.floor(gap / 1000) % 60

    document.getElementById('d').innerText = days < 10 ? '0' + days : days
    document.getElementById('h').innerText = hours < 10 ? '0' + hours : hours
    document.getElementById('m').innerText = minutes < 10 ? '0' + minutes : minutes
    document.getElementById('s').innerText = seconds < 10 ? '0' + seconds : seconds
}

counts()
setInterval(counts, 1000)