class CreateTutors < ActiveRecord::Migration
  def change
    create_table :tutors do |t|
      t.integer :user_id
      t.float :avg_rating, :default => 0, :null => false
      t.integer :num_ratings, :default => 0, :null => false
      t.boolean :available, :default => false, :null => false

      t.timestamps
    end
    add_index :tutors, :user_id
  end
end
