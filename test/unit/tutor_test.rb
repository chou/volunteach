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

require 'test_helper'

class TutorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
