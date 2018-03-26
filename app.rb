require 'sinatra'
require 'sinatra/activerecord'
require './models/influencer.rb'
require 'json'

before do
end

get '/influencers' do
  content_type 'application/json'
  @influencers = Influencer.all
  @influencers.to_json
end

get '/' do
  send_file 'views/index.html'
end
