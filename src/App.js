// CSS
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
// COMPONENTES
import Accordion from './componentes/accordion';
import Avatar from './componentes/avatar';
import Breadcrumb from './componentes/breadcrumb';
import Button from './componentes/button';
import Card from './componentes/card';
import Checkbox from './componentes/checkbox';
import DateTimePicker from './componentes/datetimepicker';
import Divider from './componentes/divider';
import Footer from './componentes/footer';
import Header from './componentes/header';
import Input from './componentes/input';
import Item from './componentes/Item';
import Message from './componentes/message';
import Menu from './componentes/menu';
import Loading from './componentes/loading';
import MagicButton from './componentes/magic button';
import Select from './componentes/select';
import Notification from './componentes/notification';
import Pagination from './componentes/Pagination';
import Wizard from './componentes/wizard';
import Upload from './componentes/upload';
import PopOver from './componentes/popover';
import Tag from './componentes/tag';
import Modal from './componentes/modal';

const HomeImg = <FontAwesomeIcon icon={faHome} />
const Search = <FontAwesomeIcon icon={faSearch } />

// Accordion
const accordiondData = [
  {
    titulo: 'O que é esse serviço?',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    titulo: 'Quem pode utilizar esse serviço?',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    titulo: 'Etapas para realização desse serviço',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    titulo: 'Outras informações sobre esse serviço',
    descricao: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];


// Breadcrumb
const breadcrumbData = [
  {
    titulo: 'Home',
    ico: HomeImg,
    active: false
  },
  {
    titulo: 'Página 2',
    link: '#',
    active: false
  },
  {
    titulo: 'Página 3',
    link: '#'
  },
  {
    titulo: 'Página Atual',
    link: '#',
    active: true
  }
];


// Checkboxes
const checkboxHorizontal = [
  {
    id: "input1",
    inline: true,
    label: "Label do Input 1"
  },
  {
    id: "input2",
    inline: true,
    label: "Label do Input 2",
    checked: true
  },
  {
    id: "input3",
    inline: true,
    label: "Label do Input 3"
  }
];

const checkboxCompleto = [
  {
    id: "input4",
    label: "Label do Input 4"
  },
  {
    id: "input5",
    label: "Label do Input 5",
    checked: true
  },
  {
    id: "input6",
    label: "Label do Input 6"
  }
];

const chekcboxStates = [
  {
    id: "input7",
    label: "Checado",
    checked: true
  },
  {
    id: "input8",
    label: "Desativado",
    disabled: true
  },
  {
    id: "input9",
    label: "Inválido",
    invalido: true
  },
  {
    id: "input10",
    label: "Válido",
    valido: true
  }
];

const  WizardData = [
    
    {
      titulo: 'Dados Pessoais',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      titulo: 'Validar Dados',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      active: true
    },
    {
      titulo: 'Habilitar Cadastro',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      active: true
    },
    {
      titulo: 'Cadastrar Senha',
      descricao: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      active: true
    },
    {
        titulo: 'Finalizar',
        descricao: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        disabled: true
      }
  ];


function App() {
  return (   
<div className="App">
      <div style={{ width: "80%", margin: "0px auto", textAlign: "center" }} >
        <h2>Accordion</h2>
        <Accordion
          data={accordiondData}
          negative={true}
        />
      </div>

      <div style={{ width: "80%", margin: "0px auto", textAlign: "center" }} >
        <h2>Avatar</h2>

        <div>
          <h5> Mini</h5>
          <Avatar
            imagem="https://picsum.photos/id/823/400"
            nome="Keila"
          />

          <Avatar
            imagem=""
          />
        </div>

        <div>
          <h5>tipoAvatar="foto"</h5>

          <Avatar
            imagem="https://picsum.photos/id/823/400"
            nome="Vanessa"
            tipoAvatar="foto"
          />

          <Avatar
            imagem=""
            tipoAvatar="foto"
          />
        </div>

        <div>
          <h5>tipoAvatar="chat"</h5>

          <Avatar
            imagem="https://picsum.photos/id/823/400"
            tipoAvatar="chat"
            nome="Maria Amorim"
            descricao="UX Designer"
          />
          <Avatar
            tipoAvatar="chat"
            nome="Wisley Couto"
            descricao="Arquiteto de SW"
          />
        </div>

        <div>
          <h5>tipoAvatar="sigla"</h5>
          <Avatar
            imagem="https://picsum.photos/id/823/400"
            tipoAvatar="sigla"
            nome="JCF"
            descricao="Jose Carlos Fernandes"
          />
        </div>

        <div>
          <h5>tipoAvatar="card"</h5>
          <Avatar
            imagem="https://picsum.photos/id/823/400"
            tipoAvatar="card"
            nome="Maria Amorim"
            descricao="UX Designer"
          />
        </div>
      </div>

      <div style={{ width: "80%", margin: "0px auto", textAlign: "center" }} >
        <h2>Breadcrumb</h2>
        <Breadcrumb
          data={breadcrumbData}
        />
      </div>

      <div style={{ width: "80%", margin: "0px auto", textAlign: "center" }} >
        <h2>Button</h2>
        <div>
          <h5>Default</h5>

          <Button
            backgroundDiv={false}
            background=""
            ativo={false}
            inverted={false}
            loading={false}
            titulo="Botão"
            tipoBlock={false}
            disabled={false}
          />

          <Button
            backgroundDiv={false}
            background=""
            ativo={false}
            inverted={false}
            loading={false}
            titulo=""
            ico={HomeImg}
            tipoBlock={false}
            disabled={false}
          />

          <Button
            backgroundDiv={false}
            background=""
            ativo={false}
            inverted={false}
            loading={false}
            titulo="Botão + Ico"
            ico={HomeImg}
            tipoBlock={false}
            disabled={false}
          />
        </div>

        <div>
          <h5>background="primary"</h5>
          <Button
            backgroundDiv={false}
            background="primary"
            ativo={false}
            inverted={false}
            loading={false}
            titulo="Botão"
            tipoBlock={false}
            disabled={false}
          />

          <h5>background="primary" && inverted="true"</h5>
          <Button
            backgroundDiv={false}
            background="primary"
            ativo={false}
            inverted={true}
            loading={false}
            titulo="Botão"
            tipoBlock={false}
            disabled={false}
          />

          <h5>background="secondary"</h5>
          <Button
            backgroundDiv={false}
            background="secondary"
            ativo={false}
            inverted={false}
            loading={false}
            titulo="Botão"
            tipoBlock={false}
            disabled={false}
          />

          <h5>background="secondary" && inverted="true"</h5>
          <Button
            backgroundDiv={false}
            background="secondary"
            ativo={false}
            inverted={true}
            loading={false}
            titulo="Botão"
            tipoBlock={false}
            disabled={false}
          />

          <h5>disabled="true"</h5>
          <Button
            backgroundDiv={false}
            background=""
            ativo={false}
            inverted={false}
            loading={false}
            titulo="Disabled"
            tipoBlock={false}
            disabled={true}
          />

          <h5> background="primary" && disabled="true"</h5>
          <Button
            backgroundDiv={false}
            background="primary"
            ativo={false}
            inverted={false}
            loading={false}
            titulo="Disabled"
            tipoBlock={false}
            disabled={true}
          />
        </div>

        <div>
          <h5>backgroundDiv="true"</h5>
          <Button
            backgroundDiv={true}
            background=""
            ativo={false}
            inverted={false}
            loading={false}
            titulo="Botão"
            tipoBlock={false}
            disabled={false}
          />

          <h5>backgroundDiv="true" && inverted="true"</h5>
          <Button
            backgroundDiv={true}
            background=""
            ativo={false}
            inverted={true}
            loading={false}
            titulo="Botão"
            tipoBlock={false}
            disabled={false}
          />

          <h5>backgroundDiv="true" && inverted="true"  && background="primary"</h5>
          <Button
            backgroundDiv={true}
            background="primary"
            ativo={false}
            inverted={true}
            loading={false}
            ico={HomeImg}
            tipoBlock={false}
            disabled={false}
          />

          <h5>backgroundDiv="true" && inverted="true"  && background="primary"</h5>
          <Button
            backgroundDiv={true}
            background="primary"
            ativo={false}
            inverted={true}
            loading={false}
            ico={HomeImg}
            titulo="Botão"
            tipoBlock={false}
            disabled={false}
          />
        </div>

        <div>
          <h5>ativo="true"</h5>
          <Button
            backgroundDiv={false}
            background=""
            ativo={true}
            inverted={false}
            loading={false}
            titulo="Botão"
            tipoBlock={false}
            disabled={false}
          />
        </div>


        <div>
          <h5>loading="true"</h5>
          <Button
            backgroundDiv={false}
            background=""
            ativo={false}
            inverted={false}
            loading={true}
            tipoBlock={false}
            disabled={false}
          />


          <h5>loading="true" && background="primary"</h5>
          <Button
            backgroundDiv={false}
            background="primary"
            ativo={false}
            inverted={false}
            loading={true}
            tipoBlock={false}
            disabled={false}
          />


          <h5>loading="true" && background="secondary"</h5>
          <Button
            backgroundDiv={false}
            background="secondary"
            ativo={false}
            inverted={false}
            loading={true}
            tipoBlock={false}
            disabled={false}
          />


          <h5>loading="true" && disabled="true"</h5>
          <Button
            backgroundDiv={false}
            ativo={false}
            inverted={false}
            loading={true}
            tipoBlock={true}
            disabled={true}
          />
        </div>


        <div>
          <h5>background="secondary" && tipoBlock="true"</h5>
          <Button
            backgroundDiv={false}
            background="secondary"
            titulo="Block"
            ativo={false}
            inverted={false}
            loading={false}
            tipoBlock={true}
            disabled={false}
          />
        </div>
      </div>


      <div style={{ width: "80%", margin: "0px auto", textAlign: "center" }} >
        <h2>Card</h2>

        <div>
          <h5>Default</h5>
          <Card
            disabled={false}
            header={{
              imagem: "https://picsum.photos/id/823/400",
              titulo: "Maria Amorim", descricao: "UX Designer"
            }}
            content={{
              imagem: "https://picsum.photos/id/823/400",
              imagemDescricao: "Fotógrafa",
              descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda."
            }}
            footer={{
              botaoTitulo: "Button",
              botaoSocial: true
            }}
          />
        </div>


        <div>
          <h5> disabled=true</h5>
          <Card
            disabled={true}
            header={{
              imagem: "https://picsum.photos/id/823/400",
              titulo: "Maria Amorim", descricao: "UX Designer"
            }}
            content={{
              imagem: "https://picsum.photos/id/823/400",
              imagemDescricao: "Fotógrafa",
              descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore perferendis nam porro atque ex at, numquam non optio ab eveniet error vel ad exercitationem, earum et fugiat recusandae harum? Assumenda."
            }}
            footer={{
              botaoTitulo: "Button",
              botaoSocial: true
            }}
          />
        </div>

        <div>
          <h5>Somente Conteúdo</h5>
          <Card
            content={{
              imagem: "https://picsum.photos/id/823/400",
              imagemDescricao: "Fotógrafa"
            }}
          />
        </div>
      </div>

      <div style={{ width: "80%", margin: "0px auto", textAlign: "center" }} >
        <h2>Checkbox</h2>
        <div>
          <h5> Listagem horizontal / inline=true</h5>
          <Checkbox
            data={checkboxHorizontal}
          />
        </div>


        <div>
          <h5> Exemplo Completo</h5>
          <Checkbox
            data={checkboxCompleto}
            instrucoes={{
              titulo: "Rótulo", descricao: "Informações adicionais"
            }}
            alerta="Texto da Mensagem" />
        </div>

        <div>
          <h5> Estados </h5>
          <Checkbox
            data={chekcboxStates}
          />
        </div>
      </div>

      <div style={{ width: "80%", margin: "0px auto", textAlign: "center" }} >
            <h2>DateTimePicker</h2>

            <div>
            <h5> Timepicker </h5>

            <DateTimePicker
                data={new Date()}
            />
            </div>
      </div>


      <div style={{ width: "80%", margin: "0px auto", textAlign: "center" }} >
        <h2>Divider</h2>

        <div>
          <h6>Horizontal</h6>
            <Divider  />

          <h6>Horizontal Tracejado</h6>
            <Divider
                tracejado={true}
            />


    <h6>Horizontal Escuro</h6>
          <div class="bg-secondary-07 text-secondary-01 p-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Divider
                    tracejado={false}
                    />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
  

    <h6>Vertical</h6>
        <div className="d-flex" style={{ textAlign: "center", width: "100px",  margin: "0 auto" }}>
            <p>teste</p>
                <Divider
                direcao="vertical"
                />
            <p>teste</p>
        </div>


    <h6>Vertical Tracejado</h6>
          <div className="d-flex" style={{ textAlign: "center", width: "100px", margin: "0 auto" }}>
                <p>teste</p>
                <Divider
                tracejado={true}
                direcao="vertical"
                />
                <p>teste</p>
          </div>


    <h6>Vertical Escuro </h6>
          <div class="bg-secondary-07 text-secondary-01 ">
                <div class="d-flex">
                    <p>Voluptate ipsa iure placeat praesentium, sint deleniti consectetur quisquam neque veniam possimus, hic commodi?  <br/> Voluptate ipsa iure placeat praesentium, sint deleniti consectetur quisquam neque veniam possimus, hic commodi?</p>
                   
                        <Divider direcao="vertical"/>
                    <p>A adipisci mollitia blanditiis itaque velit laudantium voluptatum molestiae quasi.</p>
                </div>
            </div>
        </div>
      </div>


      <br></br>

      <div style={{ width: "90%", margin: "0px auto", textAlign: "center" }} >
        <div>
          <h2> Footer negative="true" </h2>
          <Footer 
                 negative={true}>
          </Footer>
        </div>
      </div>

      <div style={{ width: "90%", margin: "0px auto", textAlign: "center" }} >
        <div>
          <h2> Footer negative="false" </h2>
          <Footer 
                 negative={false}>
          </Footer>
        </div>
      </div>


      <div style={{ width: "90%", margin: "0px auto", textAlign: "center" }} >
        <div>
          <h2> Header type="large"</h2>  
          <Header type="large" sistema="Emendas parlamentares">

          </Header>
        </div>
      </div>

      <div style={{ width: "90%", margin: "0px auto", textAlign: "center" }} >
        <div>
          <h2> Header type="medium"</h2>  
          <Header type="medium" sistema="Emendas parlamentares">

          </Header>
        </div>
      </div>

      <div style={{ width: "90%", margin: "0px auto", textAlign: "center" }} >
        <div>
          <h2> Header type="small"</h2>  
          <Header type="small" sistema="Emendas parlamentares">

          </Header>
        </div>
      </div>

      <div style={{ width: "80%", margin: "0px auto", textAlign: "center" }} >
        <div >
          <h2 style={{ width: "80%", margin: "10px auto", textAlign: "center" }} > Input </h2>
         
         <h3 style={{  margin: "10px auto", textAlign: "center" }} >Input padrão</h3>
            <Input 
                id="wallison"
                placeholder="digite"
                label="João"
            />

        <h3 style={{ margin: "10px auto", textAlign: "center" }} >Densidade small</h3>
            <Input  
                id="wallison"
                placeholder="digite"
                density="small"
                label="João"
            />

        <h3 style={{ margin: "10px auto", textAlign: "center" }} >Densidade large</h3>
            <Input  
                id="wallison"
                placeholder="digite"
                density="large"
                label="João"
            />

        <h3 style={{ margin: "10px auto", textAlign: "center" }} >Input com ícones</h3>
            <Input  
                id="wallison"
                ico={HomeImg}
                type="icone"
                placeholder="digite"
                label="João"
            />

        <h3 style={{  margin: "10px auto", textAlign: "center" }} >Input com botões</h3>
            <Input  
                id="wallison"
                type="search"
                label="João"
                placeholder="digite"
                ico={HomeImg}
                button={true}
            />

           
           <h3 style={{ margin: "20px auto", textAlign: "center" }} >Input com rótulo lateral</h3>
            <Input  
                id="input-inline"
                label="João"
                type="icone"
                placeholder="digite"
                inputinline={true}
                ico={HomeImg}
                
            />

            <h3 style={{margin: "10px auto", textAlign: "center" }} >Input com validações e estados</h3>
                <div>
                    <Input  
                        id="wallison"
                        type="search"
                        placeholder="digite"
                        ico={Search}
                        validacao="danger"
                    />

                </div>
         
        </div>
      </div>


      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Message type="full" (default) </h2>
            <Message 
            type="full"
            ico={Search}
            tipoMensagem="danger"
            titulo="José"
            p="Sempre que me vê"
            />

        <h2> Message type="feedback" </h2>
            <Message 
            type="feedback"
            ico={Search}
            tipoMensagem="danger"
            titulo="José"
            p="Sempre que me vê"
            />
           
         
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Item type="radio"</h2>
           <Item 
           type="radio"
           label="Luquinha"
           />
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Item type="checkbox"</h2>
           <Item 
           type="checkbox"
           label="Luquinha"
           />
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Loading </h2>
         
           <Loading
           porcentagem="60"/>
           
         
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Loading  carga="medium"</h2>
         
           <Loading carga="medium"
/>
           
         
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> MagicButton button="large" </h2>
           <MagicButton 
           button="large"
           label="Luca"
           />
        </div>
      </div>


      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> MagicButton button="medium"</h2>
           <MagicButton 
           button="medium"
           label="Maia"
           />
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> MagicButton button="small"</h2>
           <MagicButton 
           button="small"
           label="Luca"
           />
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Pagination densi="small" </h2>
         
           <Pagination densi="small"/>
           
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Pagination densi="medium" </h2>
         
           <Pagination densi="medium"/>
           
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Pagination densi="large" </h2>
         
           <Pagination densi="large"/>
           
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Wizard type="horizontal" </h2>
         
           <Wizard type="horizontal" vertical={false} data={WizardData}/>
           
        </div>
      </div>

      <div style={{ width: "80%", margin: "60px auto",  textAlign: "center" }} >
        <div> 
          <h2> Wizard type="vertical" </h2>
         
           <Wizard type="vertical"  data={WizardData}/>
           
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Tag </h2>
         
           <Tag 
           ico={HomeImg}
           label="K4K4"
           tag="status danger large"
           />
           
        </div>
      </div>

      <div style={{ width: "80%", margin: "10px auto", textAlign: "center" }} >
        <div>
          <h2> Modal </h2>
         
           <Modal/>
           
        </div>
      </div>


</div>
  );
}

export default App;
