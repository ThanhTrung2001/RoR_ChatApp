class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    # create_table :users do |t|
    #   t.string :username
    #   t.string :password_digest

    #   t.timestamps
    remove_column :users, :string
    end
  end
end
