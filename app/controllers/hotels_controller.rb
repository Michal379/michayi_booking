class HotelsController < ApplicationController
    def index 
        hotels = Hotel.all
        render json: hotels.to_json(except: [:created_at, :updated_at])
    end
    
    def show
        hotel = find_hotel
        render json: hotel.to_json(except: [:created_at, :updated_at])
    end

    def create
        hotel = Hotel.create(hotel_params)
        render json: hotel, status: :created
    end

    def update
        hotel = find_hotel
        hotel.update(hotel_params)
        render json: hotel
    end

    def destroy
        hotel =find_hotel
        hotel.destroy
        head :no_content
    end

    private

    def find_hotel
        Hotel.find_by(id: params[:id])
    end

    def hotel_params
        params.permit(:name, :address, :description, :amenities, :image, :rating)
    end
end
