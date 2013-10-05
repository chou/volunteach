object @user
attributes *(User.column_names - ["session_token", "password_digest"])
node(:topic_ids) { |u| u.topic_ids }