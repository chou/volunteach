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

require 'test_helper'

class MeetingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
