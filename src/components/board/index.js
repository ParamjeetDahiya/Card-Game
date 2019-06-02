import React, { Component } from 'react';
import './index.css'
import Card from '../card';
class Board extends Component {

    state = {
        start: true,
        currentCard: '',
        defuse:false
    }
    showStart=()=>{
        return (
            <div onClick={()=>this.onStart()} className="start">
                Start
            </div>
        )
    }
    onStart = () => {
        this.props.shuffle();
        this.setState({start:false})
    }
    showCards = () => {
        const { cards } = this.props;
        return cards.map((c, key) => {
            return (
                <Card key={key} name={c} logic={this.logic}/>
            )
        })
    }
    logic = (currentCard) => {
        
        console.log(currentCard);
        if (currentCard === 'Cat') {
            this.props.remove()
        }
        if (currentCard === 'Defuse') {
            this.setState({ defuse: true })
            this.props.remove()
        }
        if (currentCard === 'Explode' && this.state.defuse) {
            this.props.remove();
            this.setState({defuse:false})
        }
        if (currentCard === 'Explode' && !this.state.defuse) {
            alert('you lose')
            this.setState({start:true})
        }
        if (currentCard === 'Shuffle') {
            this.props.shuffle()
        }

    }

    render() {
        return (
            <div className="board">
                {this.state.start ? this.showStart() : this.showCards()}
                <div className="win">You Win</div>
            </div>
        )
    }
}

export default Board;