class AdController < ApplicationController
  def index

  end
  def view
    
  end
  def submit

  end
  def create
  end
  def all
    render :json => Ad.all
  end
  def allCategories
    render :json => Category.all
  end
end
