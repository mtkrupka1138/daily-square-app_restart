// single square component for a day

export default function Square({ square, onDelete, onToggle }) {
    return(
        <div>
            <h3>{square.text}</h3>
        </div>
    );
}