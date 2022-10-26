// const form = document.querySelector('#searchForm');
// form.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const config = { params: { q: searchTerm } }
//     const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//     makeImages(res.data)
//     form.elements.query.value = '';
// })

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  clearImage();
  console.log('submitted');

  console.dir(form);
  console.log(form.elements.query.value);
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  //   console.log(res.data);
  //   console.log(res.data[0].show.image);
  makeImage(res.data);
  form.elements.query.value = '';
});

const makeImage = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

const clearImage = () => {
  const images = document.querySelectorAll('img');
  console.log(images);
  for (let i = 0; i < images.length; i++) {
    img = images[i];
    console.log(img.parentNode);
    img.parentNode.removeChild(img);
  }
};
