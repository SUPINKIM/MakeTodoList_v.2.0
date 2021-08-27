/**
 *
 * @param {String} text : todo text
 * @param {Object} alram : alram date, time
 */
const Model = ({ text, alram }) => {
  const LOCAL_STORAGE_TODO = 'Todo';
  let itemsArray = [];

  const getTime = () => {
    let time = '';
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let AmOrPm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    time = hours + ':' + minutes + AmOrPm;

    return time;
  };

  const createItem = () => {
    return {
      id: `list-${Date.now()}`,
      text,
      time: getTime(),
      done: false,
    };
  };

  const changeDoneState = (item, tobe) => {
    item.done = tobe;
  };

  const changeText = (item, text) => {
    item.text = text;
  };

  const saveTodo = (item) => {
    localStorage.setItem(LOCAL_STORAGE_TODO, JSON.stringify(itemsArray));
  };

  const getTodo = () => {
    const items = localStorage.getItem(LOCAL_STORAGE_TODO);
    if (items) {
      itemsArray = JSON.parse(items);
    }
  };

  const getState = () => itemsArray;

  return {
    createItem,
    saveTodo,
    getTodo,
    changeDoneState,
    changeText,
    getState,
  };
};

export default Model;
