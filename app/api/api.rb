class API < Grape::API
  prefix "api"
  format :json

  before do
    header 'X-Base-Header', 'will be defined for all APIs that are mounted below'
  end

  mount User_API
end
