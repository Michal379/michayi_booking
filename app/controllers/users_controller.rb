class UsersController < ApplicationController
    
    def index
      users = User.all
      render json: users.to_json(except: [:created_at, :updated_at])
    end
  
    def show
      user = current_user
      if user
        render json: user
      else
        render json: { error: "Not authenticated" }, status: :unauthorized
      end
    end
  
    def create
      user = User.new(user_params)
      if user.save
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
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
    
    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end
  
    def user_params
      params.permit(:name, :email, :age, :nationality, :phone_number, :password)
    end
  end
  