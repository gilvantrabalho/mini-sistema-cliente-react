import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';
import Container from '../../../components/container/Container';
import { getAll } from '../../../api/ClientApi';
import ConsultClient from '../../../components/consults/consult client/ConsultClient';
import { deleteClient } from '../../../api/ClientApi';
import { Link } from 'react-router-dom';

const List = () => {
    const [clients, setClients] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [clientsPerPage] = useState(5);

    useEffect(() => {
        handleClients();
    }, []);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleFormData = (data) => {
        handleClients(data);
    }

    const handleClients = (filters = {}) => {
        getAll(filters)
            .then(res => {
                setClients(res.data.clients);
            })
            .catch(error => console.log(error));
    }

    const handleDelete = (clientId) => {
        Swal.fire({
            title: 'Tem certeza?',
            text: 'Você não poderá reverter isso!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, excluir!',
            cancelButtonText: 'Não, cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteClient(clientId)
                    .then(() => {
                        setClients(clients.filter(client => client.id !== clientId));
                        Swal.fire('Excluído!', 'O cliente foi excluído.', 'success');
                    })
                    .catch(error => {
                        console.error('Erro ao excluir cliente:', error);
                        Swal.fire('Erro!', 'Não foi possível excluir o cliente.', 'error');
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelado', 'A exclusão foi cancelada :)', 'error');
            }
        });
    };

    const offset = currentPage * clientsPerPage;
    const currentClients = clients.slice(offset, offset + clientsPerPage);
    const pageCount = Math.ceil(clients.length / clientsPerPage);

    return (
        <div className="mt-3">
            <Container>
                <div className='border p-4 rounded mb-4'>
                    <h4 className='mb-2'>Consultar Cliente</h4>
                    <ConsultClient onFormSubmit={handleFormData} />
                </div>

                <h4 className='mb-2'>Todos os Cliente</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-center bg-secondary text-white'></th>
                            <th className='text-center bg-secondary text-white'></th>
                            <th className='text-center bg-secondary text-white'>Cliente</th>
                            <th className='text-center bg-secondary text-white'>CPF</th>
                            <th className='text-center bg-secondary text-white'>Data Nasc.</th>
                            <th className='text-center bg-secondary text-white'>Estado</th>
                            <th className='text-center bg-secondary text-white'>Cidade</th>
                            <th className='text-center bg-secondary text-white'>Sexo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentClients.map(client => (
                            <tr key={client.id}>
                                <td className='text-end'>
                                    <Link to={`/edit-client/${client.id}`} type='button' className='btn btn-sm btn-success'>Editar</Link>
                                </td>
                                <td className='text-start'>
                                    <button
                                        type='button'
                                        className='btn btn-sm btn-danger ms-2'
                                        onClick={() => handleDelete(client.id)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                                <td className='text-center'>{client.name}</td>
                                <td className='text-center'>{client.cpf}</td>
                                <td className='text-center'>{client.birthDate}</td>
                                <td className='text-center'>{client.state}</td>
                                <td className='text-center'>{client.city.name}</td>
                                <td className='text-center'>{client.gender == 'Masculino' ? 'M' : 'F'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ReactPaginate
                    previousLabel={'← Voltar'}
                    nextLabel={'Próximo →'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </Container>
        </div>
    );
};

export default List;
