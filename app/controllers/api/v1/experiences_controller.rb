# frozen_string_literal: true

class Api::V1::ExperiencesController < ApplicationController
  include ActionView::Helpers::TextHelper

  def index
    render json: experiences
  end

  private

  def experiences
    Experience.all.map do |experience|
      experience_object(experience)
    end
  end

  def experience_object(experience)
    { id: experience.id,
      company: experience.company,
      start_date: experience.start_date.to_date,
      end_date: experience.end_date&.to_date || 'Now',
      duration: duration(experience.start_date, experience.end_date),
      title: experience.title,
      description: experience.description,
      tools: experience.tools }
  end

  def duration(start_date, end_date)
    end_date ||= Time.now
    months = (end_date - start_date).to_i / 1.month
    years = months / 12
    months = months % 12
    string = ''

    string += pluralize(years, 'yr') if years.positive?
    string += " #{pluralize(months, 'mo')}" if months.positive?

    string.strip
  end
end
