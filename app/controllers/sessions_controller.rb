class SessionsController < ApplicationController

  # users
    def create
      user = User.find_by(name: params[:name])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { error: "Invalid username or password" }, status: :unauthorized
      end
    end
  
    def destroy
      session[:user_id] = nil
      head :no_content
    end

    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
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
  