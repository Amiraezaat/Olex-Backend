 
 
const colors = {
  danger: '\033[31m',
  info: '\033[32m',
  reset: '\033[0m',
  vivid: '\033[30;48;5;82m',
  highlight: '\033[92m',
  low: '\033[95m',
  Black: '\033[0;30m', // Black
  Red: '\033[0;31m', //Red
  Green: '\033[0;32m', // Green
  Yellow: '\033[0;33m', // Yellow
  Blue: '\033[0;34m', // Blue
  Purple: '\033[0;35m', // Purple
  Cyan: '\033[0;36m', //Cyan
  White: '\033[0;37m',
  BGreen:'\033[1;32m',  //Bold green
  BRed:'\033[1;31m' // bold red
}

 
module.exports = {
  dbConnection (mongoose) {
    // When successfully connected
    mongoose.connection.on('connected', () => {
      console.log(`${colors.BGreen}DB Connected successfully`)
    })

    // If the connection throws an error
    mongoose.connection.on('error', err => {
      console.log(`${colors.Red}Mongoose default connection error: ${err}`)
      console.log(
        `${colors.Yellow}=> ${colors.Red}if using local mongodb: make sure that mongo server is running \n`+
          `${colors.Yellow}=> ${colors.Red}if using online mongodb: check your internet connection \n`
      )
    })

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
      console.log(`${colors.BRed}Mongoose default connection disconnected`)
    })
  }
}
