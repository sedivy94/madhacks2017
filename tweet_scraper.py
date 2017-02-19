from birdy.twitter import UserClient
import pdb
import json

def main():
	# OAUTH CREDENTIALS
	CONSUMER_KEY = 'HeSXnulTdFaY4LDUYVSkAhShJ'
	CONSUMER_SECRET = 'mJL20SLAIAA8bxsarCMQPniVFf4H7wzZZ0hDqaJPPq0DlZc0hq'
	ACCESS_TOKEN = '368659891-W1YIbMYsyriNMzgv8GV4eK6PUqFqyxabwGoAViCI'
	ACCESS_TOKEN_SECRET = 'nyj4fOzlAXv7wvaWZfUJiwffDBAstGOOeATq7MyePUq6F'
	
	# LEVERAGING BIRDY API
	client = UserClient(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
	resource = client.api.statuses.user_timeline
	
	# DATA STRUCTURES FOR QUERIES
	users = ['katyperry', 'justinbieber', 'BarackObama', 'taylorswift13', 'rihanna', \
	'YouTube', 'TheEllenShow', 'ladygaga', 'Twitter', 'jtimberlake']
	user_tweets = []

	# SCRAPE TWEETS
	for name in users:
		response = resource.get(screen_name=name, count=40, exclude_replies=True, \
		contributor_details=True, include_rts=False)
		temp = []
		for index, tweet in enumerate(response.data):
			temp.append(tweet)
			print("Adding %dth last tweet by %s." % (index,name))
		user_tweets.append(temp)
	
	# PRUNE TWEETS
	for tweets in user_tweets:
		prune(tweets)

	# EXPORT TWEETS TO JSON
	with open('tweets.json', 'w') as outfile:
		for tweets in user_tweets:
			json.dump(tweets, outfile, sort_keys = True, indent = 4, ensure_ascii = False)
	
	pdb.set_trace()

def prune(tweets = [], k = 0):
	# REMOVING NON-NATIVE RETWEETS
	new = []
	for tweet in tweets:
		if 'RT' not in tweet['text']:
			new.append(tweet)
	
	# SORTING BY POPULARITY
	new.sort(key=lambda x: (x['retweet_count']))
	tweets = new[:10]

	# PRINTING FOR TESTING
	'''
	for tweet in new:
		print("Text:", tweet['text'])
		print("Retweets:", tweet['retweet_count'], '\n')
	'''

	return tweets

main()
