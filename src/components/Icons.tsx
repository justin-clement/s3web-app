import { IoChevronBack } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

export function BackArrow({ size, colour }: { size: number, colour: string }) {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    
    return <IoChevronBack size={size} color={colour} onClick={goBack} />

};