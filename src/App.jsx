import { Section, Container, Header, Text, TodoList, Form } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todosSlice';

export const App = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {todos.length ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
