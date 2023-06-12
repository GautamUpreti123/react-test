import React, { useEffect, useState } from "react";
import { Container, Modal } from 'react-bootstrap';
import ODAS from "../../api/odas";
import CardUI from "../cards";
import './Assessments.css';

const Assessments = () => {

  const [assessments, setAssements] = useState([]);

  useEffect(() => {
    getData({ public: true });
  }, []);

  const getData = async (params) => {
    const data = await ODAS.get(params);
    setAssements(data.assessments);
  }

  return (
    <>
      <Container className="container-width">
        <span>AVAILABLE</span>
        {assessments.length && assessments.map(item => (
          <CardUI key={item.title} data={item} />
        ))}
      </Container>
    </>
  )
};

export default Assessments;