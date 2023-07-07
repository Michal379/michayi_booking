class SessionsController < ApplicationController
  before_action :authenticate_user, only: [:select_room, :get_selected_room]
  before_action :set_prompt_message, only: [:get_selected_room]


  # users
  def create
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { user: user, message: "Login successful" }
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end
  
    def destroy
      session.delete :user_id
      render json: {message: "Logout successful"}, status: :ok
    end

    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
      end

      def set_prompt_message
        @prompt_message = !current_user
      end

      # rooms
      def select_room
        room = Room.find(params[:id])
        session[:selected_room_id] = room.id
        render json: { message: 'Room selected' }
      end
    
      def get_selected_room
        if session[:selected_room_id]
          room = Room.find(session[:selected_room_id])
          render json: room.to_json(except: [:created_at, :updated_at])
        else
          render json: { message: 'No room selected' }
        end
      end
  end
  