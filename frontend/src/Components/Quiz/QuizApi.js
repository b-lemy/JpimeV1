import axios from 'axios';

const QuizApi = axios.create(
    {
        baseURL:"https://opentdb.com",

    }
)

export default QuizApi