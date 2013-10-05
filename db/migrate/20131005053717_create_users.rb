class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fname
      t.string :lname
      t.string :email
      t.string :password_digest
      t.float :lat
      t.float :lng
      t.string :session_token
      t.string :facebook_id
      t.string :phone_number
      t.float :avg_rating, :default => 0, :null => false
      t.integer :num_ratings, :default => 0, :null => false
      t.boolean :available, :default => false, :null => false

      t.timestamps
    end

    add_index :users, [:lat, :lng]
    add_index :users, :facebook_id, :unique => true
    add_index :users, :email, :unique => true
    add_index :users, :session_token, :unique => true
  end
end

