import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCard,shuffleCards } from '../../actions';
import { bindActionCreators } from 'redux';
import './index.css'
import Card from '../card';
class Board extends Component {

    state = {
        start: true,
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
        this.props.shuffleCards();
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
        
        const { cards } = this.props;
        

        if (currentCard === 'Cat') {
            this.props.removeCard(cards)
            this.setState({defuse:false})
        }
        if (currentCard === 'Defuse') {
            this.setState({ defuse: true })
            this.props.removeCard(cards)
        }
        if (currentCard === 'Explode' && this.state.defuse) {
            this.props.removeCard(cards);
            this.setState({defuse:false})
        }
        if (currentCard === 'Explode' && !this.state.defuse) {
            alert('you lose')
            this.setState({start:true})
        }
        if (currentCard === 'Shuffle') {
            this.props.shuffleCards()
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

const mapStateToProps = (Card) => {
    
    return {
        cards: Card.Card.state.cards
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({removeCard,shuffleCards},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);