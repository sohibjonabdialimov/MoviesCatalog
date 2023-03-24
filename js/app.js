const deleteModalImage = document.getElementById('deleteModalImage');
const searchMovieTitle = document.getElementById('searchMovieTitle');
const editCategories = document.getElementById('editCategories');
const addCategories = document.getElementById('addCategories');
const savedSection = document.querySelector('.saved-section');
const selectRating = document.getElementById('select-rating');
const searchResult = document.getElementById('search-result');
const editLanguage = document.getElementById('editLanguage');
const moviesCards = document.getElementById("moviesCards");
const addLanguage = document.getElementById('addLanguage');
const addNewMovie = document.getElementById('addNewMovie');
const editRating = document.getElementById('editRating');
const selectAll = document.getElementById('select-all');
const editTitle = document.getElementById('editTitle');
const addRating = document.getElementById('addRating');
const editYear = document.getElementById('editYear');
const editForm = document.getElementById('editForm');
const addModal = document.getElementById('addModal');
const addTitle = document.getElementById('addTitle');
const qidirish = document.getElementById('qidirish');
const addForm = document.getElementById('addForm');
const addYear = document.getElementById('addYear');
const modal = document.getElementById('modal');
const ratingInput = document.getElementById('no-name');
let ratingSelectMovies = [];
let selectMovies = [];
let removeArr = [];
let globalInfo;


searchResult.innerHTML = movies.length;
renderHtmlElements(movies);

function renderHtmlElements(renderName) {
  let result = renderName.map((item, index) => {
    let element = `
  <div class="movie-card">
          <div class="card-img">
            <img src="${item.smallThumbnail}" alt="">
          </div>
          <div class="card-content">
            <div class="card-title">
              ${item.title}  
            </div>
            <p class="card-year">${item.year}</p>
            <p class="card-rating">${item.imdbRating}</p>
            <p class="card-lang">${item.language}</p>
            <div class="card-btns">
              <button  class="btn watch-btn">Watch Trailer</button>
              <button onclick="sayHello(${index})" class="btn bookmark-btn">Bookmark</button>
            </div>
            <div class="images">
              <img onclick="editElement(${item.id})" src="img/edit.png" alt="">
              <img onclick="deleteElement(${item.id})" src="img/delete.png" alt="">
            </div>
          </div>
        </div>
  `
    return element;
  }).join(' ');
  moviesCards.innerHTML = result;
}

function renderSelect() {
  let result = selectMovies.map((item, index) => {
    let element = `
  <div class="movie-card">
          <div class="card-img">
            <img src="${item.smallThumbnail}" alt="">
          </div>
          <div class="card-content">
            <div class="card-title">
              ${item.title}  
            </div>
            <p class="card-year">${item.year}</p>
            <p class="card-rating">${item.imdbRating}</p>
            <p class="card-lang">${item.language}</p>
            <div class="card-btns">
              <button class="btn watch-btn">Watch Trailer</button>
              <button onclick="sayHello(${index})" class="btn bookmark-btn">Bookmark</button>
            </div>
          </div>
        </div>
  `
    return element;
  }).join(' ');
  moviesCards.innerHTML = result;
}

function renderRatingSelect() {
  let result = ratingSelectMovies.map((item, index) => {
    let element = `
  <div class="movie-card">
          <div class="card-img">
            <img src="${item.smallThumbnail}" alt="">
          </div>
          <div class="card-content">
            <div class="card-title">
              ${item.title}  
            </div>
            <p class="card-year">${item.year}</p>
            <p class="card-rating">${item.imdbRating}</p>
            <p class="card-lang">${item.language}</p>
            <div class="card-btns">
              <button class="btn watch-btn">Watch Trailer</button>
              <button onclick="sayHello(${index})" class="btn bookmark-btn">Bookmark</button>
            </div>
          </div>
        </div>
  `
    return element;
  }).join(' ');
  moviesCards.innerHTML = result;
}



function sayHello(index) {
  if (!removeArr.includes(movies[index].title)) {
    removeArr.push(movies[index].title);
  };
  renderRemoveMovie();
}

function renderRemoveMovie(){
  let result = removeArr.map((item, index) => {
    let ok = `
  <div class="saved-title">
     <h4>${item}</h4> 
     <button onclick="removeSavedMovie(${index})" class="btn remove-btn">Remove</button>
  </div>`;
    return ok;
  }).join(' ');
  savedSection.innerHTML = result; 
}

function removeSavedMovie(index) {
  removeArr = removeArr.filter((item) => item !== removeArr[index]);
  renderRemoveMovie();
  // searchResult.innerHTML = movies.length;
}
let newSelectValue;
selectAll.addEventListener("change", () => {
  newSelectValue = selectAll.value;
  if (newSelectValue === "All") {
    selectMovies = movies;
  } else {
    selectMovies = movies.filter((item) => {
      return item.categories.includes(newSelectValue);
    })
  }

})
qidirish.addEventListener("click", () => {
  searchResult.innerHTML = selectMovies.length;
  renderSelect();
  selectMovies = [];
})


