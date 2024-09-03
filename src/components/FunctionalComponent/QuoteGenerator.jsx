import { useEffect, useState } from 'react';
import Loading from '../../assets/loading.gif';

export default function QuoteGenerator() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random?minLength=70&maxLength=80');
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.error('Error in fetching: ', error)
        }
    }

    useEffect(() => {
        fetchQuote();
    }, [])

    return (
        <div className='quote-container'>
            {quote ? (
                <div>
                    <p className='quote'>&ldquo;{quote}&rdquo;</p>
                    <p className='author'>- {author}</p>
                    <div className='outer-border'><button onClick={fetchQuote}>Get New Quote</button></div>
                </div>
            ) : (
                <img src={Loading} alt='loading' />
            )}
        </div>
    )
}


