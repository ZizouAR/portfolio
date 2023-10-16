import IButton from "../types/IButton";

export default function Button({ children, onClick, anchor = "" }: IButton) {

    if (!anchor) {
        return (
            <div
                onClick={onClick}
                className="button"
            >{children}</div>
        )
    }

    return (
        <a href={`#${anchor}`} style={{ textDecoration: 'none', width: 'auto' }} className="button">
            {children}
        </a>

    )
}