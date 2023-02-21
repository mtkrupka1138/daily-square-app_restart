// daily square form to fill out and submit

import { useState } from 'react';

export default function addSquare({ onAdd }) {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert("Please add info about today")
            return;
        }

        onAdd({ text });

        setText('');
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input 
                    type='text'
                    placeholder='What happened today?'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </form>
    )
}