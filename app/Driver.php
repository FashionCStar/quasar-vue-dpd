<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use App\Report;

class Driver extends Authenticatable {
    use HasApiTokens, Notifiable;
    protected $table = 'drivers';
    protected $guard = 'driver';
    protected $fillable = ['user_id', 'full_name', 'driver_name', 'email', 'password', 'phone', 'pay_amount', 'pay_type', 'vat_percentage', 'has_access'];
    protected $hidden = [
        'password'
    ];
    public function reports()
    {
        return $this->hasMany('App\Report');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
