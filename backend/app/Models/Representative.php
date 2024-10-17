<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Representative extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function cities()
    {
        return $this->belongsToMany(City::class, 'city_representative');
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }
}
