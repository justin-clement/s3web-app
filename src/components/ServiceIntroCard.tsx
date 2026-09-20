import { useNavigate } from "react-router-dom";
import type { ServiceProps } from "../appData/appData";


function ServiceIntroCard({ serviceInfo }: { serviceInfo: ServiceProps }) {

    const navigate = useNavigate();

    const viewService = () => {
        navigate(`/solutions/${serviceInfo.nameAsString}`, { state: { service: serviceInfo.nameAsString } });
    };


    return (
        <div>
            {serviceInfo.name}
            <p>{serviceInfo.summary}</p>
            <br />

            <button onClick={viewService}>Know More</button>
        </div>
    )
};

export default ServiceIntroCard;