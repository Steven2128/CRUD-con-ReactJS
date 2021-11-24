import React from 'react';
import AnimesService from './AnimeService.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup } from 'reactstrap'

const animeService = new AnimesService();


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animes: [],
            form: {
                id: null,
                character: '',
                anime: '',
            },
            modal: false,
        }
    }

    componentDidMount() {
        var self = this;
        animeService.getAnimes().then(result => {
            self.setState({ animes: result })
        });
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    mostrarModal = () => {
        this.setState({ 
            modal: !this.state.modal, 
            form: {
                id: null,
                character: '',
                anime: '',
            },
        });
    }

    handleCreate=()=>{
        animeService.createAnime(this.state.form).then(result=>{
            this.componentDidMount();
            this.mostrarModal();
        });
    }

    handleSelect(anime){
        this.setState({modal: !this.state.modal, form: anime});
    }

    handleUpdate=()=>{
        animeService.updateAnime(this.state.form).then(result=>{
            this.componentDidMount();
            this.mostrarModal();
        })
    }

    render() {
        return (
            <Container>
                <h1 className="text-center">Personajes de Animes</h1>
                <Button color="success" onClick={this.mostrarModal}>Agregar Nuevo Personaje</Button>
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Personaje</th>
                            <th>Anime</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.animes.map((value, index) =>
                                <tr key={value.id}>
                                    <td>{index + 1}</td>
                                    <td>{value.character}</td>
                                    <td>{value.anime}</td>
                                    <td><Button color="warning" className="me-2" onClick={() =>this.handleSelect(value)}>Editar</Button><Button color="danger">Eliminar</Button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

                <Modal isOpen={this.state.modal}>
                    <ModalHeader close={<Button className="close" onClick={this.mostrarModal}>X</Button>}>
                        Agregar Registro
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Personaje:</label>
                            <input type="text" name="character" className="form-control" onChange={this.handleChange} value={this.state.form.character}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Anime:</label>
                            <input type="text" name="anime" className="form-control" onChange={this.handleChange} value={this.state.form.anime}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.handleCreate}>Agregar</Button>
                        <Button color="success" onClick={this.handleUpdate}>Actualizar</Button>
                        <Button color="danger" onClick={this.mostrarModal}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

            </Container>
        )
    }
}



export default App;
