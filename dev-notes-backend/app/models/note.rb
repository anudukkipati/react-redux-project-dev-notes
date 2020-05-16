class Note < ApplicationRecord
 

  validates :title, :topic, :content, presence:true
end
