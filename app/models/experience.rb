# frozen_string_literal: true

class Experience < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :company, presence: true
  validates :start_date, presence: true
end
