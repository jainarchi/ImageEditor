let allFilter = {
  brightness: {
    min: 0,
    max: 200,
    value: 100,
    unit: '%'
  },

  contrast: {
    min: 0,
    max: 200,
    value: 100,
    unit: '%'
  },

  exposure: {
    min: 0,
    max: 200,
    value: 100,
    unit: '%'
  },

  saturation: {
    min: 0,
    max: 200,
    value: 100,
    unit: '%'
  },

  hueRotation: {
    min: 0,
    max: 360,
    value: 0,
    unit: 'deg'
  },

  blur: {
    min: 0,
    max: 20,
    value: 0,
    unit: 'px'
  },

  grayscale: {
    min: 0,
    max: 100,
    value: 0,
    unit: '%'
  },

  sepia: {
    min: 0,
    max: 100,
    value: 0,
    unit: '%'
  },

  opacity: {
    min: 0,
    max: 100,
    value: 100,
    unit: '%'
  },

  invert: {
    min: 0,
    max: 100,
    value: 0,
    unit: '%'
  }
};

let fileInp = document.querySelector('#image-input')
let filters = document.querySelector('.filters')
let imgCanvas = document.querySelector('#imgCanvas')
let canvasCtx = imgCanvas.getContext("2d");
let file = null;


function renderFilters(name, min, max, val) {
  let div = document.createElement('div')
  div.classList.add('filter')


  let p = document.createElement('p');
  p.textContent = name;


  let inp = document.createElement('input')
  inp.type = 'range';
  inp.min = min
  inp.max = max;
  inp.value = val;


  div.appendChild(p);
  div.appendChild(inp);

  filters.append(div)
}


Object.keys(allFilter).forEach((key) => {

  renderFilters(key, allFilter[key].min, allFilter[key].max, allFilter[key].value)

})






fileInp.addEventListener('change', (e) => {

  let file = e.target.files[0];
  document.querySelector('.placeholder').style.display = 'none'
  document.querySelector('canvas').style.display = 'block'


  let img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    imgCanvas.width = img.width;
    imgCanvas.height = img.height;
    canvasCtx.drawImage(img, 0, 0);
  }



})

