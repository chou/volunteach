# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131005090026) do

  create_table "meetings", :force => true do |t|
    t.integer  "tutor_id"
    t.integer  "student_id"
    t.integer  "topic_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "meetings", ["student_id"], :name => "index_meetings_on_student_id", :unique => true
  add_index "meetings", ["tutor_id"], :name => "index_meetings_on_tutor_id", :unique => true

  create_table "topics", :force => true do |t|
    t.string   "name"
    t.string   "category"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "tutor_topics", :force => true do |t|
    t.integer  "tutor_id"
    t.integer  "topic_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "tutor_topics", ["topic_id"], :name => "index_tutor_topics_on_topic_id"
  add_index "tutor_topics", ["tutor_id"], :name => "index_tutor_topics_on_tutor_id"

  create_table "users", :force => true do |t|
    t.string   "fname"
    t.string   "lname"
    t.string   "email"
    t.string   "password_digest"
    t.float    "lat"
    t.float    "lng"
    t.string   "session_token"
    t.string   "facebook_id"
    t.string   "phone_number"
    t.float    "avg_rating",      :default => 0.0,   :null => false
    t.integer  "num_ratings",     :default => 0,     :null => false
    t.boolean  "available",       :default => false, :null => false
    t.datetime "created_at",                         :null => false
    t.datetime "updated_at",                         :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["facebook_id"], :name => "index_users_on_facebook_id", :unique => true
  add_index "users", ["lat", "lng"], :name => "index_users_on_lat_and_lng"
  add_index "users", ["session_token"], :name => "index_users_on_session_token", :unique => true

end
