<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\PostRequest;
use App\Http\Resources\CommentResource;
use App\Http\Resources\PostResource;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        return response()->json(PostResource::collection(Post::latest('id')->with(['comments'])->get()));
    }

    public function store(PostRequest $request)
    {
        return response()->json(Post::create($request->validated()));
    }

    public function show(Post $post)
    {
        return response()->json([
            'post' => new PostResource($post),
            'comments' => CommentResource::collection($post->comments)
        ]);
    }
}
