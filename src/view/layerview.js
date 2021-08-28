const LayerView = (text, date, time) => {
  const body = document.body;
  const background = document.createElement('div');
  background.id = 'layer-background';

  const createContainer = document.createElement('div');
  createContainer.id = 'layer';

  const template = () => {
    const container = `
      <div>
        <textarea rows="8" cols="50">${text ? text : ''}</textarea>
      </div>
      <div>
        <input type="date" value=${date ? date : ''}></input>
        <input type="time" value=${time ? time : ''}></input>
      </div>
      <div>
        <button id="cancel">취소</button>
        <button id="ok">확인</button>
      </div>
      `;
    return container;
  };

  const render = () => {
    createContainer.innerHTML = template();
    background.appendChild(createContainer);
    body.appendChild(background);
  };

  return { render };
};

export default LayerView;
