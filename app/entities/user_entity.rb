class UserEntity < Grape::Entity
  root 'user'
  # http://kzy52.com/entry/2014/11/19/235144
  expose :name, :email
end
