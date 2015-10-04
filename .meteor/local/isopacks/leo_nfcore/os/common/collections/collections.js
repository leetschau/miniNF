NFCore.Collections.Accounts = Accounts = this.Accounts = new Mongo.Collection("accounts");
NFCore.Collections.Accounts.attachSchema(NFCore.Schemas.Accounts);

NFCore.Collections.Questions = Questions = this.Questions = new Mongo.Collection("questions");
NFCore.Collections.Questions.attachSchema(NFCore.Schemas.Questions);
