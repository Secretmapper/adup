class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads do |t|
      t.string :name
      t.text :description
      t.references :category
      #constraints
      t.string :image
      t.integer :price
      t.string :gender
      t.string :location

      t.boolean :approved
      t.boolean :show

      t.string :email
      t.string :contact_no
      t.timestamps
    end
  end
end
