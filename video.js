
let data = JSON.parse(localStorage.getItem("video"));

function playVideo(data) {
    let container = document.getElementById("play");
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${data.videoId}?autoplay=1&mute=1`;
    iframe.height = "100%";
    iframe.width = "100%";
    iframe.setAttribute = ("allowfullscreen", true);
    container.append(iframe);
}
playVideo(data);


// let API = "AIzaSyB7VsYkvO3WVCe3u0BAJHaI7JIVSfyH9Xo";
let API = "AIzaSyDrb4gJQqpv0zedPJq0BI1OMTBLdLOOxfg";
async function mostPopular() {
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&chart=mostPopular=&regionCode=IN&key=${API}`);
    let data = await res.json();
    append(data.items)
    console.log(data.items);
}
mostPopular();

function append(data) {
    let rightslider = document.getElementById("right-sidebar"); 
    let clanelname = document.getElementById("clanelname");

    rightslider.innerHTML = null;
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
        name.style.width = "80%"
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
        rightslider.append(div);

        clanelname.innerHTML = (`${title}`);
        // clanelname.innerText = title;

    });
}

// search bar

async function search(){
    let query = document.getElementById("query").value;
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&key=${API}`);
    let data = await res.json()
    append(data.items);
}
// plat video title


let moderl = document.getElementById("mode");
let navEl = document.getElementById("nav");
let contEl = document.getElementById("container");

moderl.addEventListener('click', function(){
    navEl.classList.toggle('colour');
    contEl.classList.toggle("colour");
});








