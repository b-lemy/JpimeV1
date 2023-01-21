<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' =>$this->id,
            'title' => $this->title,
            'body' =>$this->when($request->routeIs('posts.index'),function () use ($request){
                if ($request->routeIs('posts.index')){
                    return substr($this->body,offset: 0,length: 50);
                }else{
                    return $this->body;
                }

            }),
            'created' =>$this->created_at->diffForHumans(),
            'authorPhone' => $this->author->phone,
            'authorName' => $this->author->first_name,

        ];
    }
}
