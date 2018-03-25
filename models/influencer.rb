class Influencer < ActiveRecord::Base

  validates :full_name, presence: true
  validates :instagram_username, presence: true
  validates :profile_image, presence: true
  validates :followers, presence: true
  validates :engagement, presence: true
end
