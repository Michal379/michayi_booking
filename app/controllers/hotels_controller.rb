class HotelsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :show]
    before_action :authenticate_admin, only: [:create, :update, :destroy]
    
    def index
      hotels = Hotel.all
      render json: hotels.to_json(except: [:created_at, :updated_at])
    end
  
    def show
      hotel = find_hotel
      render json: hotel.to_json(except: [:created_at, :updated_at])
    end
  
    def create
      hotel = Hotel.new(hotel_params)
      if hotel.save
        render json: hotel.to_json(except: [:created_at, :updated_at]), status: :created
      else
        render json: { error: "Failed to create hotel" }, status: :unprocessable_entity
      end
    end
  
    def update
      hotel = find_hotel
      if hotel.update(hotel_params)
        render json: hotel.to_json(except: [:created_at, :updated_at])
      else
        render json: { error: "Failed to update hotel" }, status: :unprocessable_entity
      end
    end
  
    def destroy
      hotel = find_hotel
      if hotel.destroy
        head :no_content
      else
        render json: { error: "Failed to delete hotel" }, status: :unprocessable_entity
      end
    end
  
    private
  
    def authenticate_admin
      unless current_user&.admin?
        render json: { error: "Unauthorized" }, status: :unauthorized
      end
    end
  
    def find_hotel
      Hotel.find_by(id: params[:id])
    end
  
    def hotel_params
      params.require(:hotel).permit(:name, :address, :description)
    end
  end
  