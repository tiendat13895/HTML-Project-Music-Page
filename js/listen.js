$(document).ready(function () {

    var locationSearch = window.location.search;
    var id = locationSearch.split("=")[1];
    for (var i = 0; i < id.length; i++) {
    id = id.replace("%20", " ");
    id = id.replace("%27", " ");
    }
    $.ajax({
        // header: "Access-Control-Allow-Origin: *",
        url: "https://www.jasonbase.com/things/qDeX.json",
        success: function (result) {

            // var result = JSON.parse(result);
            var listSong = result.list_song;
            var listMV = result.list_mv;
            //Listen
            for (var i = 0; i < listSong.length; i++) {
                var song = listSong[i];
                if (song.song_name == id) {
                    $(".listen-audio").append(`<source src="${song.song_url}" type="audio/mp3">`);
                    $(".listen-song-name").append(`${song.song_name}`)
                    $(".listen-artist").append(`${song.song_artist}`)
                    $(".listen-art").append(`<img class="img-art" src="${song.img_url}" alt="Not Found">`)
                }

                var itemHtml = '<div class="chart-song-detail col-12">';
                itemHtml += `<a href="../main/listen.html?song_name=${song.song_name}">`;
                itemHtml += `<p class="song-title">${song.song_name}</p>`;
                itemHtml += `</a><p class="song-artist">${song.song_artist}</p>`;
                itemHtml += '</div>';
                $(".chart-song").append(itemHtml);
            }
            
            //Watch
            for (var i = 0; i < listMV.length; i++) {
                // console.log(id);
                var mv = listMV[i];
                // console.log(mv.song_name);
                if (mv.song_name == id) {
                    $(".watch-video").append(`<source src="${mv.song_url}" type="video/mp4">`);
                    $(".watch-song-name").append(`${mv.song_name}`)
                    $(".watch-artist").append(`${mv.song_artist}`)
                    $(".watch-art").append(`<img class="img-art" src="${mv.img_url}" alt="Not Found">`)
                }

                var itemHtml = '<div class="chart-song-detail col-12">';
                itemHtml += `<a href="../main/watch.html?song_name=${mv.song_name}">`;
                itemHtml += `<img class="chart-number-mv" src="${mv.img_url}">`;
                itemHtml += `<p class="song-title">${mv.song_name}</p>`;
                itemHtml += `</a><p class="song-artist">${mv.song_artist}</p>`;
                itemHtml += '</div>';
                $(".chart-block2").append(itemHtml);
            }
        }
    })

})