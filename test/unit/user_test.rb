# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string(255)
#  lname           :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  location        :string(255)
#  session_token   :string(255)
#  facebook_id     :string(255)
#  phone_number    :string(255)
#  avg_rating      :float            default(0.0), not null
#  num_ratings     :integer          default(0), not null
#  available       :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
