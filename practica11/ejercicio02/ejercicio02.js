const PICS = [
     {
          image: 'images/05030.jpg',
          alt: 'Muerte de Marat',
          title: 'Muerte de  Marat',
          artist: 'David, Jacques-Louis',
          year: '1793',
          genre: 'Romanticismo',
     },
     {
          image: 'images/120010.jpg',
          alt: 'Retrato de Eleanor de Toledo',
          title: 'Retrato de Eleanor de Toledo',
          artist: 'Bronzino, Agnolo',
          year: '1545',
          genre: 'Manierismo',
     },
     {
          image: 'images/07020.jpg',
          alt: 'La libertad guiando al pueblo',
          title: 'La libertad guiando al pueblo',
          artist: 'Delacroix, Eugene',
          year: '1830',
          genre: 'Romanticismo',
     },
     {
          image: 'images/13030.jpg',
          alt: 'Arreglo en gris y negro',
          title: 'Arreglo en gris y negro',
          artist: 'Whistler, James Abbott',
          year: '1871',
          genre: 'Realismo',
     },
     {
          image: 'images/06010.jpg',
          alt: 'Mademoiselle Caroline Riviere',
          title: 'Mademoiselle Caroline Riviere',
          artist: 'Ingres, Jean-Auguste',
          year: '1806',
          genre: 'Neo-Clasicismo',
     }

];


function createImage(src) {
     const image = document.createElement('img');
     image.src = src;
     return image;
}


function bigImage() {
     const imagesThb = document.querySelectorAll(".images");

     imagesThb.forEach((image) => {
          image.addEventListener("mouseover", (e) => {
               const orgImage = image.querySelector('img');
               const srcImage = orgImage.src;
               const newImage = createImage(srcImage);
               const container = image.querySelector('.new-image');
               container.appendChild(newImage);
               container.classList.add('img-thb');

               image.addEventListener("mouseout", () => {
                    container.removeChild(newImage);
                    container.classList.remove('img-thb');
               });
          });
     });
}


const filterBtn = document.querySelector('.filter-btn');
const tableBody = document.querySelector('.t-body');
const filter = document.querySelector('.filter');

filterBtn.addEventListener('click', genreFilter);

function showAll() {
     PICS.forEach((pics) => {
          let row = document.createElement('tr');
          row.classList.add('pics');

          let td1 = document.createElement('td');
          let check = document.createElement('input');
          check.type = "checkbox";
          check.name = "index[]";
          check.value = "10";
          td1.appendChild(check);
          row.appendChild(td1);

          let td2 = document.createElement('td');
          let section1 = document.createElement('section');
          section1.classList.add('images');
          let image = document.createElement('img');
          image.src = pics.image;
          image.alt = pics.alt;
          image.classList.add('original-img');
          let section2 = document.createElement('section');
          section2.classList.add('new-image');
          section1.appendChild(image);
          section1.appendChild(section2);
          td2.appendChild(section1);
          row.appendChild(td2);

          let td3 = document.createElement('td');
          td3.classList.add('pic-title');
          let emTitle = document.createElement('em');
          emTitle.textContent = pics.title;
          td3.appendChild(emTitle);
          row.appendChild(td3);

          let td4 = document.createElement('td');
          td4.classList.add('pic-artist');
          td4.textContent = pics.artist;
          row.appendChild(td4);

          let td5 = document.createElement('td');
          td5.classList.add('pic-year');
          td5.textContent = pics.year;
          row.appendChild(td5);

          let td6 = document.createElement('td');
          td6.classList.add('pic-genre');
          td6.textContent = pics.genre;
          row.appendChild(td6);

          let td7 = document.createElement('td');
          let btnEdit = document.createElement('button');
          btnEdit.classList.add('edit-btn');
          let ref = document.createElement('a');
          ref.href = "#";
          let imageEdit = document.createElement('img');
          imageEdit.src = 'images/edit16.png';
          imageEdit.alt = "";
          ref.appendChild(imageEdit);
          ref.innerHTML += "Editar";
          btnEdit.appendChild(ref);
          td7.appendChild(btnEdit);
          row.appendChild(td7);

          tableBody.appendChild(row);
     });
     bigImage();
     edit();
}


function cleanFilter() {
     while (tableBody.firstChild) {
          tableBody.removeChild(tableBody.firstChild);
     }
}

