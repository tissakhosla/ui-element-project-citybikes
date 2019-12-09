# ui-element-project-citybikes

## Purpose
This ui element receives information from the "CityBikes" bike sharing network. 
It accounts for bikeshare services and companies around the world, and lays out their information
in a clean database. In this instance, we are using solely data for Washington, DC's bikeshare 
service, Capitol BikeShare, run by Motivate Inc. 

## UI
The user will search for a street in the DMV area to search for bikeshare station intersections on that street. 
The user can then select one and see information about that particular station. 

## Challenges
0. Figuring out how to eliminate previous search results. 
0. Scope issues with fetch, and when to fetch. Seems to be better to do the fetch only when neccessary as opposed to at the beginning?
0. Charts :()
0. Other APIs

## API
http://api.citybik.es/v2/
Gathers data from every bikeshare service/company in the world, with mostly consistent inormation across the cities. 
This one focuses on Washington, DC. 

## -- Screenshots -- 
# On load:
![Page on load](page_load.png)

# On Clicks
![On Clicks](on_clicks.png)

testing deployment Sun 12/8/2019 7:40PM
