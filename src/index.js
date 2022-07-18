import './styles/styles.scss'

let date = new Date('Jul 25 2022 00:00');

function counts() {
    let now = new Date();
    console.log('now:', now);
    let gap = date - now;
    console.log('gap:', gap);
    console.log('date:', date);

    if (gap < 0) {
        document.querySelector('.timer').style.display = 'none';
    }

    let days = Math.floor(gap / 1000 / 60 / 60 / 24)
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24
    let minutes = Math.floor(gap / 1000 / 60) % 60
    let seconds = Math.floor(gap / 1000) % 60

    document.getElementById('d').innerText = days
    document.getElementById('h').innerText = hours
    document.getElementById('m').innerText = minutes
    document.getElementById('s').innerText = seconds
}

counts()

setInterval(counts, 1000)


