import React, { useState, useEffect } from 'react';
import {
    Table, Button, Card,
    CardHeader, CardBody,
    Input, Col, Row
} from 'reactstrap';

const CharacterFormComponent = ( props ) => {
    const [name, setName] = useState(props.characterToEdit ? props.characterToEdit.name : '');
    const [gender, setGender] = useState(props.characterToEdit ? props.characterToEdit.gender : '');
    const [eyesColor, setEyesColor] = useState(props.characterToEdit ? props.characterToEdit.eye_color : '');
    const [hairColor, setHairColor] = useState(props.characterToEdit ? props.characterToEdit.hair_color : '');
    const [height, setHeight] = useState(props.characterToEdit ? props.characterToEdit.height : '');

    const save = () => {
        props.onSave({
            name: name,
            gender: gender,
            eyesColor: eyesColor,
            hairColor: hairColor,
            height: height,
        });
    }

    return (
        <div>
            <Card>
                <CardBody>
                    <Row className="my-2">
                        <Col>
                            <Input type="text" className="form-control form-control-sm" value={name} placeholder="Nombre"
                                onChange={(e) => setName(e.target.value)}></Input>
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col>
                            <Input type="select" className="form-control form-control-sm" value={gender}
                                onChange={(e) => setGender(e.target.value)}>
                                <option value="male">Masculino</option>
                                <option value="female">Femenino</option>
                            </Input>
                        </Col>
                        <Col>
                            <Input type="select" className="form-control form-control-sm" value={eyesColor}
                                onChange={(e) => setEyesColor(e.target.value)}>
                                <option value="n/a">No aplica</option>
                                <option value="blue">Azules</option>
                                <option value="red">Rojos</option>
                                <option value="yellow">Amarillos</option>
                                <option value="black">Negros</option>
                                <option value="brown">Cafes</option>
                            </Input>
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col>
                            <Input type="select" className="form-control form-control-sm" value={hairColor}
                                onChange={(e) => setHairColor(e.target.value)}>
                                <option value="n/a">No aplica</option>
                                <option value="none">Ninguno</option>
                                <option value="blond">Rubio</option>
                                <option value="red">Rojo</option>
                                <option value="brown">Café</option>
                                <option value="black">Negro</option>
                            </Input>
                        </Col>
                        <Col>
                            <Input type="number" className="form-control form-control-sm" value={height} placeholder="Altura"
                                onChange={(e) => setHeight(e.target.value)}></Input>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            <Button color="success" size="sm" className="float-right mb-2" onClick={save}>Actualizar</Button>
        </div>
    );
}

export default CharacterFormComponent;