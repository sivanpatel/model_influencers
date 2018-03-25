class CreateInfluencers < ActiveRecord::Migration[5.1]
  def change
    create_table :influencers do |t|
      t.string :full_name
      t.string :instagram_username
      t.string :profile_image
      t.integer :followers
      t.float :engagement

      t.timestamps
    end
  end
end
