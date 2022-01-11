import React from 'react';
import { SelectStyle } from './style';

function Select (props) {
    let sec = props.sec || "";
    let ico = props.ico ;
  
  return(

    <SelectStyle>  
    <div class="br-select">
        <div class="br-input">
            <label for="select-simple">Label</label>
            <input id="select-simple" type="text" placeholder="Selecione o item"/>
            <button class="br-button" type="button" aria-label="Exibir lista" tabindex="-1" data-trigger="data-trigger">
                <i class="fas fa-angle-down" aria-hidden="true">{props.ico}</i>
            </button>
        </div>
        <div class="br-list" tabindex="0">
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb0" type="radio" name="estados-simples" value="rb0"/>
                <label for="rb0">Acre</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb1" type="radio" name="estados-simples" value="rb1"/>
                <label for="rb1">Alagoas</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb2" type="radio" name="estados-simples" value="rb2"/>
                <label for="rb2">Amapá</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb3" type="radio" name="estados-simples" value="rb3"/>
                <label for="rb3">Amazonas</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb4" type="radio" name="estados-simples" value="rb4"/>
                <label for="rb4">Bahia</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb5" type="radio" name="estados-simples" value="rb5"/>
                <label for="rb5">Ceará</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb6" type="radio" name="estados-simples" value="rb6"/>
                <label for="rb6">Distrito Federal</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb7" type="radio" name="estados-simples" value="rb7"/>
                <label for="rb7">Espírito Santo</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb8" type="radio" name="estados-simples" value="rb8"/>
                <label for="rb8">Goiás</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb9" type="radio" name="estados-simples" value="rb9"/>
                <label for="rb9">Maranhão</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb10" type="radio" name="estados-simples" value="rb10"/>
                <label for="rb10">Mato Grosso</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb11" type="radio" name="estados-simples" value="rb11"/>
                <label for="rb11">Mato Grosso do Sul</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb12" type="radio" name="estados-simples" value="rb12"/>
                <label for="rb12">Minas Gerais</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb13" type="radio" name="estados-simples" value="rb13"/>
                <label for="rb13">Pará</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb14" type="radio" name="estados-simples" value="rb14"/>
                <label for="rb14">Paraíba</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb15" type="radio" name="estados-simples" value="rb15"/>
                <label for="rb15">Paraná</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb16" type="radio" name="estados-simples" value="rb16"/>
                <label for="rb16">Pernambuco</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb17" type="radio" name="estados-simples" value="rb17"/>
                <label for="rb17">Piauí</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb18" type="radio" name="estados-simples" value="rb18"/>
                <label for="rb18">Rio de Janeiro</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb19" type="radio" name="estados-simples" value="rb19"/>
                <label for="rb19">Rio Grande do Norte</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb20" type="radio" name="estados-simples" value="rb20"/>
                <label for="rb20">Rio Grande do Sul</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb21" type="radio" name="estados-simples" value="rb21"/>
                <label for="rb21">Rondônia</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb22" type="radio" name="estados-simples" value="rb22"/>
                <label for="rb22">Santa Catarina</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb23" type="radio" name="estados-simples" value="rb23"/>
                <label for="rb23">São Paulo</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb24" type="radio" name="estados-simples" value="rb24"/>
                <label for="rb24">Sergipe</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb25" type="radio" name="estados-simples" value="rb25"/>
                <label for="rb25">Tocantins</label>
            </div>
            </div>
            <div class="br-item" tabindex="-1">
            <div class="br-radio">
                <input id="rb27" type="radio" name="estados-simples" value="rb27"/>
                <label for="rb27">Exterior</label>
            </div>
            </div>
        </div>
    </div><span class="feedback warning" role="alert"><i class="fas fa-exclamation-triangle" aria-hidden="true"></i>Texto auxiliar Função de previnir erros.</span>
    </SelectStyle>
  );
}

export default Select;