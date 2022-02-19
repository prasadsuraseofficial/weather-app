import "./Wrapper.css"

const Wrapper = (props) => {
    return (
        <div className={`wrapper ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Wrapper