require 'sinatra'
require 'sinatra/activerecord'
require './models/influencer.rb'
require 'json'

before do
  content_type 'application/json'
end

get '/influencers' do
  @influencers = Influencer.all
  @influencers.to_json
end

