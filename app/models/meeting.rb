# == Schema Information
#
# Table name: meetings
#
#  id         :integer          not null, primary key
#  tutor_id   :integer
#  student_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Meeting < ActiveRecord::Base
  attr_accessible :student_id, :tutor_id

  validates :tutor_id, :student_id, presence: true

  belongs_to :tutor
  belongs_to :student, :class_name => "User"

end
