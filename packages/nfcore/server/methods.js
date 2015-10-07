Meteor.methods({
  askQuestion: function(userId, question) {
    check(userId, String);
    check(question, {
      owner: String,
      content: String,
      type: String
    });
    var userRole = Accounts.findOne({_id: userId}).role;
    if (userRole === question.type) {
      Questions.insert(question);
    } else {
      throw new Meteor.Error(403, "Role dismatch.");
    }
  },

  addUser: function(user){
    check(user, { name: String, role: String });
    if (_.contains(['Add', 'Sub', 'Multi'], user.role)) {
      Accounts.insert(user);
    } else {
      throw new Meteor.Error(403, "Invalid Role");
    }
  }
});

