# frozen_string_literal: true

class Api::V1::SkillsController < ApplicationController
  include ActionView::Helpers::TextHelper

  def index
    skills = Skill.all.map do |skill|
      {
        id: skill.id,
        title: skill.title,
        years: years(skill.start_date),
        level: skill.level.humanize,
        position: skill.position
      }
    end

    render json: skills
  end

  private

  def years(start_date)
    months = (Time.now - start_date).to_i / 1.month
    years = months / 12
    months = months % 12
    string = ''

    string += pluralize(years, 'yr') if years.positive?
    string += " #{pluralize(months, 'mo')}" if months.positive?

    string.strip
  end
end
