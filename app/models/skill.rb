# frozen_string_literal: true

class Skill < ApplicationRecord
  acts_as_list
  validates :title, presence: true
  validates :level, presence: true
  validates :start_date, presence: true
  enum level: %i[limited good very_good professional]
end
