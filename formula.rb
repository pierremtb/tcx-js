
# See http://en.wikipedia.org/wiki/Imperial_units
# 'meters_per_imperial_mile' is the basis for the following calculations

meters_per_imperial_mile = 1609.344
km_per_mile  = meters_per_imperial_mile / 1000.0
miles_per_km = 1.0 / km_per_mile

feet_per_km  = miles_per_km * 5280.0
yds_per_km   = miles_per_km * (5280.0 / 3.0)
feet_per_m   = feet_per_km / 1000.0

puts "meters_per_imperial_mile:  #{meters_per_imperial_mile}"
puts "km_per_mile:  #{km_per_mile}"
puts "miles_per_km: #{miles_per_km}"
puts "yds_per_km:   #{yds_per_km}"
puts "feet_per_km:  #{feet_per_km}"
puts "feet_per_m:   #{feet_per_m}"
