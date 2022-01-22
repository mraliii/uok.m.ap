var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 100);
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main__div").style.display = "block";
}

function pageShow(page) {
    document.querySelectorAll('div').forEach(div => {
        div.style.display = "none";
    });
    document.querySelector(`#${page}`).style.display = 'block';

}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function () {
            pageShow(this.dataset.page);
        }
    })
})

function myShowing(page) {
    document.querySelectorAll('div').forEach(div => {
        div.style.display = "none";
    });
    document.querySelector(`#${page}`).style.display = 'block';

}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('i').forEach(i => {
        i.onclick = function () {
            pageShow(this.dataset.page);
        }
    })
})

