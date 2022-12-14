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
  
    //create the left information and add it to 
  let overlay = document.createElement('div');
  overlay.className="overlay";
  col.appendChild(overlay);

  let overlay2 = document.createElement('div');
  overlay2.className="overlay2";
  col.appendChild(overlay2);

  
  
  let text = document.createElement('div');
  text.className= "text"
  text.innerHTML = `<h5>${x.original_title}</h5> <div class="card-panel" style="background:#810000;color:white;"> ${(x.vote_average)} <span id=stars>${getStars(x.vote_average)}</span> </div>`
  overlay.appendChild(text);

  let text2 = document.createElement('div');
  text2.className= "text2"
  text2.innerHTML = `${x.overview}`
  overlay2.appendChild(text2);

  row_body.appendChild(col);
  
}


// document.getElementById("stars").innerHTML = getStars(3.6);

function getStars(rating) {

    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    new_rating = (rating/10)*5;
    let output = [];
  
    // Append all the filled whole stars
    for (var i = new_rating; i >= 1; i--)
      output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    // If there is a half a star, append it
    if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    // Fill the empty stars
    for (let i = (5 - new_rating); i >= 1; i--)
      output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
  
    return output.join('');
  
  }