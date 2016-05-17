Recipes = new Meteor.Collection('recipes');

Recipes.allow({
  insert: function(userId, doc){
    return !!userId;
  }
});

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },desc: {
    type: String,
    label: "Decsription"
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }

}); 

Recipes.attachSchema(RecipeSchema);