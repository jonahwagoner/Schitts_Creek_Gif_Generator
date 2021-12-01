var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=NpIpWeTQqLqx2GPajhVMyZxcXYQCVskf&tag=schitts+creek')

request.onload = function(){
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData)
    var originalUrl = parsedData.data.images.original.url;

    var gif = document.createElement('img');
    gif.setAttribute('src', originalUrl);
    const wrapper = document.querySelector('#wrapper');
    wrapper.appendChild(gif);
}

request.send();