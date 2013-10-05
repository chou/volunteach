object @user
attributes *(User.column_names - ["session_token", "password_digest"])
node(:topic_ids) { |u| u.topic_ids }
node(:role) { |u| u.role }
if @user.meeting
  child(:meeting) { attributes *(Meeting.column_names) }
else
  node(:meeting) { nil }
end
