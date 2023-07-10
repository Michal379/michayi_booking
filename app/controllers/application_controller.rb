class ApplicationController < ActionController::API
  before_action :authenticate_user
  before_action :authenticate_admin, only: [:destroy] # Add this line

  private

  def authenticate_user
    unless current_user
      render json: { error: "Not authenticated" }, status: :unauthorized
    end
  end

  def authenticate_admin
    unless current_user&.admin?
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
end
