import { GridItem, Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';

import { deleteTodo } from 'reduxTodo/todosSlice';

export const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          {index}
        </Text>

        <Text>{todo.text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
