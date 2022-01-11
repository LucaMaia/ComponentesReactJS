import React from 'react';
import { ModalStyle } from './style';


function Modal (props) {

  return(

    <ModalStyle>  
        <ModalItem/>
    </ModalStyle>
  );
}

function ModalItem (props) {

    return(
<div class="br-modal">
  <div class="container-fluid p-1 p-sm-4">
    <div class="br-modal-body">
      <p> Modal de alerta sem título Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div class="br-modal-footer justify-content-end">
      <button class="br-button secondary small m-2" type="button">
          Ação 1
      </button>
      <button class="br-button primary small m-2" type="button">
          Ação 2
      </button>
    </div>
  </div>
</div>
  
    );
  }

  export default Modal;