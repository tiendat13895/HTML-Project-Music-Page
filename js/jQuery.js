// Json
$(document).ready(function () {

    var copesong = [];
    var copeMV = [];
    var copeAlbum = [];
    var copeArtist = [];
    loadJSONData()

    $(".search-text").keyup(function (e) {
        if (e.keyCode == 13) {
            search()
        }
    })

    $(".search-bt").click(function () {
        search()
    })

    function search() {
        var searchText = $(".search-text").val().toLowerCase();
        window.location.href = "../main/search.html?searchText=" + searchText;
    }

    function loadJSONData() {
        $.ajax({
            // header: "Access-Control-Allow-Origin: *",
            url: "https://www.jasonbase.com/things/qDeX.json",
            success: function (result) {

                // var result = JSON.parse(result);
                var listSong = result.list_song;
                var listMV = result.list_mv;
                var listAlbum = result.list_album;
                var listArtist = result.list_artist;
                copesong = listSong;
                copeMV = listMV;
                copeAlbum = listAlbum;
                copeArtist = listArtist;
                //Song

                for (var i = 1; i < listSong.length; i++) {

                    var song = listSong[i];
                    if (i < 10) { i = "0" + i }
                    var itemHtml = '<div class="chart-song-page-detail col-12">';
                    itemHtml += `<a href="../main/listen.html?song_name=${song.song_name}">`;
                    itemHtml += `<p class="chart-number-song mt-4 ml-4 mr-3">${i}</p>`;
                    itemHtml += `<img src="${song.img_url}" alt="Not Found">`;
                    itemHtml += `<span class="icon-play"></span>`;
                    itemHtml += `<p class="song-title">${song.song_name}</p></a>`;
                    itemHtml += `<a href="../main/search.html?art_name=${song.song_artist}"><p class="song-artist">${song.song_artist}</p></a>`;
                    itemHtml += `<img class="extent" src="../picture/share.png" alt="Not Found">`;
                    itemHtml += `<img class="extent" src="../picture/plus.png" alt="Not Found">`;
                    itemHtml += `<img class="extent" src="../picture/download.png" alt="Not Found">`;
                    itemHtml += `<img class="extent" src="../picture/video.png" alt="Not Found">`;
                    itemHtml += '</div>';
                    $(".chart-details").append(itemHtml);
                }
                for (var i = 0; i < 8; i++) {

                    var song = listSong[i];
                    var itemHtml = '<div class="side">';
                    itemHtml += `<a href="../main/listen.html?song_name=${song.song_name}">`;
                    itemHtml += `<img src="${song.img_url}" alt="Not Found">`;
                    itemHtml += `<span class="icon-play"></span>`;
                    itemHtml += `<p class="song-title">${song.song_name}</p></a>`;
                    itemHtml += `<a href="../main/search.html?art_name=${song.song_artist}"><p class="song-artist">${song.song_artist}</p></a>`;
                    itemHtml += '</div>';
                    $(".home-song").append(itemHtml);
                }
                for (var i = 0; i < 1; i++) {
                    var song = listSong[i];
                    var itemHtml = `<div style="background-image: url(${song.img_url});  object-fit: cover; width: 100%; height: 18%;">`;
                    itemHtml += `<a href="../main/listen.html?song_name=${song.song_name}"><br><br><br><br><br>`;
                    itemHtml += `<p class="chart-number-song mt-2 ml-3 mr-3" style="color:white;">1</p>`;
                    itemHtml += `<p class="song-title mb-4" style="color:white;">${song.song_name}</p></a>`;
                    itemHtml += `<a href="../main/search.html?art_name=${song.song_artist}"><p class="song-artist" style="color:white;">${song.song_artist}</p></a></div>`;
                    $(".home-chart-song").append(itemHtml);
                }
                for (var i = 1; i < 10; i++) {

                    var song = listSong[i];
                    var itemHtml = '<div class="chart-song-detail col-12">';
                    itemHtml += `<a href="../main/listen.html?song_name=${song.song_name}">`;
                    itemHtml += `<p class="chart-number-song mt-2 ml-3 mr-3">${i}</p>`;
                    itemHtml += `<p class="song-title">${song.song_name}</p></a>`;
                    itemHtml += `<a href="../main/search.html?art_name=${song.song_artist}"><p class="song-artist">${song.song_artist}</p></a>`;
                    itemHtml += '</div>';
                    $(".home-chart-song").append(itemHtml);
                }
                //MV
                for (var i = 0; i < listMV.length; i++) {

                    var mv = listMV[i];
                    var itemHtml = '<div class="side">';
                    itemHtml += `<a href="../main/watch.html?mv_name=${mv.song_name}">`;
                    itemHtml += `<img src="${mv.img_url}" alt="Not Found">`;
                    itemHtml += `<span class="icon-play"></span>`;
                    itemHtml += `<p class="song-title">${mv.song_name}</p></a>`;
                    itemHtml += `<a href="../main/search.html?art_name=${mv.song_artist}"><p class="song-artist">${mv.song_artist}</p></a>`;
                    itemHtml += '</div>';
                    $(".mv").append(itemHtml);
                }

                for (var i = 0; i < 8; i++) {

                    var mv = listMV[i];
                    var itemHtml = '<div class="side">';
                    itemHtml += `<a href="../main/watch.html?mv_name=${mv.song_name}">`;
                    itemHtml += `<img src="${mv.img_url}" alt="Not Found">`;
                    itemHtml += `<span class="icon-play"></span>`;
                    itemHtml += `<p class="song-title">${mv.song_name}</p></a>`;
                    itemHtml += `<a href="../main/search.html?art_name=${mv.song_artist}"><p class="song-artist">${mv.song_artist}</p></a>`;
                    itemHtml += '</div>';
                    $(".home-mv").append(itemHtml);
                }
                for (var i = 0; i < 1; i++) {
                    var mv = listMV[i];
                    var itemHtml = `<div style="background-image: url(${mv.img_url});  object-fit: cover; width: 100%; height: 18%;">`;
                    itemHtml += `<a href="../main/watch.html?song_name=${mv.song_name}"><br><br><br><br><br>`;
                    itemHtml += `<p class="chart-number-song mt-2 ml-3 mr-3" style="color:white;">1</p>`;
                    itemHtml += `<p class="song-title mb-4" style="color:white;">${mv.song_name}</p></a>`;
                    itemHtml += `</a><p class="song-artist" style="color:white;">${mv.song_artist}</p></div>`;
                    itemHtml += `<a href="../main/search.html?art_name=${mv.song_artist}"><p class="song-artist">${mv.song_artist}</p></a>`;
                    $(".home-chart-mv").append(itemHtml);
                }
                for (var i = 2; i < 11; i++) {

                    var mv = listMV[i];
                    var itemHtml = '<div class="chart-song-detail col-12">';
                    itemHtml += `<a href="../main/watch.html?mv_name=${mv.song_name}">`;
                    itemHtml += `<p class="chart-number-mv" style="background-image: url(${mv.img_url});  object-fit: cover;">${i}</p>`;
                    itemHtml += `<p class="song-title">${mv.song_name}</p>`;
                    itemHtml += `</a><p class="song-artist">${mv.song_artist}</p>`;
                    itemHtml += '</div>';
                    $(".home-chart-mv").append(itemHtml);
                }
                //Album
                for (var i = 0; i < listAlbum.length; i++) {

                    var album = listAlbum[i];
                    var itemHtml = '<div class="side">';
                    itemHtml += `<a href="##">`;
                    itemHtml += `<img src="${album.img_url}" alt="Not Found">`;
                    itemHtml += `<span class="icon-play"></span>`;
                    itemHtml += `<p class="song-title">${album.song_name}</p>`;
                    itemHtml += `</a><p class="song-artist">${album.song_artist}</p>`;
                    itemHtml += '</div>';
                    $(".album").append(itemHtml);
                }

                for (var i = 0; i < 8; i++) {

                    var album = listAlbum[i];
                    var itemHtml = '<div class="side">';
                    itemHtml += `<a href="##">`;
                    itemHtml += `<img src="${album.img_url}" alt="Not Found">`;
                    itemHtml += `<span class="icon-play"></span>`;
                    itemHtml += `<p class="song-title">${album.song_name}</p>`;
                    itemHtml += `</a><p class="song-artist">${album.song_artist}</p>`;
                    itemHtml += '</div>';
                    $(".home-album").append(itemHtml);
                }
                //Artist
                for (var i = 0; i < listArtist.length; i++) {

                    var artist = listArtist[i];
                    var itemHtml = '<div class="side">';
                    itemHtml += `<a href="##">`;
                    itemHtml += `<img src="${artist.img_url}" alt="Not Found">`;
                    itemHtml += `<span class="icon-play"></span>`;
                    itemHtml += `<p class="song-title">${artist.song_name}</p>`;
                    itemHtml += `</a><p class="song-artist">${artist.song_artist}</p>`;
                    itemHtml += '</div>';
                    $(".artist").append(itemHtml);
                }
                //Search
            }
        })
    }
})