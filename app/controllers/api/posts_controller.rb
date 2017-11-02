class Api::PostsController < ApplicationController
  def index
    @posts = City.find(params[:city_id]).posts

    render json: @posts
  end

  def show
    @post = Post.find(params[:id])

    render json: @post
  end

  def create
    @city = City.find(params[:city_id])
    @post = Post.new(post_params)

    @city.posts << @post
    @city.save!

    render json: @post
  end

  def update
    post = Post.find(params[:id])
    post.update!(post_params)

    render json: @post
  end

  def destroy
    @post = Post.find(params[:id]).delete

    render status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:user, :content)

  end

end
