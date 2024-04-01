import questionsAnswers from "../../questionsAnswers/QuestionsAnswers.json";

const Form = () => {
  return (
    <>
      <h1>Тестування</h1>
      <div>
        <form>
          <input type="text" name="" id="" placeholder="Введіть нове питання" />
          <div>
            <div>
              <input type="text" placeholder="Перший варіант відповіді" />
              <button></button>
            </div>
            <div>
              <input type="text" placeholder="Другий варіант відповіді" />
              <button></button>
            </div>
            <div>
              <input type="text" placeholder="Третій варіант відповіді" />
              <button></button>
            </div>
            <div>
              <input type="text" placeholder="Четвертий варіант відповіді" />
              <button></button>
            </div>

            <button>Save Questions</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
