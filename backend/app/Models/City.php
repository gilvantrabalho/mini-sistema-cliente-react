<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'status'];

    public function representatives()
    {
        return $this->belongsToMany(Representative::class, 'city_representative');
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }
}
