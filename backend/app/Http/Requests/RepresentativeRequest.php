<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RepresentativeRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'cities' => 'required|array',
            'cities.*.value' => 'exists:cities,name',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O nome é obrigatório.',
            'name.string' => 'O nome deve ser uma string.',
            'name.max' => 'O nome não pode exceder 255 caracteres.',
            'cities.required' => 'Selecione pelo menos uma cidade.',
            'cities.array' => 'As cidades devem ser um array.',
            'cities.*.value.exists' => 'Uma ou mais cidades selecionadas não existem.',
        ];
    }
}
