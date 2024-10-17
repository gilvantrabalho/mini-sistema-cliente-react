<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'cpf',
        'name',
        'birthDate',
        'gender',
        'address',
        'state',
        'city_id',
        'representative_id'
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function representative()
    {
        return $this->belongsTo(Representative::class);
    }
}
