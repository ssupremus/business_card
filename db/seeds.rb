# frozen_string_literal: true

Skill.create(
  [
    {
      title: 'Ruby on Rails',
      start_date: Date.new(2018, 11, 5),
      level: :professional,
      position: 1
    },
    {
      title: 'C',
      start_date: Date.new(2018, 1, 26),
      level: :very_good,
      position: 2
    },
    {
      title: 'C++',
      start_date: Date.new(2018, 9, 28),
      level: :limited,
      position: 3
    },
    {
      title: 'Swift',
      start_date: Date.new(2019, 1, 20),
      level: :limited,
      position: 4
    },
    {
      title: 'HTML/CSS',
      start_date: Date.new(2011, 4, 29),
      level: :good,
      position: 5
    },
    {
      title: 'SQL',
      start_date: Date.new(2018, 6, 15),
      level: :good,
      position: 6
    },
    {
      title: 'React JS',
      start_date: Date.new(2019, 3, 7),
      level: :good,
      position: 7
    },
    {
      title: 'Stimulus JS',
      start_date: Date.new(2020, 9, 1),
      level: :very_good,
      position: 8
    },
    {
      title: 'MongoDB',
      start_date: Date.new(2019, 3, 7),
      level: :limited,
      position: 9
    },
    {
      title: 'Linux/Unix',
      start_date: Date.new(2018, 1, 26),
      level: :professional,
      position: 10
    },
    {
      title: 'Git',
      start_date: Date.new(2018, 1, 26),
      level: :professional,
      position: 11
    }
  ]
)

Experience.create(
  [
    {
      company: 'Svitla Systems, Inc.',
      start_date: Date.new(2018, 11, 5),
      end_date: nil,
      title: 'Ruby on Rails Developer',
      description: 'Development, testing, deployment and support of company\'s internal RoR projects.',
      tools: 'Ruby on Rails, HTML/CSS, JavaScript, CoffeeScript, jQuery, Stimulus, Elastic, EC2, Nginx, MySQL, Postgres'
    }
  ]
)
