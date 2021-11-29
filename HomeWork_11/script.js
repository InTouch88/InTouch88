function changeText() {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'url', true);
    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState === 4) {
            let date = new Date();
            document.getElementById('button').innerText = 'Your vote is accepted ' + date;
        }
    }
    ajaxRequest.send();
}

function downloadBooks () {
    const ajaxrequest = new XMLHttpRequest();
    ajaxrequest.open('GET', 'books.json', true);
    ajaxrequest.onreadystatechange = function () {
        if (ajaxrequest.readyState === 4) {
            let obj = JSON.parse(ajaxrequest.response);
            let elem = document.querySelectorAll('#list li');
            for (let i = 0; i < elem.length; i++) {
                elem[i].innerText = Object.values(obj)[i];
            }
        }
    }
    ajaxrequest.send();
}