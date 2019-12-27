export function requestTools() {
  return {
    type: '@tool/REQUEST_ALL',
  };
}

export function successTools(dados) {
  return {
    type: '@tool/SUCCESS',
    payload: { dados },
  };
}

export function failureTools() {
  return {
    type: '@tool/FAILURE',
  };
}

export function createTool(data) {
  return {
    type: '@tool/CREATE_TOOL',
    payload: data,
  };
}

export function deleteTool(id) {
  return {
    type: '@tool/DELETE_TOOL',
    id,
  };
}