let newRatingSelect;
selectRating.addEventListener("change", () => {
  newRatingSelect = selectRating.value;
  if (newRatingSelect === "rating") {
    ratingSelectMovies = movies;
  } else if (newRatingSelect === "high") {
    ratingSelectMovies = movies.sort((a, b) => {
      return b.imdbRating - a.imdbRating;
    })
  } else if (newRatingSelect === "low") {
    ratingSelectMovies = movies.sort((a, b) => {
      return a.imdbRating - b.imdbRating;
    })
  }
  searchResult.innerHTML = movies.length;
  renderRatingSelect();
  ratingSelectMovies = [];
})


let searchMoviesList = [];
searchMovieTitle.addEventListener("input", (e) => {
  if (e.target.value === "") {
    searchMoviesList = movies;
  }
  if (e.target.value) {
    searchMoviesList = movies.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    })
  }
  searchFunc();
})



function searchFunc() {
  let result = searchMoviesList.map((item, index) => {
    let element = `
  <div class="movie-card">
          <div class="card-img">
            <img src="${item.smallThumbnail}" alt="">
          </div>
          <div class="card-content">
            <div class="card-title">
              ${item.title}  
            </div>
            <p class="card-year">${item.year}</p>
            <p class="card-rating">${item.imdbRating}</p>
            <p class="card-lang">${item.language}</p>
            <div class="card-btns">
              <button class="btn watch-btn">Watch Trailer</button>
              <button onclick="sayHello(${index})" class="btn bookmark-btn">Bookmark</button>
            </div>
          </div>
        </div>
  `
    return element;
  }).join(' ');
  moviesCards.innerHTML = result;
}
let findedElement;
function editElement(id){
  modal.style.display = 'flex';
  findedElement = movies.find((item) => {
    return +item.id === id;
  })
  let findedElementIndex = movies.findIndex((item) => {
    return +item.id === id;
  })

  globalInfo = {
    id: id,
    index: findedElementIndex
  }
  editTitle.value = findedElement.title;
  editYear.value = findedElement.year;
  editCategories.value = findedElement.categories.join(", ");
  editRating.value = findedElement.imdbRating;
  editLanguage.value = findedElement.language;
}

function deleteElement(id){
  movies = movies.filter((item) => {
    return +item.id !== id;
  })
  renderHtmlElements(movies);
  searchResult.innerHTML = movies.length;
}

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.style.display = 'none';
  let newObj = {
    id: globalInfo.id,
    title: editTitle.value,
    year: editYear.value,
    categories: editCategories.value.split(', '),
    imdbId: findedElement.imdbId,
    imdbRating: editRating.value,
    runtime: findedElement.runtime,
    language: editLanguage.value,
    youtubeId: findedElement.youtubeId,
    summary: findedElement.summary,
    smallThumbnail: findedElement.smallThumbnail,
    bigThumbnail: findedElement.bigThumbnail,
  }
  movies.splice(globalInfo.index, 1, newObj);
  renderHtmlElements(movies);
});




addNewMovie.addEventListener("click", () => {
  addModal.style.display = 'flex';
})

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let addNewObj = {
    id: Math.random().toFixed(4),
    title: addTitle.value,
    year: addYear.value,
    categories: addCategories.value.split(', '),
    imdbId: movies[Math.round(Math.random() * movies.length)].imdbId,
    imdbRating: addRating.value,
    runtime: movies[Math.round(Math.random() * movies.length)].runtime,
    language: addLanguage.value,
    youtubeId: movies[Math.round(Math.random() * movies.length)].youtubeId,
    summary: movies[Math.round(Math.random() * movies.length)].summary,
    smallThumbnail: movies[Math.round(Math.random() * movies.length)].smallThumbnail,
    bigThumbnail: movies[Math.round(Math.random() * movies.length)].bigThumbnail,
  }
  movies.push(addNewObj);
  renderHtmlElements(movies);
  searchResult.innerHTML = movies.length;

  addModal.style.display = 'none';

  addTitle.value = '';
  addYear.value = '';
  addCategories.value = '';
  addRating.value = '';
  addLanguage.value = '';
})

addModal.addEventListener('click', (e) => {
  if(e.target === addModal || e.target.id === 'deleteModalImage'){
    addModal.style.display = 'none';
  }
})
modal.addEventListener("click", (e) => {
  if(e.target === modal || e.target.id === 'deleteModalImage'){
    modal.style.display = 'none';
  }
});