<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CitySeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cities = ['Goiânia', 'Rio de Janeiro', 'São Paulo', 'Óbidos', 'Santa Rosa'];

        foreach ($cities as $city) {
            City::create([
                'name' => $city,
                'slug' => Str::slug($city)
            ]);
        }
    }
}
