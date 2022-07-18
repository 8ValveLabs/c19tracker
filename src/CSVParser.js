const d3 = require('d3')
global.fetch = require("node-fetch");
class CSVParser {
    constructor() {
      this.DATA_URL = "https://health-infobase.canada.ca/src/data/covidLive/covid19.csv";
      this.UPDATE_URL = "https://health-infobase.canada.ca/src/data/covidLive/covid19-updateTime.csv";
      var tstamp;
      d3.csv(this.UPDATE_URL)
      .then(data => data['columns'][0])
      .then(data => tstamp = data)
      console.log(tstamp)
    }

    getTimeStamp(){
			console.log(this.timestamp);
    }
  }
  
  parser = new CSVParser();
  parser.getTimeStamp();