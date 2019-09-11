import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row,
    Modal, ModalBody, ModalHeader,
} from 'reactstrap';
import useCharacter from '../../Providers/CharacterProvider';
import history from '../../Services/history';
import CharacterComponent from '../../Components/Character/CharacterComponent';
import CharacterFormComponent from '../../Components/Character/CharacterFormComponent';

const Character = ( props ) => {
    const [characters, setCharacters] = useState([]);
    const [characterToEdit, setCharacterToEdit] = useState({});
    const [formToCreateOrEdit, setFormToCreateOrEdit] = useState(false);

    useEffect(() => {
        fetchData();
        if (Object.keys(characterToEdit).length !== 0) {
            setFormToCreateOrEdit(true);
        }
    }, [characterToEdit])

    async function fetchData () {
        const response = await useCharacter.useFetchCharacters();
        setCharacters(response.response);
    }

    async function onSearchCharacter (characterId) {
        const response = await useCharacter.useFetchCharacter({characterId: characterId});
        setCharacterToEdit(response.response);
    }

    async function onDelete () {
        const response = await useCharacter.useDeleteCharacter();
    }

    const toggle = () => {
        setFormToCreateOrEdit(!formToCreateOrEdit);
    }

    const save = (data) => {
        console.log('DATA', data);
    }
    return (
        <div className="animated fadeIn">
            <Modal isOpen={formToCreateOrEdit} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <CharacterFormComponent
                        characterToEdit={characterToEdit}
                        onSave={save} />
                </ModalBody>
            </Modal>
            <CharacterComponent
                onSearchCharacter={onSearchCharacter}
                newCharacter={toggle}
                onDelete={onDelete}
                characters={characters}/>
        </div>
    );
}

export default Character;
