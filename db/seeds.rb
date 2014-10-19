# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

board = Category.create(name:'Boarding')
catering = Category.create(name:'Catering')
tutoring = Category.create(name:'Tutoring')
seminar = Category.create(name:'Seminar')
car = Category.create(name:'Car Rental')

acar = Ad.create(name:'Car Rentals For Special Occasions',
  description:'Toyota GT 2000, Good Condition, White, With Insurance',
  price: 20000,
  image: 'Ads_1',
  contact_no:'09253101797',
  category_id:car.id)

aseminar = Ad.create(name:'Peppermint Rejuvination',
  description: 'Sabaw ka na ba? Then Rejuvinate',
  price: 1000,
  image: 'Ads_2',
  contact_no:'09259374838',
  category_id:seminar.id)

aboard = Ad.create(name: 'Katipunan Dormer',
  description:'In Katipunan Avenue, No Curfew, Free Amenities',
  image: 'Ads_3',
  price: 3500,
  gender: 'F',
  category_id: board.id)

atutor = Ad.create(name: 'Ace Review Center',
  description: '50% Off, Free Trial, To be mentored by legit La Salle and Adamson Professors',
  image: 'Ads_4',
  price:1000,
  contact_no: '09237484838',
  category_id: tutoring.id)

Ad.create(name:'Quack Docs',
  description: 'If the dots flash, you may have erectile dysfunction. Have a checkup today.',
  image: 'Ads_5',
  price:500,
  category_id: seminar.id)
Ad.create(name: 'Mang Larry\'s Isaw',
  description: 'It\'s the long one.',
  image: 'Ads_6',
  price: 1000,
  category_id: catering.id)
Ad.create(name: 'Action Theraphy',
  image: 'Ads_7',
  description: 'Rejuvinate and Eject the negative emotions in our therapist sessions',
  price:200,
  contact_no: '09237846174',
  category_id: seminar.id)
