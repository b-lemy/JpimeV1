import axios from 'axios';

const QuizApi = axios.create(
    {
        baseURL:"https://opentdb.com/api.php?amount=1",

    }
)

export default QuizApi