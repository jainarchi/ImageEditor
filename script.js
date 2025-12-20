let allFilter = {
  brightness: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },

  contrast: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },

  saturation: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },

  hueRotation: {
    min: 0,
    max: 360,
    value: 0,
    unit: "deg",
  },

  blur: {
    min: 0,
    max: 20,
    value: 0,
    unit: "px",
  },

  grayscale: {
    min: 0,
    max: 100,
    value: 0,
    unit: "%",
  },

  sepia: {
    min: 0,
    max: 100,
    value: 0,
    unit: "%",
  },

  opacity: {
    min: 0,
    max: 100,
    value: 100,
    unit: "%",
  },

  invert: {
    min: 0,
    max: 100,
    value: 0,
    unit: "%",
  },
};

allPresets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  vintage: {
    brightness: 110,
    contrast: 90,
    saturation: 85,
    hueRotation: -10,
    blur: 1,
    grayscale: 10,
    sepia: 35,
    opacity: 100,
    invert: 0,
  },

  warm: {
    brightness: 105,
    contrast: 110,
    saturation: 120,
    hueRotation: 10,
    blur: 0,
    grayscale: 0,
    sepia: 15,
    opacity: 100,
    invert: 0,
  },

  cool: {
    brightness: 95,
    contrast: 105,
    saturation: 110,
    hueRotation: -15,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  blackWhite: {
    brightness: 100,
    contrast: 120,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  faded: {
    brightness: 110,
    contrast: 80,
    saturation: 70,
    hueRotation: 0,
    blur: 0,
    grayscale: 5,
    sepia: 10,
    opacity: 100,
    invert: 0,
  },

  dramatic: {
    brightness: 95,
    contrast: 140,
    saturation: 130,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  vivid: {
    brightness: 105,
    contrast: 125,
    saturation: 140,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  moody: {
    brightness: 90,
    contrast: 130,
    saturation: 80,
    hueRotation: -5,
    blur: 0,
    grayscale: 10,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  sunset: {
    brightness: 110,
    contrast: 115,
    saturation: 135,
    hueRotation: 18,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0,
  },

  soft: {
    brightness: 108,
    contrast: 85,
    saturation: 95,
    hueRotation: 0,
    blur: 1,
    grayscale: 0,
    sepia: 5,
    opacity: 100,
    invert: 0,
  },

  cinematic: {
    brightness: 95,
    contrast: 145,
    saturation: 90,
    hueRotation: -8,
    blur: 0,
    grayscale: 5,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  hdr: {
    brightness: 102,
    contrast: 155,
    saturation: 135,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  instagram: {
    brightness: 108,
    contrast: 120,
    saturation: 125,
    hueRotation: 5,
    blur: 0,
    grayscale: 0,
    sepia: 8,
    opacity: 100,
    invert: 0,
  },

  matte: {
    brightness: 105,
    contrast: 75,
    saturation: 80,
    hueRotation: 0,
    blur: 0,
    grayscale: 5,
    sepia: 10,
    opacity: 100,
    invert: 0,
  },

  icy: {
    brightness: 100,
    contrast: 110,
    saturation: 90,
    hueRotation: -20,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

  dramaticBW: {
    brightness: 100,
    contrast: 160,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0,
  },

};



let fileInp = document.querySelector("#image-input");
let filtersCont = document.querySelector(".filters");
let presetsCont = document.querySelector('.presets')
let imgCanvas = document.querySelector("#imgCanvas");
let canvasCtx = imgCanvas.getContext("2d");
let resetButtons = document.querySelectorAll(".reset-btn");
let downloadButtons = document.querySelectorAll('.download-btn')
let file = null;
let image = null;



fileInp.addEventListener("change", (e) => {
  file = e.target.files[0];
  document.querySelector(".placeholder").style.display = "none";
  document.querySelector("canvas").style.display = "block";
  resetButtons[0].click();


  let img = new Image();
  img.src = URL.createObjectURL(file);

  image = img;

  img.onload = () => {
    imgCanvas.width = img.width;
    imgCanvas.height = img.height;
    canvasCtx.drawImage(img, 0, 0);
  };
});



function renderFilters(name, min, max, value) {
  let div = document.createElement("div");
  div.classList.add("filter");

  let p = document.createElement("p");
  p.textContent = name;

  let inp = document.createElement("input");
  inp.type = "range";
  inp.min = min;
  inp.max = max;
  inp.value = value;
  inp.id = name;

  inp.addEventListener("input", (e) => {
    allFilter[name].value = e.target.value;
    applyAllFilters();
  });

  div.appendChild(p);
  div.appendChild(inp);
  filtersCont.append(div);
}

function passAllFilters() {
  Object.keys(allFilter).forEach((key) => {
    renderFilters(
      key,
      allFilter[key].min,
      allFilter[key].max,
      allFilter[key].value
    );
  });
}
passAllFilters()





Object.keys(allPresets).forEach((presetName) => {

  let btn = document.createElement('button')
  btn.classList.add('btn');
  btn.innerText = presetName;
  presetsCont.appendChild(btn);


  btn.addEventListener('click', () => {
    Object.keys(allPresets[presetName]).forEach((key) => {
      allFilter[key].value = allPresets[presetName][key];
    })

    applyAllFilters()

    filtersCont.innerHTML = "";
    passAllFilters()

  })


})




function applyAllFilters() {

  if (!image) return;

  canvasCtx.clearRect(0, 0, imgCanvas.width, imgCanvas.height);
  canvasCtx.filter = `
  brightness(${allFilter.brightness.value}${allFilter.brightness.unit})
  contrast(${allFilter.contrast.value}${allFilter.contrast.unit})
  saturate(${allFilter.saturation.value}${allFilter.saturation.unit})
  opacity(${allFilter.opacity.value}${allFilter.opacity.unit})
  hue-rotate(${allFilter.hueRotation.value}${allFilter.hueRotation.unit})
  blur(${allFilter.blur.value}${allFilter.blur.unit})
  grayscale(${allFilter.grayscale.value}${allFilter.grayscale.unit})
  sepia(${allFilter.sepia.value}${allFilter.sepia.unit})
  invert(${allFilter.invert.value}${allFilter.invert.unit})
  `.trim();

  canvasCtx.drawImage(image, 0, 0);
}





resetButtons.forEach((resetBtn) => {

  resetBtn.addEventListener("click", () => {
    if (!image) return;

    console.log('reset btn clicked');

    filtersCont.innerHTML = "";
    allFilter = {
      brightness: {
        min: 0,
        max: 200,
        value: 100,
        unit: "%",
      },

      contrast: {
        min: 0,
        max: 200,
        value: 100,
        unit: "%",
      },

      saturation: {
        min: 0,
        max: 200,
        value: 100,
        unit: "%",
      },

      hueRotation: {
        min: 0,
        max: 360,
        value: 0,
        unit: "deg",
      },

      blur: {
        min: 0,
        max: 20,
        value: 0,
        unit: "px",
      },

      grayscale: {
        min: 0,
        max: 100,
        value: 0,
        unit: "%",
      },

      sepia: {
        min: 0,
        max: 100,
        value: 0,
        unit: "%",
      },

      opacity: {
        min: 0,
        max: 100,
        value: 100,
        unit: "%",
      },

      invert: {
        min: 0,
        max: 100,
        value: 0,
        unit: "%",
      },
    };
    passAllFilters()

    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      image = img;

      img.onload = () => {
        applyAllFilters();
      }
    }

  });

})





downloadButtons.forEach((downloadBtn) => {

  downloadBtn.addEventListener('click', () => {

    if (!image) return;

    let link = document.createElement('a');
    link.download = "edited_image.png"
    link.href = imgCanvas.toDataURL();
    link.click();
  })


})













// ** canvasCtx.filter = blur()
// canvasCtx.filter = brightness()     override, not work simultaneously
// it works -> .filter = blur() brightness()
