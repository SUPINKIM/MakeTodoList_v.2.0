import LayerView from './view/layerview.js';

/**
 *
 * @param {Object} model : Model 컴포넌트
 * @param {Object} view : MainView 컴포넌트
 */
const Controller = (model, view) => {
  const showLayer = () => {
    const layer = new LayerView();
    layer.render();
  };

  const init = () => {
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', () => showLayer());

    view.render(model.getState());
  };

  init();
};

export default Controller;
