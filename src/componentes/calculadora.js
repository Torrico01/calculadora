import React from 'react'; 
import CalculatorTitle from './titulo-calculadora.js'; 
import OutputScreen from './display-saida.js'; 
import Button from './botoes.js';

class Calculator extends React.Component {

    constructor() {
    super();
    this.state = {
      operadores: '',
      resultado: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  
      render()
      {
      return (
      <div className="frame">
      <CalculatorTitle value="Calculadora Básica"/>
      <div class="mainCalc">
      <OutputScreen resultado = {this.state.resultado} operadores = {this.state.operadores}/>
      <div className="button-row1">
        <Button label={'+'} handleClick = {this.handleClick}/>
        <Button label={'-'} handleClick = {this.handleClick}/>
        <Button label={"*"} handleClick = {this.handleClick}/>
        <Button label={'/'} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row2">
        <Button label={'7'} handleClick = {this.handleClick}/>
        <Button label={'8'} handleClick = {this.handleClick}/>
        <Button label={'9'} handleClick = {this.handleClick}/>
        <Button label={'='} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row3">
        <Button label={'4'} handleClick = {this.handleClick}/>
        <Button label={'5'} handleClick = {this.handleClick}/>
        <Button label={'6'} handleClick = {this.handleClick}/>
        <Button label={'='} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row4">
        <Button label={'1'} handleClick = {this.handleClick}/>
        <Button label={'2'} handleClick = {this.handleClick}/>
        <Button label={'3'} handleClick = {this.handleClick}/>
        <Button label={'='} handleClick = {this.handleClick}/>
      </div>
      <div className="button-row5">
        <Button label={'0'} handleClick = {this.handleClick}/>
        <Button label={'.'}  handleClick = {this.handleClick}/>
        <Button label={'Del'} handleClick = {this.handleClick}/>
        <Button label={'AC'} handleClick = {this.handleClick}/>
      </div>
      </div>
      </div>
      );
    }
  
    handleClick(event){
      const value = event.target.value;
  
      switch (value) {
        case '=': {
              if(this.state.operadores!=='')
              {
                  var ans='';
                try
                  {
                      ans = eval(this.state.operadores);
                  }
                  catch(err)
                  {
                      this.setState({resultado: "Erro"});
                  }
                  if(ans===undefined)
                      this.setState({resultado: "Erro"});
                  else
                      this.setState({ resultado: ans , operadores: ''});
                  break;
              }
        }
        case 'AC': {
          this.setState({ operadores: '', resultado: '' });
          break;
        }
        case 'Del': {
          var str = this.state.operadores;
            str = str.substr(0,str.length-1);
            this.setState({operadores: str});
            break;
        }
      default: {
        if(this.state.resultado!='') {
          this.setState({ operadores: this.state.resultado, resultado:''});
          this.state.operadores = this.state.resultado;
        }
        this.setState({ operadores: this.state.operadores += value, resultado: ''});
        break;
        }
      }
    }
  
  }
  
  export default Calculator; 
