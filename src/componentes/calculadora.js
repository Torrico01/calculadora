import React from 'react'
import CalculatorTitle from './titulo-calculadora.js';
import OutputScreen from '../componentes/display-saida.js';
import Button from '../componentes/botoes.js';

const memInitState={
    memory:[],
    memoryDisplay:[]
}

const initialState={
    displayValue:'0' ,
    clearDisplay:false,
    operadores: '',
    resultado: ''
}

export default class Calculator extends React.Component{

    constructor() {
    super();
    this.state={...initialState,
    ...memInitState}
    this.handleClick = this.handleClick.bind(this);
    this.clearMemory = this.clearMemory.bind(this);
    this.recoverValue = this.recoverValue.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
    }


    render() {
        
      const {memoryDisplay, save}= this.state;
      return (
        <div className="total">
          <div className="frame">
          <CalculatorTitle value="Calculadora com Memória"/>
          <div class="mainCalc" id="right-ct">
          <OutputScreen resultado = {this.state.resultado} operadores = {this.state.operadores}/>
          <div className="button-row1">
            <button className="button" onClick={() => this.clearMemory()}>MC</button>
                
            <button className="button" onClick={() => {
            if(this.state.memoryDisplay==0);
            else {
              this.state.operadores += this.state.memory[0];
              this.state.resultado = ''
              this.setState({operadores: this.state.operadores, resultado: this.state.resultado });
            }
            }}>MR</button>

            <button className="button" onClick={() => {
            let memoryDisplay = [...this.state.memoryDisplay];
            let memory = [...this.state.memory];
            var ans = '';
            if (memoryDisplay==0);
            if (this.state.operadores === '' && this.state.resultado==='');
            else {
              if (this.state.operadores === '') {
                ans = eval(memoryDisplay[0]+"+"+this.state.resultado);
              }
              else {
                ans = eval(memoryDisplay[0]+"+"+this.state.operadores);
              }
              memoryDisplay[0] = ans;
              memory = memoryDisplay;
              this.setState({memory,memoryDisplay});
            }
            }}>M+</button>

            <button className="button" onClick={() => {
            let memoryDisplay = [...this.state.memoryDisplay];
            let memory = [...this.state.memory];
            if (this.state.operadores === '' && this.state.resultado === '');
            else {
              if (this.state.operadores === '')
                  memoryDisplay = [this.state.resultado].concat(memory);
              else memoryDisplay = [this.state.operadores].concat(memory);
                memory = memoryDisplay;
                this.setState({memory,memoryDisplay});
                this.setState({memory,memoryDisplay});
              }
            }}>MS</button>

          </div>
          <div className="button-row2">
                  <Button label='+' handleClick = {this.handleClick}/>
                  <Button label='-' handleClick = {this.handleClick}/>
                  <Button label='*' handleClick = {this.handleClick}/>
                  <Button label='/' handleClick = {this.handleClick}/>
          </div>
          <div className="button-row3">
                  <Button label='7' handleClick = {this.handleClick}/>
                  <Button label='8' handleClick = {this.handleClick}/>
                  <Button label='9' handleClick = {this.handleClick}/>
                  <Button label='=' handleClick = {this.handleClick}/>
          </div>
          <div className="button-row4">
                  <Button label='4' handleClick = {this.handleClick}/>
                  <Button label='5' handleClick = {this.handleClick}/>
                  <Button label='6' handleClick = {this.handleClick}/>
                  <Button label='=' handleClick = {this.handleClick}/>
          </div>
          <div className="button-row5">
                  <Button label='1' handleClick = {this.handleClick}/>
                  <Button label='2' handleClick = {this.handleClick}/>
                  <Button label='3' handleClick = {this.handleClick}/>
                  <Button label='=' handleClick = {this.handleClick}/>
          </div>
          <div className="button-row6">
                  <Button label='0' handleClick = {this.handleClick}/>
                  <Button label='.' handleClick = {this.handleClick}/>
                  <Button label='Del' handleClick = {this.handleClick}/>
                  <Button label='AC' handleClick = {this.handleClick}/>
          </div>
          </div>
          </div>

          <div class='memory' id="left-ct">
                  <h1>Memória</h1>
          
              {memoryDisplay.map(value => (
                  <div className="memory-row">
                      <button
                          className='button-m'
                          onClick={()=>this.deleteValue(value)}
                      >MC</button>

                      <button
                          className='button-m'
                          onClick={()=>this.recoverValue(value)}
                      >MR</button>
                      {value}
                  </div>
              ))}
          </div>
        </div>    
      )
  }

    clearMemory(){
        this.setState({...memInitState});
    }
    
    handleClick(event){
    const valor = event.target.value;

    switch (valor) {
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
                else {
                    this.setState({ resultado: ans , operadores: ''});

                }
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
      this.setState({ operadores: this.state.operadores += valor, resultado: ''});
      break;
      }
    }
    }

    recoverValue(value) {
        this.state.operadores += value;
        this.state.resultado = ''
        this.setState({operadores: this.state.operadores, resultado: this.state.resultado });
    }

    deleteValue(value) {
        let memoryDisplay=this.state.memoryDisplay;
        let memory=this.state.memory;
        const updatedList = memoryDisplay.filter(item => item != value);
        memory = memoryDisplay;
        this.setState({memoryDisplay: updatedList, memory: updatedList});        
    }

}
