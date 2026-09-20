import { useParams } from "react-router-dom";
import { allServices } from "../appData/appData";


function ServiceDescription() {

    const { serviceName } = useParams();
    const serviceDetails = allServices.find((service) => service.nameAsString === serviceName);

    return (
        <div>

            {serviceDetails?.name}

            <div>
                <div>{serviceDetails?.description}</div>
                <button></button>
            </div>
            
        </div>
    )
};

export default ServiceDescription;