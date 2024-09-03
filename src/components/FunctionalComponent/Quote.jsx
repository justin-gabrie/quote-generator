import { useState } from 'react';
import QuoteGenerator from './QuoteGenerator';
import Show from '../../assets/show.png';
import Hide from '../../assets/hide.png';


export default function Quote(){
    const [showQuote, setShowQuote] = useState(true)

    const handleToggleQuote = () => {
        setShowQuote(prevState => (!prevState));
    }

    return (
            <div className='container'>
                <img src={showQuote ? Show : Hide} alt={showQuote ? 'Show' : 'Hide'} onClick={handleToggleQuote}/>
                {
                    showQuote ? (
                    <QuoteGenerator />
                    ) : (
                        <p>The quote generator is currently hidden. Click the eye button</p>
                    )
                }
            </div>
        )
    }