import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  user.challenges = []
  user.starCount = 0
  user.teamId = 'Unassigned'

  return user;
});
