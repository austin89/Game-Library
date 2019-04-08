import $ from 'jquery';
import Controller from '@ember/controller';

export default Controller.extend({
	username: '',
	password: '',

	actions: {
		createProfile(){
			const username = this.username;
			const pass = this.password;

			const newUser = this.store.createRecord('user', {username: username, password: pass});
			newUser.save().then(response => {
				const form = document.getElementById("loginForm");
				const welcome = document.getElementById("welcome");
				form.hidden = true;
				welcome.style.color = "white";
				welcome.innerHTML = "Welcome, " + this.username + "!";
				welcome.hidden = false;

			})
		},

		login(){
			const username = this.username;
			const pass = this.password;

			const query = this.store.query('user', {
				filter: {
					username: username,
					password: pass
				}
			}).then(function(users){
				//This is where we stopped
				return users.get("firstObject");
			});

			if(query == null){
				alert("Incorrect info");
			}

		}
	},

	didInsertElement: function(){
		$(window).scroll(function(){
    	$(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  		});
	}
});
