import React, { Component } from 'react'
import { connect } from 'react-redux';
import { cards } from '../../actions';
import { bindActionCreators } from 'redux';
import Board from '../board';


class Dashboard extends Component {

    state = {
        cards:[]
    }
    
    cardtype = ['Cat','Defuse','Shuffle','Explode']
    shuffleMe = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            const num = Math.floor((Math.random() * 4) + 1);
            arr.push(this.cardtype[num-1])
        }
        this.setState({ cards: arr });
    }

    removeCard = () => {
        let arr = this.state.cards;
        arr.pop();
        this.setState({ cards: arr })
        console.log('removed');
        
    }

    render() {
        
        
        console.log(this.state.cards);
        
        return (
            <div>
                
                <Board cards={this.state.cards} shuffle={this.shuffleMe} remove={this.removeCard}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    
    
    return {
        cards: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({cards},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);