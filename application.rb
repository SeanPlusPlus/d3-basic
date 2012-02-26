# myapp.rb
require 'sinatra'

get '/' do
  '<p><a href="/vertical.html">vertical</a></p><p><a href="/horizontal.html">horizontal</a></p>'
end
