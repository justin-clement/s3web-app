import { IoChevronBack } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

export function BackArrow({ size, colour }: { size: number, colour: string }) {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    
    return (
        <button
            type="button"
            aria-label="Go back"
            onClick={goBack}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                border: 0,
                background: "transparent",
                color: colour,
                cursor: "pointer",
            }}
        >
            <IoChevronBack size={size} color="currentColor" aria-hidden="true" />
        </button>
    );

};