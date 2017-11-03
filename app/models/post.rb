class Post < ApplicationRecord
  belongs_to :city
  validates :content, length: { in: 1..200 }
  validates :user, presence: true
  
end
