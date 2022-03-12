import FormCard from "components/formCard";
import { useParams } from "react-router-dom";

function Form() {

    const params = useParams();

    return (
        <FormCard movieId={`${params.moveId}`}/>
    );
}

export default Form;