import React, { useCallback, useEffect, useState, useRef } from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { ReactComponent as Add } from './../../assets/add.svg';
import { ReactComponent as Back } from './../../assets/arrow_left.svg';
import { ReactComponent as Delete } from './../../assets/delete.svg';
import { ReactComponent as Edit } from './../../assets/edit.svg';
import { ReactComponent as Visualization } from './../../assets/view.svg';
import Button from './../../components/Button';
import Footer from './../../components/Footer';
import Header from './../../components/Header';
import Loading from './../../components/Loader';
import { Meta } from './../../components/Meta';
import Modal from './../../components/Modal';
import type { DragonData } from './../../interfaces/dragon';
import {
  Container,
  TableContainer,
  OrderContainer,
  TitlePage,
  AddContainer,
} from './style';

const ListDragon: React.FC = () => {
  const [dataTable, setDataTable] = useState<DragonData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idToDelete, setIdToDelete] = useState<string>('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const sortAscending = useRef(true);
  const history = useHistory();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get<DragonData[]>(`/dragon`);
      const dragons = response.data;
      setDataTable(sortListDragon(dragons));

      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const deleteDragon = async () => {
    closeModal();
    await api.delete(`/dragon/${idToDelete}`);
    fetchData();
  };

  const openModal = (id: string) => {
    setIdToDelete(id);
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowDeleteModal(false);
  };

  const sortListDragon = (dragao: DragonData[]): DragonData[] => {
    let orderList = dragao.sort(function (a, b): any {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
      return 0;
    });
    if (sortAscending.current) {
      return orderList;
    }
    return orderList.reverse();
  };

  const toggleListOrder = () => {
    sortAscending.current = !sortAscending.current;
    const sortedList = sortListDragon(dataTable);
    setDataTable([...sortedList]);
  };

  return (
    <>
      <Meta title="Lista de Dragões" />
      <Modal
        show={showDeleteModal}
        titulo={'Excluir Dragão'}
        mensagem={'Deseja excluir o Dragão?'}
        onConfirm={() => deleteDragon()}
        onCancel={() => closeModal()}
        actionButtons
      />
      <Header />
      <TableContainer>
        <Container>
          <TitlePage>
            <h1>Dragon System</h1>
            <hr />
          </TitlePage>
          <AddContainer>
            <div className="tooltip">
              <Button
                color={'#f58614ff'}
                variant="icon-button"
                onClick={() =>
                  history.push(`/listar-dragoes/cadastrar-dragao/`)
                }
              >
                <Add style={{ width: '28px', color: '#fff' }} />
              </Button>
              <span className="tooltiptext">Cadastrar</span>
            </div>
          </AddContainer>
          <table>
            <thead>
              <tr>
                <th style={{ width: '100px' }}>
                  <OrderContainer>
                    NOME
                    {sortAscending.current ? (
                      <button onClick={() => toggleListOrder()}>
                        <AiOutlineArrowUp size={20} />
                      </button>
                    ) : (
                      <button onClick={() => toggleListOrder()}>
                        <AiOutlineArrowDown size={20} />
                      </button>
                    )}
                  </OrderContainer>
                </th>
                <th style={{ width: '100px' }}>TIPO</th>
                <th style={{ width: '100px' }}>AÇÕES</th>
              </tr>
            </thead>
            {isLoading ? (
              <Loading />
            ) : (
              <tbody>
                {dataTable.map(data => (
                  <tr key={data.id}>
                    <td data-column="Nome">
                      <p>{data.name}</p>
                    </td>
                    <td data-column="Tipo">
                      <p>{data.type}</p>
                    </td>
                    <td data-column="Ações">
                      <div className="tooltip">
                        <Button
                          color={'#fff6d5ff'}
                          variant="icon-button"
                          style={{ marginRight: '2rem' }}
                          onClick={() =>
                            history.push(
                              `/listar-dragoes/visualizar-dragao/${data.id}`,
                            )
                          }
                        >
                          <Visualization
                            style={{ width: '28px', color: '#ffdd55ff' }}
                          />
                        </Button>
                        <span className="tooltiptext">Visualizar</span>
                      </div>
                      <div className="tooltip">
                        <Button
                          color={'#ffccaaff'}
                          variant="icon-button"
                          style={{ marginRight: '2rem' }}
                          onClick={() =>
                            history.push(
                              `/listar-dragoes/editar-dragao/${data.id}`,
                            )
                          }
                        >
                          <Edit style={{ width: '28px', color: '#ff7f2aff' }} />
                        </Button>
                        <span className="tooltiptext">Editar</span>
                      </div>
                      <div className="tooltip">
                        <Button
                          color={'#ffaaaaff'}
                          style={{ marginRight: '2rem' }}
                          variant="icon-button"
                          onClick={() => openModal(data.id)}
                        >
                          <Delete
                            style={{ width: '28px', color: '#dd2d4aff' }}
                          />
                        </Button>
                        <span className="tooltiptext">Excluir</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </Container>
      </TableContainer>
      <Footer />
    </>
  );
};

export default ListDragon;
