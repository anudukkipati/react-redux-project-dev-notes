class DropUsers < ActiveRecord::Migration[6.0]
  def change
    drop_table :users do |t|
      t.string "name"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.foreign_key "notes"
    end
  end
end
