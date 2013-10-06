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
  topic3 = Topic.create!(name: "Precalculus", category: "Math")
  topic4 = Topic.create!(name: "Calculus", category: "Math")
  
  topic6 = Topic.create!(name: "Spanish", category: "Languages")
  topic7 = Topic.create!(name: "French", category: "Languages")
  topic8 = Topic.create!(name: "German", category: "Languages")
  topic9 = Topic.create!(name: "Mandarin", category: "Languages")
  topic10 = Topic.create!(name: "Japanese", category: "Languages")
  topic11 = Topic.create!(name: "Italian", category: "Languages")

  topic12 = Topic.create!(name: "Biology", category: "Science")
  topic13 = Topic.create!(name: "Chemistry", category: "Science")
  topic14 = Topic.create!(name: "Physics", category: "Science")
  topic15 = Topic.create!(name: "Anatomy", category: "Science")

  topic16 = Topic.create!(name: "Biology", category: "Science")
  topic17 = Topic.create!(name: "Chemistry", category: "Science")
  topic18 = Topic.create!(name: "Physics", category: "Science")
  topic19 = Topic.create!(name: "Anatomy", category: "Science")

  User.all.each do |u| 
    Topic.all.sample(5).each do |t|
      TutorTopic.create!(tutor_id: u.id, topic_id: t.id)
    end
  end

  meeting1 = Meeting.create!(
    tutor_id: user1.id, 
    student_id: user3.id, 
    topic_id: user1.topics.first.id
  )
  meeting3 = Meeting.create!(
    tutor_id: user2.id, 
    student_id: user4.id,
    topic_id: user2.topics.first.id
  )
end