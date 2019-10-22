import React, { Componente } from 'react'
import Borda from './Borda';

export default class Game extends Componente{
    constructor(props){
        super(props);
        this.state = {
            xIsNext : true,
            stepNumber : 0,
            history: [
            { squares: Array(9).fill(null) }
            ],
        }
    };
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0
        });
    };
    handleClick(j) {
        const history = this.state.history.slice(0, this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        const vitoria = calcularVitoria(squares);
        if(vitoria || squares[j]){
            return;
        }
        squares[j] = this.state.xIsNext?'X':'O';
        this.setState({
            history: history.concat({
                squares:squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    };
    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const vitoria = calcularVitoria(current.squares);
        const mover = history.map((step, move)=>{
            const desc = move? 'sua jogada' + move: 'Iniciar o jogo';
            return (
                <li key={move}>
                    <button onclick={()=>{this.jumpTo(move)}}>
                    {desc}
                    </button>
                </li>
            )
        });

        let state;
        if(vitoria){
            state = 'O vencedor foi ' + vitoria;
        }else{
            state = ' O perdedor foi ' + (this.state.xIsNext?'X':'O');
        };
        <div className="game">
            <div className="game-borda">
                <Borda onclick= {(j)=>this.handleClick(j)}
                squares={current.squares} />
            </div>

            <div className="game-info">
                <div> {state} </div>
                <ul> {mover} </ul>
            </div>
        </div>
    }
};   
function calcularVitoria(squares){
    const linha = [
        [0,1,2]
        [3,4,5]
        [6,7,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,4,8]
        [2,4,6]
    ]
    for(let j = 0; j <linha.length; j++){
        const [a,b,c] = linha[j];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
            return squares[a]
        }
    };
    return null; 
}
