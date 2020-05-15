class AddUrlToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :url, :string
  end
end
