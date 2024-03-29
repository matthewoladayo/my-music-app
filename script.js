const fetchMe = () => {
    let url = 'https://musicapi-19wk.onrender.com/music/myAPI'
    fetch(url)
        .then(res => res.json())
        .then((conRes) => {
            console.log(conRes);
            conRes.map((song) => {
                show.innerHTML += `
                <div class="text-center p-2">
                    <h5>${song.id}. ${song.songTitle} (ft) ${song.artistName}</h5>
                    <p>${song.releaseDate}</p>
                    <div class="container">
                        <img src= '${song.songImage}' alt="dp">
                        <div class="overlay text-center">
                      </div>
                    </div>
                    <audio class="p-2" src='${song.songUrl}' controls/>
                    </div>
                    <hr>
                    `
                    suc.innerHTML = "You get audios Successful" 
                    suc.style.display = "block"
                    setTimeout(() =>{
                        suc.style.display = "none"
                    },10000
                    )
             })
        })
        .catch((err)=>{
            console.log(err);
        })
}

