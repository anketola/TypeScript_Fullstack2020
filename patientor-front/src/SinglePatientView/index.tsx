import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Patient } from "../types";
import { apiBaseUrl } from "../constants";
import { Container, Header, Icon } from "semantic-ui-react";

const SinglePatientView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = React.useState<Patient | undefined>();

    React.useEffect(() => {
        const fetchPatientDetails = async () => {
        try {
            const { data: patientDetails } = await axios.get<Patient>(
              `${apiBaseUrl}/patients/${id}`
            );
            setPatient(patientDetails);
            console.log(patientDetails);
            } catch (e) {
            console.error(e);
          }
        };
        fetchPatientDetails();
    }, [id]);   
    
    if (patient) {
        const icontype = {
            male: "mars",
            female: "venus",
            other: "genderless"
        }
        
        return (
        <Container>
            <Header as="h2">{patient.name} <Icon className={icontype[patient.gender]} /></Header>
            <p>ssn: {patient.ssn}</p>
            <p>occupation: {patient.occupation}</p>
        </Container>
        );
    } else {
        return (
        <div>
        </div>
        )
    };
    
    
};

export default SinglePatientView;