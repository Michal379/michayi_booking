class RoomsController < ApplicationController
    def index
      rooms = Room.all
      render json: rooms.to_json(except: [:created_at, :updated_at])
    end
  
    def show
      room = Room.find(params[:id])
      render json: room.to_json(except: [:created_at, :updated_at])
    end
  
    def create
      room = Room.new(room_params)
      if room.save
        render json: room, status: :created
      else
        render json: { errors: room.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      room = Room.find(params[:id])
      if room.update(room_params)
        render json: room.to_json(except: [:created_at, :updated_at])
      else
        render json: { errors: room.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      room = Room.find(params[:id])
      room.destroy
      head :no_content
    end

    def hotel_rooms
      hotel = Hotel.find(params[:hotelId])
      rooms = hotel.rooms
      render json: rooms.to_json(except: [:created_at, :updated_at])
    end
  
    private
  
    def room_params
      params.permit(:hotel_id, :type, :capacity, :price)
    end
  end
  