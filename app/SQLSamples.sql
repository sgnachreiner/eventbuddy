USE test;

# To add values to user table (sample)
INSERT INTO users(userName, password, name)
	VALUES("juandavid", "1234", "Juan David Dominguez"); # Consider hashing password

# To add values to event table (sample)
INSERT INTO events
VALUES("shanach", "Big Hero 6", 42.053411, -87.672428,
	STR_TO_DATE('11-23-2014 21:00:00', '%c-%e-%Y %T'),
    STR_TO_DATE('11-23-2014 23:00:00', '%c-%e-%Y %T'));

# To find matches within time and location range according to new event
SELECT *
FROM events
WHERE
	userName != @newUserName
	AND movieName = @newMovieName
    AND
		(@newLowerTime <= upperTime
		AND lowerTime <= @newUpperTime)
    AND
	(
		SQRT(
			POW(@newLatitude - latitude, 2)
			+ POW(@newLongitude - longitude, 2)
		)
    ) < 0.25 # 0.25 degrees is approx 16 miles near the Tropic of Cancer
;