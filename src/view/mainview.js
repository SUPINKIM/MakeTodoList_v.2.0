const MainView = () => {
  const todoBoard = document.getElementById('todo-box'),
    todoUl = todoBoard.querySelector('ul');

  const doneBoard = document.getElementById('done-box'),
    doneUl = doneBoard.querySelector('ul');

  const todoFragment = new DocumentFragment();
  const doneFragment = new DocumentFragment();

  const template = ({ id, text, time, done }) => {
    return `<li>
      <div id=${id}>
        <span>${text}</span>
        <span>${time}</span>
        <span class="toggle-btn">${done ? '↩' : '✅'}</span>
        <span class="delete-btn">❌</span>
        <span class="edit-btn">✏️</span>
      </div>
    <li>`;
  };

  const render = (items) => {
    doneUl.innerHTML = '';
    todoUl.innerHTML = '';

    items?.forEach((item) => {
      const { done } = item;
      if (done) {
        doneFragment.innerHTML += template();
      } else {
        todoFragment.innerHTML += template();
      }
    });

    todoUl.appendChild(todoFragment);
    doneUl.appendChild(doneFragment);
  };

  return render;
};

export default MainView;
