// Json
$(document).ready(function () {
    loadJSONData()
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
                var searchText = " ";

                if (GetParameter("searchText").slice(0, 10) == "searchText") {
                    var searchText = GetURLParameter("searchText");

                }
                else {
                    var searchText = GetURLParameter("art_name");
                }

                for (var i = 0; i < searchText.length; i++) {
                    searchText = searchText.replace("%20", " ");
                    searchText = searchText.replace("%27", " ");
                }
                var searchText = searchText.toLowerCase();

                $(".search").empty();
                $(".srtext").empty();
                $(".srtext").append("<span>Search for: </span>" + searchText);
                for (var i = 0; i < listSong.length; i++) {
                    var song = listSong[i];
                    if (song.song_name.toLowerCase().indexOf(searchText) != -1 ||
                        song.song_artist.toLowerCase().indexOf(searchText) != -1) {

                        var itemHtml = '<div class="side">';
                        itemHtml += `<a href="../main/listen.html?song_name=${song.song_name}">`;
                        itemHtml += `<img src="${song.img_url}" alt="Not Found">`;
                        itemHtml += `<p class="song-title">${song.song_name}</p>`;
                        itemHtml += `</a><p class="song-artist">${song.song_artist}</p>`;
                        itemHtml += '</div>';
                        $(".s-song").append(itemHtml);
                    }
                }
                for (var i = 0; i < listMV.length; i++) {
                    var mv = listMV[i];
                    if (mv.song_name.toLowerCase().indexOf(searchText) != -1 ||
                        mv.song_artist.toLowerCase().indexOf(searchText) != -1) {
                        var itemHtml = '<div class="side">';
                        itemHtml += `<a href="../main/watch.html?mv_name=${mv.song_name}">`;
                        itemHtml += `<img src="${mv.img_url}" alt="Not Found">`;
                        itemHtml += `<span class="icon-play"></span>`;
                        itemHtml += `<p class="song-title">${mv.song_name}</p>`;
                        itemHtml += `</a><p class="song-artist">${mv.song_artist}</p>`;
                        itemHtml += '</div>';
                        $(".s-mv").append(itemHtml);
                    }
                }
                for (var i = 0; i < listAlbum.length; i++) {
                    var album = listAlbum[i];
                    if (album.song_name.toLowerCase().indexOf(searchText) != -1 ||
                        album.song_artist.toLowerCase().indexOf(searchText) != -1) {
                        var itemHtml = '<div class="side">';
                        itemHtml += `<a href="##">`;
                        itemHtml += `<img src="${album.img_url}" alt="Not Found">`;
                        itemHtml += `<span class="icon-play"></span>`;
                        itemHtml += `<p class="song-title">${album.song_name}</p>`;
                        itemHtml += `</a><p class="song-artist">${album.song_artist}</p>`;
                        itemHtml += '</div>';
                        $(".s-album").append(itemHtml);
                    }
                }
                for (var i = 0; i < listArtist.length; i++) {
                    var artist = listArtist[i];
                    if (artist.song_name.toLowerCase().indexOf(searchText) != -1 ||
                        artist.song_artist.toLowerCase().indexOf(searchText) != -1) {
                        var itemHtml = '<div class="side">';
                        itemHtml += `<a href="##">`;
                        itemHtml += `<img src="${artist.img_url}" alt="Not Found">`;
                        itemHtml += `<span class="icon-play"></span>`;
                        itemHtml += `<p class="song-title">${artist.song_name}</p>`;
                        itemHtml += `</a><p class="song-artist">${artist.song_artist}</p>`;
                        itemHtml += '</div>';
                        $(".artist").append(itemHtml);
                    }
                }

            }
        })
    }
    function GetURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }

    function GetParameter(Param) {
        var PageURL = window.location.search.substring(1);
        return PageURL;
    }
})