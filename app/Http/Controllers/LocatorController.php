<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class LocatorController extends Controller
{
    public function __construct()
    {
        // $this->middleware('driverAuth');
    }
    public function getLocatorResults(Request $request) {
        $locatorUrl = "https://explorer.geowessex.com/plugins/general/core/HeaderBarSearchResults";
        $params = $request->all();
        $client = new Client();
        try {
            $res = $client->get($locatorUrl, [
                'verify' => false,
                'query' => $params
            ]);
        }
        catch (Exception $e) {
            throw new Exception($e->getResponse()->getBody());
        }
        return $res->getBody();
    }
}
