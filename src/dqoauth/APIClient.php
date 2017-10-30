<?php

namespace DQOAuth;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Subscriber\Oauth\Oauth1;

class APIClient
{
    protected $consumerKey;
    protected $consumerSecret;
    protected $accessToken;
    protected $accessTokenSecret;
    protected $apiurl;
    protected $stack;
    protected $middleware;
    protected $client;
    
    public function __construct($key, $secret, $apiurl) 
    {
        $this->consumerKey = $key;
        $this->consumerSecret = $secret;
        $this->accessToken = md5($key);
        $this->accessTokenSecret = md5($secret);
        $this->apiurl = $apiurl;
        
        $this->stack = HandlerStack::create();
        $this->middleware = new Oauth1([
            'consumer_key'    => $this->consumerKey,
            'consumer_secret' => $this->consumerSecret,
            'token'           => $this->accessToken,
            'token_secret'    => $this->accessTokenSecret
        ]);
        $this->stack->push($this->middleware);

        $this->client = new Client([
            'base_uri'  => $this->apiurl,
            'handler'   => $this->stack,
            'auth'      => 'oauth'
        ]);
    }
    
    public function getNewsList()
    {
        $res = $this->client->get('/api/native/v1/information?gameId=@self&sortOrder=desc');
        
        return $res->getBody();
    }
    
    public function getNewsDetail($id)
    {    
        $res = $this->client->get('/api/native/v1/information/detail/'.$id);
        return $res->getBody();
    }
}