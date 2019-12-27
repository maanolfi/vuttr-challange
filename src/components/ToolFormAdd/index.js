import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { createTool } from '../../store/modules/tools/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required(),
  link: Yup.string().required(),
  description: Yup.string()
    .max(500)
    .required('Max 500 caracters'),
  tags: Yup.string(),
});

const ToolFormAdd = ({ handleModal }) => {
  const dispath = useDispatch();

  const handleSubmit = (data, { resetForm }) => {
    const tags = data.tags.replace(/\s/g, '').split(',');
    dispath(createTool({ ...data, tags }));
    resetForm();
    handleModal();
  };

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <span>+ Add</span>
        <label htmlFor="name">Tool Name</label>
        <Input name="title" />
        <label htmlFor="link">Tool Link</label>
        <Input name="link" />
        <label htmlFor="link">Tool description</label>
        <Input multiline name="description" />
        <label htmlFor="link">Tags</label>
        <Input name="tags" type="text" placeholder="comma separated" />
        <div className="button">
          <button type="submit">Enviar</button>
        </div>
      </Form>
    </Container>
  );
};

export default ToolFormAdd;
