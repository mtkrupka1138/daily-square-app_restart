// all squares

import Square from './square';

export default function Squares({ squares, onDelete, onToggle }) {
    return(
        <>
            {squares.map((square, index) => (
            <Square key={index} square={square} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}