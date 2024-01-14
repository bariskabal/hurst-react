import "./ScrollUp.css"

export default function ScrollUp() {
    return(
        <button className="scroll-up-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <i className="zmdi zmdi-triangle-up"></i>
        </button>
    )
}