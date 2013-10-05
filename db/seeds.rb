# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do 

  user1 = User.create!(fname: "Fire", lname: "Arson", 
    email: "firearson@mailinator.com", password: "password",
    phone_number: "5554443333")


  user2 = User.create!(fname: "Water", lname: "Spray", 
    email: "waterspray@mailinator.com", password: "password",
    phone_number: "6665554444")

  user3 = User.create!(fname: "Earth", lname: "Quake", 
    email: "earthquake@mailinator.com", password: "password",
    phone_number: "7776665555")

  user4 = User.create!(fname: "Wind", lname: "Breeze", 
    email: "windbreeze@mailinator.com", password: "password",
    phone_number: "8887776666")

  topic1 = Topic.create!(name: "Algebra", category: "Math")
  topic2 = Topic.create!(name: "Geometry", category: "Math")
  topic3 = Topic.create!(name: "Calculus", category: "Math")

  tutor_topic1 = TutorTopic.create!(tutor_id: user1.id, topic_id: topic1.id)
  tutor_topic2 = TutorTopic.create!(tutor_id: user2.id, topic_id: topic2.id)
  tutor_topic3 = TutorTopic.create!(tutor_id: user3.id, topic_id: topic1.id)

  meeting1 = Meeting.create!(tutor_id: user1.id, student_id: user3.id)
  meeting3 = Meeting.create!(tutor_id: user2.id, student_id: user4.id)
end