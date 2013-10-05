# == Schema Information
#
# Table name: tutor_topics
#
#  id         :integer          not null, primary key
#  tutor_id   :integer
#  topic_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TutorTopic < ActiveRecord::Base
  attr_accessible :topic_id, :tutor_id

  validates :topic_id, :tutor_id, presence: true

  belongs_to :tutor, class_name: "User"
  belongs_to :topic

end
