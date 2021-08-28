const MainView = () => {
  const todoBoard = document.getElementById('todo-box'),
    todoUl = todoBoard.querySelector('ul');

  const doneBoard = document.getElementById('done-box'),
    doneUl = doneBoard.querySelector('ul');

  const todoFragment = new DocumentFragment();
  const doneFragment = new DocumentFragment();

  const template = ({ id, text, date, done }) => {
    const li = document.createElement('li');
    li.className = 'item-list';
    const todos = `<div class="item-container" id=${id}>
      ${
        date
          ? '<i class="fas fa-bell"></i>'
          : '<i class="fas fa-bell-slash"></i>'
      }
      <span class="list-text">${text}</span>
      <div>
        <span class="toggle-button">${done ? '↩' : '✅'}</span>
        <span class="delete-button">❌</span>
        <span class="edit-button">✏️</span>
      </div>
    </div>`;
    li.innerHTML = todos;

    return li;
  };

  const render = (items) => {
    doneUl.innerHTML = '';
    todoUl.innerHTML = '';

    items?.forEach((item) => {
      const { done } = item;
      console.log(item);
      if (done) {
        doneFragment.appendChild(template(item));
      } else {
        todoFragment.appendChild(template(item));
      }
    });

    todoUl.appendChild(todoFragment);
    doneUl.appendChild(doneFragment);
  };

  return { render };
};

export default MainView;
