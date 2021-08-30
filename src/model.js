const Model = () => {
  const LOCAL_STORAGE_TODO = 'Todo';
  let itemsArray = [];

  const saveTodo = () => {
    localStorage.setItem(LOCAL_STORAGE_TODO, JSON.stringify(itemsArray));
  };

  const getTodo = () => {
    const items = localStorage.getItem(LOCAL_STORAGE_TODO);
    if (items) {
      itemsArray = JSON.parse(items);
    }
  };

  const createItem = ({ text, date, time }) => {
    const newItem = {
      id: `list-${Date.now()}`,
      text,
      date,
      time,
      done: false,
    };
    itemsArray.unshift(newItem);
    saveTodo();
  };

  const changeDoneState = (id) => {
    const changingItem = itemsArray.find((item) => item.id === id);
    changingItem.done = !changingItem.done;
    saveTodo();
  };

  const removeItem = (id) => {
    itemsArray = itemsArray.filter((item) => item.id !== id);
    saveTodo();
  };

  const changeText = (item, text) => {
    item.text = text;
  };

  const getState = () => itemsArray;

  getTodo();

  return {
    createItem,
    saveTodo,
    getTodo,
    changeDoneState,
    changeText,
    getState,
    removeItem,
  };
};

export default Model;
