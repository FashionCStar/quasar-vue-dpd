<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Report;

class Courier extends Model {
    protected $fillable = ['courier_name'];
    public function reports()
    {
        return $this->hasMany('App\Report');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
