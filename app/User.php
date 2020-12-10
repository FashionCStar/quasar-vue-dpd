<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail{
    use HasApiTokens, SoftDeletes, Notifiable;

//    protected $fillable = ['name', 'avatar', 'email', 'phone', 'password', 'company', 'first_name', 'last_name', 'zipcode', 'user_type', 'is_active'];
    protected $fillable = ['name', 'email', 'phone', 'password', 'first_name', 'last_name', 'zipcode', 'user_type'];

    protected $hidden = ['password', 'remember_token'];

    public function reports() {
        return $this->hasMany('App\Report');
    }
    public function routes() {
        return $this->hasMany('App\Route');
    }
    public function couriers() {
        return $this->hasMany('App\Courier');
    }
}
