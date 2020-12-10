<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report extends Model {
    protected $fillable = ['report_title, report_date'];
    public $timestamps = false;
    
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function courier()
    {
        return $this->belongsTo('App\Courier');
    }
    public function route()
    {
        return $this->belongsTo('App\Route');
    }
}
