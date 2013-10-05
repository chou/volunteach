# == Schema Information
#
# Table name: topics
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  category   :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Topic < ActiveRecord::Base
  attr_accessible :category, :name

  validates :category, :name, presence: true

  has_many :tutor_topics, dependent: :destroy
  has_many :tutors, through: :tutor_topics, source: :tutor
  has_many :meetings
end
