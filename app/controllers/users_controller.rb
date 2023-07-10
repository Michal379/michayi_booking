class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]

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

  def destroy
    user = find_user
    user.destroy
    head :no_content
  end

  # New method for admin to manage hotels
  def manageHotels
    # Check if the current user is an admin
    unless current_user&.admin?
      render json: { error: "Unauthorized" }, status: :unauthorized
      return
    end

    # Perform the hotel management actions (add/create, update, delete) based on params or request payload
    case params[:action_type]
    when "create"
      hotel = Hotel.new(hotel_params)
      if hotel.save
        render json: hotel, status: :created
      else
        render json: { errors: hotel.errors.full_messages }, status: :unprocessable_entity
      end

    when "update"
      hotel = find_hotel
      if hotel.update(hotel_params)
        render json: hotel
      else
        render json: { errors: hotel.errors.full_messages }, status: :unprocessable_entity
      end

    when "delete"
      hotel = find_hotel
      hotel.destroy
      head :no_content
    else
      render json: { error: "Invalid action type" }, status: :unprocessable_entity
    end
  end

  private

  
  def authenticate_admin
    unless current_user&.admin?
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

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