function genreFilter() {
     cleanFilter();

     let value = filter.options[filter.selectedIndex].value;

     if (value != 'Género') {
          PICS.forEach((pics) => {
               if (pics.genre === value) {
                    let row = document.createElement('tr');
                    row.classList.add('pics');

                    let td1 = document.createElement('td');
                    let check = document.createElement('input');
                    check.type = "checkbox";
                    check.name = "index[]";
                    check.value = "10";
                    td1.appendChild(check);
                    row.appendChild(td1);

                    let td2 = document.createElement('td');
                    let section1 = document.createElement('section');
                    section1.classList.add('images');
                    let image = document.createElement('img');
                    image.src = pics.image;
                    image.alt = pics.alt;
                    image.classList.add('original-img');
                    let section2 = document.createElement('section');
                    section2.classList.add('new-image');
                    section1.appendChild(image);
                    section1.appendChild(section2);
                    td2.appendChild(section1);
                    row.appendChild(td2);

                    let td3 = document.createElement('td');
                    td3.classList.add('pic-title');
                    let emTitle = document.createElement('em');
                    emTitle.textContent = pics.title;
                    td3.appendChild(emTitle);
                    row.appendChild(td3);

                    let td4 = document.createElement('td');
                    td4.classList.add('pic-artist');
                    td4.textContent = pics.artist;
                    row.appendChild(td4);

                    let td5 = document.createElement('td');
                    td5.classList.add('pic-year');
                    td5.textContent = pics.year;
                    row.appendChild(td5);

                    let td6 = document.createElement('td');
                    td6.classList.add('pic-genre');
                    td6.textContent = pics.genre;
                    row.appendChild(td6);

                    let td7 = document.createElement('td');
                    let btnEdit = document.createElement('button');
                    btnEdit.classList.add('edit-btn');
                    let ref = document.createElement('a');
                    ref.href = "#";
                    let imageEdit = document.createElement('img');
                    imageEdit.src = 'images/edit16.png';
                    imageEdit.alt = "";
                    ref.appendChild(imageEdit);
                    ref.innerHTML += "Editar";
                    btnEdit.appendChild(ref);
                    td7.appendChild(btnEdit);
                    row.appendChild(td7);


                    tableBody.appendChild(row);
               }
          });

          if (tableBody.innerHTML === "") {
               let row = document.createElement('tr');
               row.textContent = "No hay resultados disponibles";
               tableBody.appendChild(row);
          }
          else {
               bigImage();
               edit();
          }
     }
     else {
          showAll();
     }
}

showAll();

function edit() {
     const picsOption = document.querySelectorAll('.pics');
     const closeBtn = document.getElementById('close');
     const popupWindow = document.querySelector('.popup-window');
     const details = document.querySelector('.details-popup');

     picsOption.forEach((option) => {
          const editBtn = option.querySelector('.edit-btn');

          const orgImage = option.querySelector('.original-img');
          const orgTitle = option.querySelector('.pic-title');
          const orgArtist = option.querySelector('.pic-artist');
          const orgYear = option.querySelector('.pic-year');
          const orgGenre = option.querySelector('.pic-genre');

          editBtn.addEventListener('click', () => {
               details.innerHTML = "";

               const newImage = createImage(orgImage.src);
               details.appendChild(newImage);

               const newTitle = document.createElement('input');
               newTitle.value = orgTitle.textContent;
               newTitle.classList.add('title-input');
               newTitle.classList.add('input');
               details.appendChild(newTitle);

               const newArtist = document.createElement('input');
               newArtist.value = orgArtist.textContent;
               newArtist.classList.add('artist-input');
               newArtist.classList.add('input');
               details.appendChild(newArtist);

               const newYear = document.createElement('input');
               newYear.value = orgYear.textContent;
               newYear.classList.add('year-input');
               newYear.classList.add('input');
               details.appendChild(newYear);

               const newGenre = document.createElement('input');
               newGenre.value = orgGenre.textContent;
               newGenre.classList.add('genre-input');
               newGenre.classList.add('input');
               details.appendChild(newGenre);

               popupWindow.classList.remove('hidden');
          });

          closeBtn.addEventListener('click', () => {
               popupWindow.classList.add('hidden');
          });
     });
}