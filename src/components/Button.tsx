import IButton from "../types/IButton";

export default function Button({ children, onClick }: IButton){

    return (
        <div 
        onClick={onClick}
        className="button"
        >{children}</div>
    )
}