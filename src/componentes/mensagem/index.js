import React from 'react';

function Mensagem (props) {
 
  return(
     
  );
}

function ComIcone(props) {
    return(        
        <div class="col-sm-10 col-lg-7 mb-3">
        <div class="br-input input-inline">
            <div class="input-label">
            <label class="text-nowrap" for="lateral-icon">Com ícone</label>
            </div>
            <div class="input-content">
            <div class="input-group">
                <div class="input-icon">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                </div>
                <input id="lateral-icon" type="text" placeholder="Placeholder"/>
            </div>
            </div>
        </div>
        </div>
    );
  }
  
  function ComBotao(props) {
      return(    
        <div class="col-sm-10 col-lg-7 mb-3">
        <div class="br-input input-inline input-button">
            <div class="input-label">
            <label class="text-nowrap" for="input-button">Com botão</label>
            </div>
            <div class="input-content">
            <input id="input-button" type="text" placeholder="Placeholder"/>
            <button class="br-button" type="button" aria-label="Botão de ação">
                <i class="fas fa-heart" aria-hidden="true"></i>
            </button>
            </div>
        </div>
        </div>
      );
  }
  
  export default Mensagem;
