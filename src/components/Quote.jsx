import React from 'react';
import QuoteGenerator from './QuoteGenerator';
import Show from '../assets/show.png';
import Hide from '../assets/hide.png';


class Quote extends React.Component{

    constructor() {
        super();
        this.state = {
            showQuote: true,
        }
    }

    handleToggleQuote = () => {
        this.setState(prevState => ({showQuote: !prevState.showQuote}));
    }
    render() {
        return (
            <div className='container'>
                <img src={this.state.showQuote ? Show : Hide} alt={this.state.showQuote ? 'Show' : 'Hide'} onClick={this.handleToggleQuote}/>
                {
                    this.state.showQuote ? (
                    <QuoteGenerator />
                    ) : (
                        <p>The quote generator is currently hidden. Click the eye button</p>
                    )
                }
            </div>
        )
    }
}

export default Quote