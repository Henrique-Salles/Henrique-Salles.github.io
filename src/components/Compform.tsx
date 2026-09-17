import './Compform.css'

interface CompformProps{
    label:string,
    state:any,
    funcState:any,
    className?: string,
    placeholder?: string
}
export default function Compform(props: CompformProps) {
    return(
        <div id="form">
            <label className="labels">{props.label}</label>
            <input 
                className={'inputs ${props.className ?? ""}'}
                placeholder={props.placeholder}
                type='number' 
                value={props.state} 
                onChange={(evt)=> props.funcState(evt.target.value)} />
        </div>
    )
}