import produce from 'immer';

const INITIAL_STATE = {
  tools: null,
  loading: false,
};

export default function toolsData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@tool/REQUEST_ALL':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@tool/SUCCESS':
      return { tools: action.payload.dados };

    default:
      return state;
  }
}
