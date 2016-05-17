Meteor.subscribe('recipes');

Template.Recipes.helpers({
  recipes: ()=> {
    return Recipes.find({});
  }
});

// console.log(Meteor.settings.public.ga.account);