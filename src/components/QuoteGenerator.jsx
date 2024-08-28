import React from 'react';
import Loading from '../assets/loading.gif';

class QuoteGenerator extends React.Component {

    constructor() {
        super();
        this.state = {
            quote: '',
            author: '',
        }
    }

    fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random?minLength=70&maxLength=80');
            const data = await response.json();
            this.setState({
                quote: data.content,
                author: data.author,
            })
        } catch (error) {
            console.error('Error in fetching: ', error)
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.fetchQuote();
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <div className='quote-container'>
                {this.state.quote ? (
                    <div>
                        <p className='quote'>&ldquo;{this.state.quote}&rdquo;</p>
                        <p className='author'>- {this.state.author}</p>
                        <div className='outer-border'><button onClick={this.fetchQuote}>Get New Quote</button></div>
                        
                    </div>
                ) : (
                    <img src={Loading} alt='loading' />
                )}
            </div>
        )
    }
}

export default QuoteGenerator

