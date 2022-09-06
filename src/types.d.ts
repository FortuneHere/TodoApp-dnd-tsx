interface Todo {
  id: number;
  task: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (task: string) => void;

type RemoveTodo = (todo: Todo) => void;

