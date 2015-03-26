var tok;
if (Meteor.isClient) {
  // counter starts at 0
Session.setDefault('counter', 0);
http.call("GET","http://bella2.zenchi.co/gcm2.php",{params:{title:"Push Notification"}},function(result){console.log(result);});
Push.addListener('token', function(token) {
  	tok = JSON.stringify(token);
  	 console.log(tok);
  });
	setInterval(function(){
		ses = Session.get("counter");
		if(ses >= 60){
		   Session.set("counter",0);
		   
		}else{
		   Session.set("counter",ses + 1);
		}
		$("#ctr").html(Session.get('counter'));
		$("#result").html("Token: "+tok);
	  },1000);
	
  /*
  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      var res = HTTP.call("GET","",{params:{title:"Push Notification"}},function(result){console.log(result);});
    }
  });
  */
}

if (Meteor.isServer) {
  Meteor.startup(function () {
	
  });
  
}
