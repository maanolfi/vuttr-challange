import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdClear } from 'react-icons/md';

import { Container, ModalRemove } from './styles';
import ReactModal from '../ReactModal';

import { deleteTool } from '../../store/modules/tools/actions';

export default function ToolItem({ data }) {
  const dispath = useDispatch();
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <Container>
      <div>
        <header>
          <a href="/">{data.title}</a>

          <button onClick={handleModal}>
            <MdClear />
            remove
          </button>
        </header>

        <aside>{data.description}</aside>

        <footer>
          {data.tags.map(tag => (
            <strong key={tag}>#{tag} </strong>
          ))}
        </footer>
      </div>

      <ReactModal open={modal} handleModal={handleModal} label="Form add">
        <ModalRemove>
          <span>
            <MdClear size={16} />
            Remove tool
          </span>
          <span>Are you sure you want to remove {data.title}? </span>
          <div>
            <button id="cancel" onClick={handleModal}>
              Cancel
            </button>
            <button id="yes" onClick={() => dispath(deleteTool(data.id))}>
              Yes, remove
            </button>
          </div>
        </ModalRemove>
      </ReactModal>
    </Container>
  );
}
