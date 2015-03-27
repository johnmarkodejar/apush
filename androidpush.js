var tok;
if (Meteor.isClient) {
  // counter starts at 0
Session.setDefault('counter', 0);
Push.addListener('token', function(token) {
  	tok = JSON.stringify(token);
  	 console.log(tok);
  });
	setInterval(function(){
		ses = Session.get("counter");
		if(ses >= 60){
		   Session.set("counter",0);
 		   

		var res = Push.send({
		  from: 'JM',
		  title: 'Push Using Push',
		  text: 'It is Time!',
		  query: {},
		  token:tok
		});
		console.log(res);
		Push.allow({
			send: function(userId, notification) {
			    return true; // Allow all users to send
			}
		    });
		}else{
		   Session.set("counter",ses + 1);
		}
		$("#ctr").html(Session.get('counter'));
		$("#result").html("Token: "+tok);
	  },1000);
	



}

if (Meteor.isServer) {
  Meteor.startup(function () {
	
  });
  Meteor.methods({
  'remoteGet' : function(url,options){
    return HTTP.get(url,options);
  }
});
}
