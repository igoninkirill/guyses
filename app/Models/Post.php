<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'family',
        'description',
    ];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
