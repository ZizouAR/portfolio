import IButton from "../types/IButton";

export default function Button({ children }: IButton){

    return (
        <div 
        onClick={() => {
            
        }}
        className="button"
        >{children}</div>
    )
}