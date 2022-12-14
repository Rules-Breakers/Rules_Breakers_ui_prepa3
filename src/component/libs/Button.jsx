export default function Button (props) {
    const {setValue , type , placeholder} = props;

    return(
        <>
            <input className="input" type={type}  placeholder={placeholder} required onChange={(e)=>setValue(e.target.value)}/>
        </>
    )
}