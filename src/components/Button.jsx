import { useState } from 'react';

const Button = () => {
    const [buttonText, setButtonText] = useState('Click Me');
    
    return (
        <button
            className="bg-[#00A19B] text-[#edeeee] font-bold py-2 px-4 rounded-md hover:bg-[#000000] w-32 border border-[#000000]"
            onMouseEnter={() => setButtonText('Team News')}
            onMouseLeave={() => setButtonText('Team News')}
        >
            {buttonText}
        </button>
    )
}

export default Button
