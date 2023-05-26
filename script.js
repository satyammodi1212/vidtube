
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var containeronline = document.getElementById("container-online");
var help = document.querySelector('.help');
let inputEl = document.getElementById('search');
let modeEl = document.getElementById('mode')
let navEl = document.getElementById('nav')
const stextEl = document.querySelector('.short-text');



menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    help.style.display = 'none';
}

modeEl.addEventListener('click', function () {
    sidebar.classList.toggle("colour");
    navEl.classList.toggle('colour');
    container.classList.toggle('colour');
    stextEl.classList.toggle('textcolour');
    // inputEl.classList.toggle('textcolour');
});


// api search bar

let API = "AIzaSyB7VsYkvO3WVCe3u0BAJHaI7JIVSfyH9Xo";
async function mostPopular() {
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&chart=mostPopular=&regionCode=IN&key=${API}`);
    // let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the%20weeknd&key=AIzaSyB7VsYkvO3WVCe3u0BAJHaI7JIVSfyH9Xo=IN&Key= ${API}`);

    let data = await res.json();
    append(data.items)
    console.log(data.items);

}
mostPopular();

function append(data) {
    let containeronline = document.getElementById("container-online"); 
    // container-online.innerHTML = null;
    data.forEach(({ snippet, id: { videoId } }) => {
        let img = snippet.thumbnails.high.url;
        let title = snippet.title;
        let channelTitle = snippet.channelTitle;
        // fkvkfvlk
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = img;
        let name = document.createElement("p");
        name.innerText = title;
        name.style.color = "#002B5B";
        name.style.fontWeight = "600";
        let Cname = document.createElement("p");
        Cname.innerText = channelTitle;
        Cname.style.color = "#5a5a5a";
        let data = {
            snippet,
            videoId
        }
        div.addEventListener("click", function () {
            localStorage.setItem("video", JSON.stringify(data));
            window.location.href = "./video.html";
        });
        div.append(image, name, Cname);
        containeronline.append(div);
    });
}

// search video in youTube

async function search() {
    let query = document.getElementById("query").value;
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API}`);
    let data = await res.json()
    append(data.items);
    console.log(value);
}

//

// let searchLink = "https://www.youtube.com/results?search_query=";

// searchBtn.addEventListener('click', () => {
//     if (searchInput.value.length) {
//         location.href = searchLink + searchInput.value;
//     }
// })

