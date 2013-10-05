# == Schema Information
#
# Table name: tutors
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  avg_rating  :float            default(0.0), not null
#  num_ratings :integer          default(0), not null
#  available   :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tutor < ActiveRecord::Base
  attr_accessible :user_id, :available
  validates :user_id, presence: true

  belongs_to :user
  has_many :tutor_topics
  has_many :topics, through: :tutor_topics, source: :topic

  def add_rating(rating)
    ratings = num_ratings * avg_rating
    self.num_ratings += 1
    self.avg_rating = (ratings + rating) / num_ratings
    save!
  end
end
