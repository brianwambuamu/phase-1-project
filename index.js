const button = document.getElementById('button');
const row_body = document.getElementById('row-body');
const input =document.getElementById('movie_search');



//create elements function
const createElements = (x) => {
    //create column
    var col = document.createElement('div');
    col.className = 'col s3 m3';

    //create a card
    let card = document.createElement('div');
    card.className = 'card';
    col.appendChild(card);

    //create poster-holder and add it to the card
    let cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    card.appendChild(cardImage);

    //create actual poster and add it to its holder
    let img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w1280${x.poster_path}`;            
    cardImage.appendChild(img);
}