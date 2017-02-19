from birdy.twitter import UserClient

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
	users = ['katyperry', 'justinbieber', 'BarackObama', 'taylorswift13', 'rihanna', 'YouTube', 'TheEllenShow', 'ladygaga', 'Twitter', 'jtimberlake']
	tweets = []

	# DO SOME WORK
	response = resource.get(screen_name = users[0], count = 40)
	print(response.data)

	tweets.append(response)


main()
