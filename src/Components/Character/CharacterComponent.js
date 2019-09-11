import React, { useState, useEffect } from 'react';
import {
    Table, Button, Card,
    CardHeader, CardBody
} from 'reactstrap';

const CharacterComponent = ( props ) => {

    return (
        <div>
            <Button color="success" size="sm" className="mb-2" onClick={() => props.newCharacter()}>Agregar personaje</Button>
            <Card>
                <CardHeader>
                    Lista de personajes
                </CardHeader>
                <CardBody>
                    <Table size="sm" responsive>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Sexo</th>
                                <th>Color de ojos</th>
                                <th>Color de pelo</th>
                                <th>Altura</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.characters && props.characters.length > 0 ?
                                props.characters.map((character, i) => {
                                    return <tr key={i}>
                                        <td>{character.name}</td>
                                        <td>{character.gender}</td>
                                        <td>{character.eye_color}</td>
                                        <td>{character.hair_color}</td>
                                        <td>{character.height}</td>
                                        <td><i className="fa fa-edit" onClick={() => props.onSearchCharacter(i+1)}></i></td>
                                        <td><i className="fa fa-close" onClick={() => props.onDelete(i+1)}></i></td>
                                    </tr>
                                })
                            : null}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
}

export default CharacterComponent;