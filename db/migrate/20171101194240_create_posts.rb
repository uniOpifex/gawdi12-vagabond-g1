class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.text :content
      t.references :city, foreign_key: true
      t.string :user

      t.timestamps
    end
  end
end
