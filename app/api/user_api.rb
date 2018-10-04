
class User_API < Grape::API
  resource :users do

    desc "/api/users"
    # params do
    #   requires :email, type: String
    #   requires :password, type: String
    # end
    get '/' do
      user = User.all
      # user = User.find_by(email: params[:email])
      present user, with: UserEntity
    end

    desc "/api/users/singn_in"
    params do
      requires :email, type: String
      requires :password, type: String
    end
    post '/singn_in' do
      user = User.find_by(email: params[:email])
      error!("Unauthorized! Invalid token.", 401) if user.nil? || user.password != params[:password]
      present user, with: UserEntity
    end
    desc "/api/users/singn_in"
    options '/singn_in' do
      # user = User.find_by(email: params[:email])
    end
    # helpers do
    #   def document_params
    #     ActionController::Parameters.new(params).permit(:user_id, :content, :title)
    #     #ここでstrong_parametersの設定
    #   end
    # end
    #
    # #全件取得
    # desc "returns all documents"
    # # http://localhost:3000/api/document
    # get do
    #   Document.all
    # end
    #
    # #ID単一取得
    # desc "return a document"
    # params do
    #   requires :id, type: Integer
    # end
    # # http://localhost:3000/api/documents/{:id}
    # get ':id' do
    #   Document.find(params[:id])
    # end
    #
    # desc "create a document"
    # params do
    #   requires :content, type: String
    #   requires :title, type: String
    #   requires :user_id, type: Integer
    # end
    # # http://localhost:3000/api/document
    # post do
    #   document = Document.new(document_params)
    #   #ここでStrongParameterを用いたオブジェクトの作成
    #   document.save
    # end
    #
    # desc "edit a document"
    # # http://localhost:3000/api/documents/{:id}
    # params do
    #   optional :content, type: String
    #   optional :title, type: String
    # end
    # patch ':id' do
    #   document = Document.find(params[:id])
    #   document.content = params[:content] if params[:content].present?
    #   document.title = params[:title] if params[:title].present?
    #   document.save
    # end
    #
    # desc "delete a document"
    # # http://localhost:3000/api/documents/{:id}
    # params do
    #   requires :id, type: Integer
    # end
    # delete ':id' do
    #   document = Document.find(params[:id])
    #   document.destroy
    # end
  end
end
