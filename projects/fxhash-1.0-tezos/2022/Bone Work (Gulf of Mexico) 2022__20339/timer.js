class Timer
{
    constructor()
    {
        this.startDate = new Date();
        //this.dt = 1/30; // do we need this anywhere???
        //this.prevRuntime = 0; // if we dont need dt, we also dont need prevRuntime
        this.tchange = fxrand()*3600;
    }

    update()
    {
        var now = new Date();
        var elapsed = now.getTime() - this.startDate.getTime();
        if(elapsed > 108e6) {// seconds of 1.25 days
            //this.prevRuntime = -this.dt;
            this.runtime = 0;
            this.startDate = now; // leave dt unmodified
            console.log('Timer: resetting timer');
            return;
        }        
        var new_runtime = elapsed / 1e3;
        //this.dt = new_runtime - this.prevRuntime;
        //this.prevRuntime = this.runtime;
        this.runtime = new_runtime + this.tchange;
    }
}
