class CreateExperiences < ActiveRecord::Migration[6.1]
  def change
    create_table :experiences do |t|
      t.string :company
      t.datetime :start_date
      t.datetime :end_date
      t.string :title
      t.string :description
      t.string :tools
      t.timestamps
    end
  end
end
