class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :topic, :content

  belongs_to :user
end
