import LayerView from './view/layerview.js';

/**
 *
 * @param {Object} model : Model 컴포넌트
 * @param {Object} view : MainView 컴포넌트
 *
 * @function setItemListener : todo 항목 addEventListner patch
 */
const Controller = (model, view) => {
  const updateView = () => {
    view.render(model.getState());
  };

  const createTodo = (component) => {
    const okButton = document.getElementById('layer-ok');
    const cancelButton = document.getElementById('layer-cancel');

    okButton.addEventListener('click', () => {
      const layer = document.getElementById('layer');
      const data = {};
      data.text = layer.querySelector('textarea').value;
      data.date = layer.querySelector('input[type="date"]').value;
      data.time = layer.querySelector('input[type="time"]').value;

      model.createItem(data);
      updateView();
      component.hideContainer();
    });

    cancelButton.addEventListener('click', () => {
      component.hideContainer();
    });
  };

  const showLayer = () => {
    const layer = new LayerView();
    layer.render();
    createTodo(layer);
  };

  const setItemListner = () => {
    const items = document.querySelectorAll('.item-container');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        const { className } = event.target;
        //삭제, 내용 수정, 완료상태 수정 액션 핸들링
      });
    });
  };

  const init = () => {
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', () => showLayer());

    view.render(model.getState());

    setItemListner();
  };

  init();
};

export default Controller;
