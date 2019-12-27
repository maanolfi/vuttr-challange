import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';

import { MdAdd } from 'react-icons/md';
import ReactModal from '../../components/ReactModal';
import ToolItem from '../../components/ToolItem';
import ToolFormAdd from '../../components/ToolFormAdd';

import { Container, Content } from './styles';

import * as ToolsActions from '../../store/modules/tools/actions';

const Home = ({ requestTools }) => {
  const { tools } = useSelector(state => state.tools);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    requestTools();
  }, []);

  return (
    <Container>
      <Content>
        <h1>VUTTR</h1>
        <h3>Very Useful Tools to Remember</h3>

        <nav>
          <div>
            <input type="text" id="search" placeholder="search" />

            <input type="checkbox" id="tags" name="tags" />
            <label htmlFor="tags">search in tags only</label>
          </div>
          <button onClick={handleModal}>
            <MdAdd size={16} />
            Add
          </button>
        </nav>

        {tools ? (
          tools.map(tool => <ToolItem key={tool.id} data={tool} />)
        ) : (
          <span>Carregando...</span>
        )}
      </Content>

      <ReactModal open={modal} handleModal={handleModal} label="Form add">
        <ToolFormAdd handleModal={handleModal} />
      </ReactModal>
    </Container>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ToolsActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
