

nconf = require('nconf');


var CronJob = require('cron').CronJob;
var job = new CronJob('0 * * * * *', function() {
  console.log('cronexecute')
  /*
   * Runs every weekday (Monday through Friday)
   * at 11:30:00 AM. It does not run on Saturday
   * or Sunday.
   */
  }, function () {
    /* This function is executed when the job stops */
  },
  true /* Start the job right now */
  );
