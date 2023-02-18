import './style.css'
function Card(props){
    const style = {backgroundColor:props.backgroundColor}
    const styl1={color:props.backgroundColor}
    return (
        <div className="card">
            <div  style={style} className="color">
            </div>
           <div className='color1'>
           <h2>{props.data}</h2>
            <p style={styl1}>{props.color}</p>
           </div>
        </div>
    )
}
export default Card;