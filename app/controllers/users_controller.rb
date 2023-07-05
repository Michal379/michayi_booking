class UsersController < ApplicationController
    
    def index
      users = User.all
      render json: users.to_json(except: [:created_at, :updated_at])
    end
  
    def show
      user = find_user
      render json: user.to_json(except: [:created_at, :updated_at])
    end
  
    def create
      user = User.create(user_params)
      render json: user, status: :created
    end
  
    def update
      user = find_user
      user.update(user_params)
      render json: user.to_json(except: [:created_at, :updated_at])
    end
  
    def destroy
      user = find_user
      user.destroy
      head :no_content
    end
  
    private
  
    def find_user
      User.find_by(id: params[:id])
    end
  
    def user_params
      params.permit(:name, :email, :age, :nation, :phone_number, :password)
    end
  end
  