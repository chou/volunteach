class CreateTutorTopics < ActiveRecord::Migration
  def change
    create_table :tutor_topics do |t|
      t.integer :tutor_id
      t.integer :topic_id

      t.timestamps
    end
    add_index :tutor_topics, :tutor_id
    add_index :tutor_topics, :topic_id
  end
end
