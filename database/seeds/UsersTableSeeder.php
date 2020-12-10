<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
  public function run()
  {
    User::create([
      'name' => 'admin',
      'email' => 'admin@gmail.com',
      'phone' => '123123123',
      'first_name' => 'fashion',
      'last_name' => 'star',
      'zipcode' => 'aa111',
      'user_type' => '0',
      'password' => bcrypt('admin123'),
    ]);
  }
}
