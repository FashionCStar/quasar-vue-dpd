<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Report;

class Depot extends Model {
    protected $fillable = ['depot_location', 'user_id'];
    
    public function reports()
    {
        return $this->hasMany('App\Report');
    }
    public function routes()
    {
        return $this->hasMany('App\Route');
    }
    public function drivers()
    {
        return $this->hasMany('App\Driver');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
