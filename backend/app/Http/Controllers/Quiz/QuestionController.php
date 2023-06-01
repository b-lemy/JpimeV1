<?php

namespace App\Http\Controllers\Quiz;

use App\Http\Controllers\Controller;
use App\Http\Resources\QuizAttempts;
use App\Models\QuizModels\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QuestionController extends Controller
{
    public function insertQuestion(Request $request)
    {
//        $loggedIn = auth()->user();
        $responseData = $request->input('dataToBackend');

        $arrayLength = count($responseData);
        $currentDate = Carbon::now();

        Log::channel('process')->info($responseData, (array)$arrayLength);
        foreach ($responseData as $item) {
            $question = new Question();
            $question->category = $item['category'];
            $question->type = $item['type'];
            $question->difficulty = $item['difficulty'];
            $question->amount = $arrayLength;
            $question->question = $item['question'];
            $question->quiz_id = '1';

//            DB::table('responses')->insert(
//                [
//                    'answer'=>$item['correct_answer'],
//                    'is_correct'=>true,
//                    'question_id'=>'1',
//                    'created_at' => $currentDate,
//                    'updated_at' => $currentDate
//
//                ]);
            $question->save(); // Save the model to the database
        }


    }

    public function insertResults(Request $request)
    {
        $dataResults = $request->input('final');

        $loggedIn = auth()->user()->id;

        $currentDate = Carbon::now();

        Log::channel('process')->info($dataResults, array($loggedIn));

        DB::beginTransaction();
        try {
            DB::table('quiz_attempts')->insert([
                'score' => $dataResults,
                'quiz_id' => '1',
                'user_id' => $loggedIn,
                'created_at' => $currentDate,
                'updated_at' => $currentDate
            ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            // Handle the exception, log error, or display a message

        }
    }

    public function getQuizResults(){

        $loggedInUserId = auth()->user()->id;
//        $loggedInUserId = 1;

        $results = DB::select("SELECT * FROM quiz_attempts WHERE user_id = ?", [$loggedInUserId]);


        return QuizAttempts::collection($results);

    }
}