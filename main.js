import './style.css'
import { divApp, header, refreshGallery } from './public/src/header/Header';
import { inputWord } from './public/src/Input-Image/Input';
import { footer } from './public/src/Footer/Footer';
import { section, showGallery } from './public/src/Card/Card';

const initializeApp = async () => {
  // 1) Lleno .gallery con imágenes
  await showGallery();

  // Agrego header
  divApp.appendChild(header);
  refreshGallery();


  // Agrego section y footer
  divApp.appendChild(section);
  divApp.appendChild(footer);

  // Agrego divApp al Body
  document.body.appendChild(divApp);

  // ULT = FUNC inputWord para buscar (ultimo elemento del DOM)
  inputWord(section);
};

initializeApp();