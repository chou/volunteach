# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do 

  user1 = User.create!(fname: "Alice", lname: "Example", 
    email: "alice@a.com", password: "password",
    phone_number: "5554443333", lat:37.7976769, lng:-122.3943387)


  user2 = User.create!(fname: "Bob", lname: "Example", 
    email: "bob@b.com", password: "password",
    phone_number: "6665554444", lat:37.789256, lng:-122.401407)

  user3 = User.create!(fname: "Carol", lname: "Example", 
    email: "carol@c.com", password: "password",
    phone_number: "7776665555", lat:37.784991, lng:-122.406857)

  user4 = User.create!(fname: "Dave", lname: "Example", 
    email: "dave@d.com", password: "password",
    phone_number: "8887776666", lat:37.779528, lng:-122.413756)

  topic1 = Topic.create!(name: "Algebra", category: "Math")
  topic2 = Topic.create!(name: "Geometry", category: "Math")
  topic3 = Topic.create!(name: "Calculus", category: "Math")

  tutor_topic1 = TutorTopic.create!(tutor_id: user1.id, topic_id: topic1.id)
  tutor_topic2 = TutorTopic.create!(tutor_id: user2.id, topic_id: topic2.id)
  tutor_topic3 = TutorTopic.create!(tutor_id: user3.id, topic_id: topic1.id)

  meeting1 = Meeting.create!(tutor_id: user1.id, student_id: user3.id)
  meeting3 = Meeting.create!(tutor_id: user2.id, student_id: user4.id)
end