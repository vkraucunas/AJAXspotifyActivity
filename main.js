$(document).ready(function() {
  // console.log('sanity check');

    var settings = {
      "url": "https://api.spotify.com/v1/artists/0sCYWyAncpUHQZ4l9M1PDd/albums",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
      }
    };

    $.ajax(settings).done(function (response) {
      console.log(response.items);
      var albumArray = response.items;
      // $('#output').html(JSON.stringify(response));

      // albumArray.forEach(function(obj) {
      //     // console.log(obj.album_type);
      //     $('#output').append('<li>'+obj.name+'</li>');
      //   })

      //make an array of album_type's
      var albumTypeArray = albumArray.map(function(obj) {
          return obj.album_type;
      });
      // filter off the singles
      var test = albumTypeArray.filter(function(str) {
        return str.indexOf('single') === -1;
      });
      // put the album_type array on the DOM
      test.forEach(function(str) {
        $('#output').append('<li>'+str+'</li>');
      })
    });



});

