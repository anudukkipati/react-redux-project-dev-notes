class Note < ApplicationRecord
  belongs_to :user

  validates :title, :topic, :content, presence:true
end
