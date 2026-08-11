const dToR = Math.PI/180;
const twopi = 2.0 * Math.PI;

/**
 * Retrieves the daynumber of the specified date
 * @param date supports both local time and utc
 * @returns daynumber, 1.1. is day 1
 */
 getDayOfYear = (date)=>{
    var now = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now.getTime() - start.getTime();
    var oneDay = 864e5 ;//1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day + 1; // 1.1. should be day 1
}

class Sun
{
    constructor()
    {
        // Vienna:
        this.longitude = -86.793620; 
        this.latitude = 20.467558;
    }
    
    /**
     * Calculates the sun position
     * @param date sunposition at date
     * @returns a 2d vector, .x is the azimuth (horizontal angle), .y is the elevation angle, both in radians
     */
     calc(date)
     {
          let hour = date.getUTCHours();
          let minute = date.getUTCMinutes();
          let second = date.getUTCSeconds();
          let ms = date.getUTCMilliseconds();
          let dHour = hour + minute / 60 + second / 3600 + ms / 36e5; //(3600.0 * 1000.0);
          let year = date.getUTCFullYear();
          let delta = year - 1949;
          //let isLeap = Sun.isLeapYear(year);
          let leap = delta / 4;
          /*
          let leap = 0;
          for(let i=1949;i<year;i++)
          {
              if(this.isLeapYear(i)) leap++;
          }
          */
          let day = getDayOfYear(date);
 
          let jd = 32916.5 + delta*365 + leap + day + dHour / 24;
          let t = jd - 51545;
 
          // mean longitude:
          let mnl = 280.460 + 0.9856474 * t;
          mnl = mnl % 360;
          if(mnl < 0.0) mnl += 360;
 
          // mean anomaly:
         let mna = 357.528 + 0.9856003 * t;
         mna = mna % 360;
         if(mna < 0) mna += 360;
         mna = mna * dToR;
 
         // Ecliptic longitude and obliquity of ecliptic
         let eclong = mnl + 1.915 * Math.sin(mna) + 0.02 * Math.sin(2*mna);
         eclong = eclong % 360;
         if(eclong < 0) eclong += 360;
         let oblqec = 23.439 - 0.0000004 * t;
         eclong = eclong * dToR;
         oblqec = oblqec * dToR;
 
         // Celestial coordinates
         // Right ascension and declination
         let num = Math.cos(oblqec) * Math.sin(eclong);
         let den = Math.cos(eclong);
         let ra = Math.atan(num / den);
         if(den < 0) ra += Math.PI;
         if((den >= 0) && (num < 0)) ra += twopi;
         let dec = Math.asin(Math.sin(oblqec) * Math.sin(eclong));
 
         // Local coordinates
         // Greenwich mean sidereal time
         let gmst = 6.697375 + 0.0657098242 * t + dHour;
         gmst = gmst % 24;
         if(gmst < 0) gmst += 24;
 
         // Local mean sidereal time
         let lmst = gmst + this.longitude / 15;
         lmst = lmst % 24;
         if(lmst < 0) lmst += 24;
         lmst = lmst * 15 * dToR;
 
         // Hour angle
         let ha = lmst - ra;
         if(ha < -Math.PI) ha += twopi;
         if(ha > Math.PI) ha -= twopi;
 
         let lat = this.latitude * dToR;
 
         let el = Math.asin(Math.sin(dec) * Math.sin(lat) + Math.cos(dec) * Math.cos(lat) * Math.cos(ha));
         let az = Math.asin(-Math.cos(dec) * Math.sin(ha) / Math.cos(el));
 
          if (0 < Math.sin(dec) - Math.sin(el) * Math.sin(lat))
          {
             if(Math.sin(az) < 0) az = az + twopi;
         } else
         {
             az = Math.PI - az;
         }
 
         //el = el / this.deg2rad;
         //az = az / this.deg2rad;

         /*
         let sp = SunCalc.getPosition(date, this.latitude, this.longitude);
         el = sp.altitude;
         az = sp.azimuth;
         */
         
         return {x:az, y:el};
     }
 
     getDir(date)
     {         
        let angles = this.calc(date);
        return this.getDirFromAngles(angles);
     }

     getDirFromAngles(angles)
     {
        let sa = angles.y;
        let ha = angles.x + Math.PI;

        // adjusted, so that we are looking from north to south
        let sunDir = {z: Math.cos(sa) * Math.cos(ha),
        y : -Math.sin(sa),
        x : Math.cos(sa) * Math.sin(ha)};

        return sunDir;
     }

     /*
     isLeapYear(year)
     {
        if((year % 400) == 0) return 1;
		else
		{
			if((year % 100) == 0) return 0;
			else
			{
				return ((year % 4) == 0);
			}
		}    
     }
     */
}
