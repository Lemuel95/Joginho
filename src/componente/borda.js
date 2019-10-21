import React, { Componente } from 'react';
import Square from './Square';


export default class Borda extends Componente{
    renderSquare(i){
        return <Square value={this.props.saqures[i]}
        onclick={()=>this.props.onclick(i)}
        />

    }
    render(){
        return(
            <div>
                <div class="borda-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div class="borda-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div class="borda-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
        )
    }

}