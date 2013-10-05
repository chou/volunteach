class CreateMeetings < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.integer :tutor_id
      t.integer :student_id

      t.timestamps
    end
    add_index :meetings, :tutor_id
    add_index :meetings, :student_id
  end
end
