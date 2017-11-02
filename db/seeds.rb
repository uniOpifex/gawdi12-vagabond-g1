# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Post.destroy_all
City.destroy_all

city_data = {
    'atlanta' => {
        name: 'Atlanta',
        photo_url: 'http://www.gafollowers.com/wp-content/uploads/2015/10/090415_holiday_traffic_jp04.jpg',
    },
    'london' => {
        name: 'London',
        photo_url: 'http://www.cityam.com/assets/uploads/content/2016/10/scalpel2-581320113b9af.jpg'
    },
    'san_francisco' => {
        name: 'SanFrancisco',
        photo_url: 'http://static4.businessinsider.com/image/5408732f6bb3f7983e087eb1-1200-924/sf-hills.jpg'
    }
}

post_data = {
    'atlanta' => [
        {
            :user => 'OTPnative',
            :content => 'Traffic on 285 is the worst, why do people live in th city'
        },
        {
            :user => 'ITPnative',
            :content => 'There is nothing in the burbs, like everything is so far apart'
        },
        {
            :user => 'NonNative',
            :content => 'Like Im not from here but you got a traffic problem'
        }
    ],
    'london' => [
        {
            :user => 'NYUser1',
            :content => 'Some opinion on the new senic boulavard built on the south side'
        },
        {
            :user => 'NYUser2',
            :content => 'I have an opinion'
        },
        {
            :user => 'NYUSer3',
            :content => 'I find your opinion offensive'
        }
    ],
    'san_francisco' => [
        {
            :user => 'SFUser1',
            :content => 'SFUser1 post'
        },
        {
            :user => 'SFUser2',
            :content => 'SFUser2 post'
        },
        {
            :user => 'SFUser3',
            :content => 'SFUser3 post'
        }]
}

post_data.each_pair do |city_name, posts|

  info = city_data[city_name]
  current_city = City.create!({
      name: info[:name],
      photo_url: info[:photo_url]
  })
  posts.each do |post|
    puts post
    puts current_city.to_s
    puts current_city.id
    Post.create!({
        user: post[:user],
        content: post[:content],
        city: current_city
    })
  end
end
