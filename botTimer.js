/*
	Little script to time a bot
*/
module.exports = {
	default_setting:{
				wakeUp:6,     				//hours
				sleepDown:23, 				//hours

				eatStart:11,  				//hours
				eatTime:1,    				//hours
				eatStop:15,   				//hours
				eatCount:0,

				awake:false,  				//hours
				awaking:false,
				
				minIntervalRequestbyMin:15, //minutes
				minIntervalCount:0,

				procrastinationPower:30,	//minutes
				procrastinationCount:0,
				procrastination:false,
				
				collecteurURL:""
			 },
	
	setting:{},

	humanBehaviorGenerator:function (setting,execute){
		var now    = new Date()
		var hour   = now.getHours()
		var minute = now.getMinutes()

		// WAKE UP AND SLEEP
		if(now>setting.wakeUp && now>setting.sleepDown ){//&& awake==false && awaking==false){
			awake = true
			if(setting.minIntervalCount >= setting.minIntervalRequestbyMin){
				setting.minIntervalCount = 1
				var delai = Math.round(Math.random()*(setting.minIntervalRequestbyMin/3)*1000)
				//console.log("d",delai)
				setTimeout(function(){execute(setting)},delai)			
			}else{
				setting.minIntervalCount ++
			}
			console.log(setting.minIntervalCount)
		}else{
			console.log("Zzz.")
		}
	},
	
	start:function (execute,setting){

		console.log("Start the process of alert at "+new Date().getTime())

		if(typeof(setting)!='undefined'){
			this.setting = this.setting
		}else{
			this.setting = this.default_setting
		}
		var self = this
		var timer = setInterval(function(){
							//console.log(self.setting)
							self.humanBehaviorGenerator(self.setting,execute)
                        },1000);

	},
}
//	clearInterval(myVar);

                        