class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.string :type
      t.string :title
      t.integer :position
      t.datetime :start_date
      t.integer :level
      t.timestamps
    end
  end
end
