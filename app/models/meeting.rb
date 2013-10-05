# == Schema Information
#
# Table name: meetings
#
#  id         :integer          not null, primary key
#  tutor_id   :integer
#  student_id :integer
#  topic_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Meeting < ActiveRecord::Base
  attr_accessible :student_id, :tutor_id, :topic_id

  validates :tutor_id, :student_id, presence: true
  validates :tutor_id, :student_id, uniqueness: true

  validate :student_and_tutor_not_in_meeting

  def student_and_tutor_not_in_meeting
    unless Meeting.where(student_id: tutor_id).count == 0
      errors.add(:base, "Tutor is currently a student")
    end
    unless Meeting.where(tutor_id: student_id).count == 0
      errors.add(:base, "Student is currently a tutor")
    end
  end

  belongs_to :tutor, class_name: "User"
  belongs_to :student, class_name: "User"
  belongs_to :topic

end
